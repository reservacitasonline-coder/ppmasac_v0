import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

import styles from "./WhatsAppButton.module.css";

const { number, message } = site.whatsapp;
const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** Floating shortcut to a WhatsApp chat, rendered on every route. */
export function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${site.whatsapp.label}`}
    >
      <WhatsAppIcon className={styles.icon} />
    </a>
  );
}
