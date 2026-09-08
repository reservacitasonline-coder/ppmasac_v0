import { Container } from "@/components/ui/Container";
import { stats } from "@/content/site";

import styles from "./Stats.module.css";

export function Stats() {
  return (
    <section className={styles.stats} aria-label="Practice in numbers">
      <Container>
        <dl className={styles.grid}>
          {stats.map((stat) => (
            <div className={styles.item} key={stat.label}>
              <dd className={styles.value}>
                {stat.value}
                {stat.suffix ? (
                  <span className={styles.suffix}>{stat.suffix}</span>
                ) : null}
              </dd>
              <dt className={styles.label}>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
