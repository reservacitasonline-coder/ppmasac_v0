"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import styles from "./SiteHeader.module.css";

/**
 * Thin client boundary around the fixed header. It watches a sentinel sitting
 * at the very top of the document with an IntersectionObserver — cheaper than a
 * scroll listener — and adds the condensed, blurred treatment once the page has
 * scrolled away from the hero. The header's contents stay server-rendered.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header
        className={cn(styles.header, isScrolled && styles.headerScrolled)}
        data-scrolled={isScrolled ? "true" : undefined}
      >
        {children}
      </header>
    </>
  );
}
