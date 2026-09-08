import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { services } from "@/content/site";

import styles from "./Services.module.css";

/** Summary of the six service lines. The detail lives on `/servicios`. */
export function Services() {
  return (
    <section className={styles.services} id="servicios" aria-labelledby="servicios-title">
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
          <Eyebrow tone="onDark">{services.eyebrow}</Eyebrow>
          <Heading
            id="servicios-title"
            lines={services.heading}
            tone="onDark"
            align="center"
          />
          <p className={styles.lead}>{services.lead}</p>
        </div>

        <ul className={styles.grid}>
          {services.groups.map((group) => (
            <li key={group.slug}>
              <Link className={styles.card} href={`/servicios#${group.slug}`}>
                <span className={styles.cardIndex}>{group.index}</span>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <p className={styles.cardText}>{group.summary}</p>
                <span className={styles.cardArrow} aria-hidden="true">
                  →
                </span>
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
