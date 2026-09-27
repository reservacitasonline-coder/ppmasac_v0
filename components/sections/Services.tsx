import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";

import styles from "./Services.module.css";

/**
 * The six service lines, numbered in the same order as `/servicios`, where the
 * detail of each one lives.
 */
export function Services() {
  const steps = services.groups.flatMap((group) => {
    const step = services.lifecycle.find((item) => item.slug === group.slug);
    return step ? [{ ...step, group }] : [];
  });

  return (
    <section
      className={styles.services}
      id="servicios"
      aria-labelledby="servicios-title"
    >
      <Container>
        <div data-reveal>
          <h2 id="servicios-title" className={styles.title}>
            {services.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.lead}>{services.lead}</p>
        </div>

        <ol className={styles.timeline} data-reveal-group>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.slug}>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>

              <div className={styles.body}>
                <h3 className={styles.stepTitle}>
                  <Link className={styles.stepLink} href={`/servicios#${step.slug}`}>
                    {step.group.title.replace(/\n/g, " ")}
                  </Link>
                </h3>
                <p className={styles.stepText}>
                  {step.group.teaser ?? step.group.summary}
                </p>
              </div>

              <ul className={styles.deliverables}>
                {step.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </li>
          ))}
        </ol>

        <div className={styles.actions}>
          <Button href={services.cta.href} variant="light">
            {services.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
