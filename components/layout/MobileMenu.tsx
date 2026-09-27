"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from "react";

import { Button } from "@/components/ui/Button";
import { MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import type { CallToAction, NavLink } from "@/content/types";

import styles from "./SiteHeader.module.css";

interface MobileMenuProps {
  links: NavLink[];
  cta: CallToAction;
  email: string;
  whatsapp: { href: string; label: string };
}

/**
 * Menu button and full-height panel for narrow viewports. The panel hangs off
 * the bottom of the fixed header, locks the page scroll while open, and keeps
 * keyboard focus cycling between the button and its own links.
 */
export function MobileMenu({ links, cta, email, whatsapp }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      buttonRef.current?.focus();
    };

    const desktop = window.matchMedia("(min-width: 901px)");
    const onViewportChange = () => {
      if (desktop.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);

    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [isOpen]);

  const closeOnLink = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) setIsOpen(false);
  };

  const trapFocus = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!isOpen || event.key !== "Tab" || !panelRef.current || !buttonRef.current) return;

    const focusables = [
      buttonRef.current,
      ...panelRef.current.querySelectorAll<HTMLElement>("a[href]"),
    ];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className={styles.mobileMenu} onKeyDown={trapFocus}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.menuToggleBars} aria-hidden="true" />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className={styles.panel}
        data-open={isOpen ? "true" : undefined}
        onClick={closeOnLink}
      >
        <nav aria-label="Principal">
          <ul className={styles.panelList}>
            {links.map((link) => (
              <li key={link.href}>
                <Link className={styles.panelLink} href={link.href}>
                  {link.label}
                  <span className={styles.panelArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.panelFooter}>
          <div className={styles.panelCta}>
            <Button href={cta.href} variant="light">
              {cta.label}
            </Button>
          </div>
          <ul className={styles.panelContact}>
            <li>
              <a className={styles.panelContactLink} href={`mailto:${email}`}>
                <MailIcon className={styles.panelContactIcon} />
                {email}
              </a>
            </li>
            <li>
              <a
                className={styles.panelContactLink}
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className={styles.panelContactIcon} />
                WhatsApp {whatsapp.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
