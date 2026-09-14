"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      language?: string;
      appearance?: "always" | "execute" | "interaction-only";
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileFieldProps {
  siteKey: string;
  /** Change this value after a failed submit so Cloudflare issues a fresh token. */
  resetSignal?: string | number;
  className?: string;
}

/** Explicit Turnstile widget for the contact form (managed render + reset). */
export function TurnstileField({
  siteKey,
  resetSignal,
  className,
}: TurnstileFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const mount = () => {
    const api = window.turnstile;
    const node = containerRef.current;
    if (!api || !node) return;

    if (widgetIdRef.current) {
      api.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    node.innerHTML = "";
    widgetIdRef.current = api.render(node, {
      sitekey: siteKey,
      theme: "light",
      language: "es",
      appearance: "always",
    });
  };

  useEffect(() => {
    mount();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // siteKey is stable for the life of the page.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount once; remount via Script onLoad
  }, [siteKey]);

  useEffect(() => {
    if (resetSignal === undefined) return;
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={mount}
      />
      <div className={className} ref={containerRef} />
    </>
  );
}
