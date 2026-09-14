"use server";

import { headers } from "next/headers";

import { contact, footer } from "@/content/site";
import type { ContactFieldName, ContactFormState } from "@/content/types";
import { sendEnquiry } from "@/lib/mail";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { phoneRegExp } from "@/lib/validation";

const copy = contact.form.errors;

/** Fields the visitor has to fill in for the enquiry to be actionable. */
const required = ["name", "email", "message"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Longest value we keep per field, so a bot cannot post megabytes of text. */
const maxLength: Record<ContactFieldName, number> = {
  name: 120,
  company: 120,
  email: 160,
  phone: 40,
  service: 80,
  message: 4000,
};

function read(formData: FormData, field: ContactFieldName) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim().slice(0, maxLength[field]) : "";
}

/**
 * Hands the enquiry over to whoever answers it: a Resend email to the customer
 * care inbox. Returns whether it got through.
 *
 * `consentedAt` travels with the enquiry because Ley 29733 puts the burden of
 * proving consent on us: whatever stores the enquiry has to store the moment
 * the box was ticked alongside it.
 */
async function deliver(
  enquiry: Record<ContactFieldName, string> & { consentedAt: string },
) {
  try {
    return await sendEnquiry(enquiry);
  } catch (cause) {
    console.error("[contacto] el envío falló", cause);
    return false;
  }
}

export async function submitEnquiry(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = {
    name: read(formData, "name"),
    company: read(formData, "company"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    service: read(formData, "service"),
    message: read(formData, "message"),
  };

  // Hidden field no human ever sees. If it carries a value the submission is
  // automated, so it is accepted and dropped instead of bouncing back.
  if (formData.get("website")) {
    return { status: "success", message: "", errors: {}, values: {} };
  }

  // Consent has to be given actively, so an unticked box stops the send.
  const consent = formData.get("consent") === "yes";

  const errors: ContactFormState["errors"] = {};

  for (const field of required) {
    if (!values[field]) {
      errors[field] = copy[field];
    }
  }

  if (!consent) {
    errors.consent = copy.consent;
  }

  const turnstileToken = formData.get("cf-turnstile-response");
  const token = typeof turnstileToken === "string" ? turnstileToken : "";
  const requestHeaders = await headers();
  const remoteip =
    requestHeaders.get("cf-connecting-ip") ??
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    undefined;

  const turnstileOk = await verifyTurnstileToken(token, remoteip);
  if (!turnstileOk) {
    errors.turnstile = copy.turnstile;
  }

  if (values.email && !emailPattern.test(values.email)) {
    errors.email = copy.emailInvalid;
  }

  // The input only accepts digits and phone punctuation, but the browser is
  // not the last word on what actually arrives here.
  if (values.phone && !phoneRegExp.test(values.phone)) {
    errors.phone = copy.phoneInvalid;
  }

  if (!errors.message && values.message.length < 15) {
    errors.message = copy.messageShort;
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: copy.summary,
      errors,
      values,
      consent,
    };
  }

  const delivered = await deliver({
    ...values,
    consentedAt: new Date().toISOString(),
  });

  // Keeping the typed values lets the visitor retry without writing it again.
  if (!delivered) {
    return {
      status: "error",
      message: `No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos o escríbenos a ${footer.contact.email}.`,
      errors: {},
      values,
      consent,
    };
  }

  return {
    status: "success",
    message: `Gracias, ${values.name.split(" ")[0]}. Recibimos tu solicitud y te responderemos a ${values.email}.`,
    errors: {},
    values: {},
  };
}
