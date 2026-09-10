import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
  tone?: "onLight" | "onDark";
  className?: string;
}

/** Small uppercase label with a leading rule, used above section headings. */
export function Eyebrow({ children, tone = "onLight", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        tone === "onDark" ? styles.eyebrowOnDark : styles.eyebrow,
        className,
      )}
    >
      {children}
    </p>
  );
}
