"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_MS = 90;
const MAX_DELAY_MS = 540;
const DURATION_MS = 700;

/**
 * Fades `[data-reveal]` blocks, and the children of `[data-reveal-group]` one
 * after another, into place as they scroll into view. Content is only hidden
 * once this has run (`reveal-ready` on <html>), so it stays visible without
 * JavaScript or with reduced motion.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    document
      .querySelectorAll<HTMLElement>("[data-reveal-group]")
      .forEach((group) => {
        [...group.children].forEach((child, index) => {
          if (!(child instanceof HTMLElement)) return;
          child.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * STAGGER_MS, MAX_DELAY_MS)}ms`,
          );
          targets.push(child);
        });
      });

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("is-revealed", "is-revealing");
          // Hand transitions back to the element (hover lifts and the like)
          // once the entrance has played.
          const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
          timers.push(
            window.setTimeout(
              () => el.classList.remove("is-revealing"),
              delay + DURATION_MS + 50,
            ),
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    document.documentElement.classList.add("reveal-ready");

    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, [pathname]);

  return null;
}
