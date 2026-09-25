import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";

import styles from "./Services.module.css";

/** Summary of the six service lines. The detail lives on `/servicios`. */
export function Services() {
  return (
    <section
      className={styles.services}
      id="servicios"
      aria-labelledby="servicios-title"
    >
      <div className={styles.media}>
        <Image
          className={styles.mediaImage}
          src={services.background.src}
          alt={services.background.alt}
          fill
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>{services.eyebrow}</p>
          <h2 id="servicios-title" className={styles.title}>
            {services.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h2>
          <span className={styles.accent} aria-hidden="true" />
          <p className={styles.lead}>{services.lead}</p>
        </div>

        <ul className={styles.grid}>
          {services.groups.map((group) => (
            <li key={group.slug}>
              <Link className={styles.card} href={`/servicios#${group.slug}`}>
                <div className={styles.cardTop}>
                  <span className={styles.cardIndex}>{group.index}</span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    →
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <p className={styles.cardText}>{group.teaser ?? group.summary}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button href={services.cta.href} variant="light">
            {services.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
