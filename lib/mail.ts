import { Resend } from "resend";

import { renderEnquiryEmail, type Enquiry } from "@/lib/enquiry-email";

/** Inbox that answers the enquiries the contact form collects. */
const TO = process.env.CONTACT_TO_EMAIL ?? "atencionalcliente@ppmasac.com";

/**
 * Resend only accepts a sender on a domain verified in the account, so this
 * has to point at a ppmasac.com address once the domain is set up there.
 */
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Formulario web <onboarding@resend.dev>";

export type { Enquiry };

/**
 * Delivers one enquiry to the inbox that answers it. Resolves to `false` when
 * the provider rejects the send or the API key is missing, so the caller can
 * tell the visitor to reach us another way instead of silently losing it.
 */
export async function sendEnquiry(enquiry: Enquiry): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contacto] falta RESEND_API_KEY, la solicitud no se envió");
    return false;
  }

  const { error } = await new Resend(apiKey).emails.send({
    ...renderEnquiryEmail(enquiry),
    from: FROM,
    to: TO,
    // Answering the notification writes back to the visitor directly.
    replyTo: enquiry.email,
  });

  if (error) {
    console.error("[contacto] Resend rechazó el envío", error);
    return false;
  }

  return true;
}
