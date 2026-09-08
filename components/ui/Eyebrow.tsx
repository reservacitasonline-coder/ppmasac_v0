import type { ReactNode } from "react";

import styles from "./Eyebrow.module.css";

/** Small uppercase label with a leading rule, used above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}
