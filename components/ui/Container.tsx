import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

import styles from "./Container.module.css";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centres content at the site's max width and applies the page gutter. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={cn(styles.container, className)}>{children}</Tag>;
}
