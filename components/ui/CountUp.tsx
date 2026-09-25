"use client";

import { useEffect, useRef } from "react";

const DURATION_MS = 1400;

/**
 * Counts from zero up to `value` the first time it scrolls into view, keeping
 * the leading zeros of the source ("08"). The server renders the final figure,
 * which is also what reduced-motion visitors see.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const target = Number.parseInt(value, 10);
    if (!el || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) => String(n).padStart(value.length, "0");
    let frame = 0;
    el.textContent = format(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          el.textContent = format(Math.round((1 - (1 - t) ** 3) * target));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
      <span className="srOnly">{value}</span>
    </>
  );
}
