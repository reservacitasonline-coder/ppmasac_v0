import { site } from "@/content/site";

/** Chat link with the greeting prefilled, shared by every WhatsApp entry point. */
export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
