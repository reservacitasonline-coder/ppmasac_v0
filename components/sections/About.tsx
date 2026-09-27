import { Container } from "@/components/ui/Container";
import { ValueIcon } from "@/components/ui/icons";
import { about } from "@/content/site";

import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="nosotros" aria-labelledby="nosotros-title">
      <Container>
        <div className={styles.intro} data-reveal>
          <h2 id="nosotros-title" className={styles.title}>
            {about.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h2>
          <div className={styles.who}>
            <h3 className={styles.blockTitle}>{about.subtitle}</h3>
            <p className={styles.lead}>{about.lead}</p>
          </div>
          <div className={styles.bodyColumns}>
            {about.body.map((paragraph) => (
              <p className={styles.body} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.purpose} data-reveal>
          {about.pillars.map((pillar) => (
            <div className={styles.pillar} key={pillar.title}>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.values}>
          <h3 className={styles.blockTitle} data-reveal>
            {about.valuesTitle}
          </h3>
          <ul className={styles.valueList} data-reveal-group>
            {about.values.map((value) => (
              <li className={styles.value} key={value.title}>
                <span className={styles.valueIcon}>
                  <ValueIcon name={value.icon} />
                </span>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueText}>{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
