import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { privacy } from "@/content/site";

import styles from "./PrivacyPolicy.module.css";

/** The privacy notice: a deep blue masthead followed by the numbered clauses. */
export function PrivacyPolicy() {
  return (
    <article>
      <header className={styles.cover}>
        <Container className={styles.coverInner}>
          <Eyebrow tone="onDark">{privacy.eyebrow}</Eyebrow>

          <h1 className={styles.title}>
            {privacy.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.lead}>{privacy.lead}</p>
        </Container>
      </header>

      <div className={styles.body}>
        <Container>
          {privacy.sections.map((section) => (
            <section className={styles.clause} key={section.slug}>
              {/* The anchor sits on the heading, not the section: headings get
                  the fixed-header clearance, sections get the rule that cancels
                  their own padding. */}
              <h2 className={styles.clauseHeading} id={section.slug}>
                <span className={styles.clauseIndex}>{section.index}</span>
                {section.title}
              </h2>

              <div className={styles.clauseBody}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.items ? (
                  <ul className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </Container>
      </div>
    </article>
  );
}
