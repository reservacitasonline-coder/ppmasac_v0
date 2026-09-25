import { Container } from "@/components/ui/Container";
import { statement } from "@/content/site";

import styles from "./Statement.module.css";

/** Opening manifesto under the hero. Same copy, clearer corporate framing. */
export function Statement() {
  // Two sentences in the source string; split only for layout rhythm.
  const [lead, support] = statement.split(/(?<=\.)\s+/);

  return (
    <section className={styles.statement}>
      <Container>
        <div className={styles.panel} data-reveal>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.lead}>{lead}</p>
          {support ? <p className={styles.support}>{support}</p> : null}
        </div>
      </Container>
    </section>
  );
}
