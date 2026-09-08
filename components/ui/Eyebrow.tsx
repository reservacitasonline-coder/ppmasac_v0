import type { ReactNode } from "react";

import styles from "./Eyebrow.module.css";

interface EyebrowProps {
  children: ReactNode;
  tone?: "onLight" | "onDark";
}

/** Small uppercase label with a leading rule, used above section headings. */
export function Eyebrow({ children, tone = "onLight" }: EyebrowProps) {
  return (
    <p className={tone === "onDark" ? styles.eyebrowOnDark : styles.eyebrow}>
      {children}
    </p>
  );
}
