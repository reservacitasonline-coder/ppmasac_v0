"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { whatsappHref } from "@/lib/whatsapp";

import styles from "./WhatsAppButton.module.css";

/**
 * Floating shortcut to a WhatsApp chat, rendered on every route. It steps
 * aside while an element marked `data-whatsapp-avoid` (the hero buttons) sits
 * in the bottom strip of the viewport, where the button would cover it.
 */
export function WhatsAppButton() {
  const pathname = usePathname();
  // Keyed by route so a page without targets never inherits a hidden state.
  const [hiddenOn, setHiddenOn] = useState<string | null>(null);
  const hidden = hiddenOn === pathname;

  useEffect(() => {
    const targets = document.querySelectorAll("[data-whatsapp-avoid]");
    if (!targets.length) return;

    const covered = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) covered.add(entry.target);
          else covered.delete(entry.target);
        }
        setHiddenOn(covered.size > 0 ? pathname : null);
      },
      { rootMargin: "-84% 0px 0px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a
      className={cn(styles.button, hidden && styles.hidden)}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbanos por WhatsApp al ${site.whatsapp.label}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <WhatsAppIcon className={styles.icon} />
    </a>
  );
}
