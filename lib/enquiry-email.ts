import { site } from "@/content/site";
import type { ContactFieldName } from "@/content/types";

/**
 * Renders one contact enquiry as an email.
 *
 * Everything here is table markup with inline styles and no web fonts: mail
 * clients strip stylesheets, ignore most modern CSS and block remote images
 * until the reader asks for them, so the layout cannot depend on any of it.
 * The palette mirrors the design tokens in `app/globals.css`.
 */

const INK = "#16203a";
const BRAND = "#4e6cab";
const BRAND_DEEP = "#2f426b";
const MIST = "#b6c3dd";
const MUTED = "#3a4a6b";
const LINE = "#e4e9f4";
const WASH = "#f6f8fc";

const BODY_FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
/** Stand-in for the condensed display stack, which no mail client can load. */
const DISPLAY_FONT = "'Arial Narrow','Helvetica Neue',Helvetica,Arial,sans-serif";

const labels: Record<ContactFieldName, string> = {
  name: "Nombre",
  company: "Empresa",
  email: "Correo",
  phone: "Teléfono",
  service: "Servicio",
  message: "Mensaje",
};

/** The message gets its own block below, so it is not part of the data list. */
const details: ContactFieldName[] = ["name", "company", "email", "phone", "service"];

export interface Enquiry extends Record<ContactFieldName, string> {
  /** ISO timestamp of the moment the consent box was ticked. */
  consentedAt: string;
}

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Line breaks the visitor typed have to survive as markup. */
function paragraph(value: string) {
  return escape(value).replace(/\r?\n/g, "<br />");
}

function stamp(consentedAt: string) {
  const date = new Date(consentedAt);

  if (Number.isNaN(date.getTime())) return consentedAt;

  return new Intl.DateTimeFormat("es-PE", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Lima",
  }).format(date);
}

function filled(enquiry: Enquiry) {
  return details
    .filter((field) => enquiry[field])
    .map((field) => ({ field, label: labels[field], value: enquiry[field] }));
}

function subject(enquiry: Enquiry) {
  const suffix = enquiry.service ? ` — ${enquiry.service}` : "";
  return `Solicitud web: ${enquiry.name}${suffix}`;
}

function text(enquiry: Enquiry) {
  const lines = [
    "PPMA SAC — nueva solicitud de contacto",
    "",
    ...filled(enquiry).map(({ label, value }) => `${label}: ${value}`),
    "",
    `${labels.message}:`,
    enquiry.message,
    "",
    "—",
    `Consentimiento otorgado el ${stamp(enquiry.consentedAt)} (hora de Lima),`,
    "conforme a la Ley 29733 de Protección de Datos Personales.",
    `Enviado desde el formulario de ${site.url}`,
  ];

  return lines.join("\n");
}

/** Rows of the data list: label above value, hairline between entries. */
function detailRows(enquiry: Enquiry) {
  return filled(enquiry)
    .map(({ field, label, value }, index) => {
      const border = index === 0 ? "" : `border-top:1px solid ${LINE};padding-top:14px;`;
      const cell =
        `padding:0 0 14px;${border}font-family:${BODY_FONT};` +
        `font-size:15px;line-height:1.5;color:${INK};`;

      // The address is worth a click even where the reply button is hidden.
      const rendered =
        field === "email"
          ? `<a href="mailto:${encodeURIComponent(value)}" style="color:${BRAND};text-decoration:none">${escape(value)}</a>`
          : escape(value);

      return (
        `<tr><td style="${cell}">` +
        `<span style="display:block;font-size:11px;letter-spacing:0.12em;` +
        `text-transform:uppercase;color:${BRAND};padding-bottom:4px">${label}</span>` +
        `<strong style="font-weight:600">${rendered}</strong>` +
        `</td></tr>`
      );
    })
    .join("");
}

function html(enquiry: Enquiry) {
  const firstName = escape(enquiry.name.split(" ")[0]);
  const preheader = escape(
    `${enquiry.name}${enquiry.service ? ` · ${enquiry.service}` : ""} · ${enquiry.message.slice(0, 90)}`,
  );

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>${escape(subject(enquiry))}</title>
  </head>
  <body style="margin:0;padding:0;background:${MIST};-webkit-text-size-adjust:100%">
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">${preheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${MIST}">
      <tr>
        <td align="center" style="padding:32px 16px">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden">
            <tr>
              <td style="background:${BRAND_DEEP};padding:26px 32px">
                <p style="margin:0;font-family:${DISPLAY_FONT};font-size:26px;letter-spacing:0.16em;text-transform:uppercase;color:#ffffff">PPMA SAC</p>
                <p style="margin:6px 0 0;font-family:${BODY_FONT};font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:${MIST}">Nueva solicitud de contacto</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 32px 8px;font-family:${BODY_FONT};font-size:15px;line-height:1.6;color:${MUTED}">
                <p style="margin:0">${firstName} escribió desde el formulario de la web. Estos son los datos que dejó:</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 32px 0">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${detailRows(enquiry)}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px">
                <p style="margin:0 0 8px;border-top:1px solid ${LINE};padding-top:14px;font-family:${BODY_FONT};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND}">${labels.message}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${WASH};border-left:3px solid ${BRAND};border-radius:0 8px 8px 0">
                  <tr>
                    <td style="padding:16px 18px;font-family:${BODY_FONT};font-size:15px;line-height:1.65;color:${INK}">${paragraph(enquiry.message)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 32px 32px">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td bgcolor="${BRAND}" style="border-radius:8px">
                      <a href="mailto:${encodeURIComponent(enquiry.email)}?subject=${encodeURIComponent(`Re: tu solicitud a PPMA SAC`)}" style="display:inline-block;padding:13px 26px;font-family:${BODY_FONT};font-size:14px;font-weight:600;color:#ffffff;text-decoration:none">Responder a ${firstName} &rarr;</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:${WASH};border-top:1px solid ${LINE};padding:18px 32px;font-family:${BODY_FONT};font-size:12px;line-height:1.6;color:${MUTED}">
                <p style="margin:0">Consentimiento otorgado el ${escape(stamp(enquiry.consentedAt))} (hora de Lima), conforme a la Ley 29733 de Protección de Datos Personales.</p>
                <p style="margin:6px 0 0">Enviado automáticamente desde el formulario de <a href="${site.url}" style="color:${BRAND};text-decoration:none">ppmasac.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderEnquiryEmail(enquiry: Enquiry) {
  return {
    subject: subject(enquiry),
    html: html(enquiry),
    text: text(enquiry),
  };
}
