import { Container } from "@/components/ui/Container";
import { statement } from "@/content/site";

import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={styles.statement}>
      <Container>
        <p className={styles.text}>{statement}</p>
      </Container>
    </section>
  );
}
