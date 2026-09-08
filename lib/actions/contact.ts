"use server";

import type { ContactFieldName, ContactFormState } from "@/content/types";

/** Fields the visitor has to fill in for the enquiry to be actionable. */
const required: ContactFieldName[] = ["name", "email", "message"];

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

const labels: Record<ContactFieldName, string> = {
  name: "nombre",
  company: "empresa",
  email: "correo",
  phone: "teléfono",
  service: "servicio",
  message: "mensaje",
};

function read(formData: FormData, field: ContactFieldName) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim().slice(0, maxLength[field]) : "";
}

/**
 * Hands the enquiry over to whoever answers it. No transactional mail provider
 * is wired up yet, so the enquiry currently reaches the server log and nowhere
 * else. This is the only place that needs to change to start delivering.
 *
 * `consentedAt` travels with the enquiry because Ley 29733 puts the burden of
 * proving consent on us: whatever stores the enquiry has to store the moment
 * the box was ticked alongside it.
 */
async function deliver(
  enquiry: Record<ContactFieldName, string> & { consentedAt: string },
) {
  console.info("[contacto] nueva solicitud", enquiry);
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
      errors[field] = `Indícanos tu ${labels[field]}.`;
    }
  }

  if (!consent) {
    errors.consent = "Necesitamos tu autorización para tratar estos datos.";
  }

  if (values.email && !emailPattern.test(values.email)) {
    errors.email = "Revisa el correo, no parece una dirección válida.";
  }

  if (!errors.message && values.message.length < 15) {
    errors.message = "Cuéntanos un poco más sobre el proyecto.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados para poder enviar tu solicitud.",
      errors,
      values,
      consent,
    };
  }

  await deliver({ ...values, consentedAt: new Date().toISOString() });

  return {
    status: "success",
    message: `Gracias, ${values.name.split(" ")[0]}. Recibimos tu solicitud y te responderemos a ${values.email}.`,
    errors: {},
    values: {},
  };
}
