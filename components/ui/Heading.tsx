import { cn } from "@/lib/cn";

import styles from "./Heading.module.css";

interface HeadingProps {
  /** One entry per rendered line, so headings break exactly where designed. */
  lines: readonly string[];
  tone?: "onDark" | "onLight";
  align?: "start" | "center";
  id?: string;
  className?: string;
}

/** Section heading in the poster display face. */
export function Heading({
  lines,
  tone = "onLight",
  align = "start",
  id,
  className,
}: HeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        tone === "onDark" ? styles.onDark : styles.onLight,
        align === "center" && styles.center,
        className,
      )}
    >
      {lines.map((line) => (
        <span className={styles.line} key={line}>
          {line}
        </span>
      ))}
    </h2>
  );
}
