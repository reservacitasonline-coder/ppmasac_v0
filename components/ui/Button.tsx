import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import styles from "./Button.module.css";

type ButtonVariant = "solid" | "light" | "outline";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  solid: styles.solid,
  light: styles.light,
  outline: styles.outline,
};

/**
 * Pill call-to-action. Uses `next/link` for in-app targets and a plain anchor
 * for protocol links such as `tel:` or `mailto:`.
 */
export function Button({
  href,
  variant = "solid",
  withArrow = true,
  className,
  children,
}: ButtonProps) {
  const classes = cn(styles.button, variantClass[variant], className);
  const content = (
    <>
      {children}
      {withArrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {content}
    </a>
  );
}
