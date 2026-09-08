import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { about } from "@/content/site";

import styles from "./About.module.css";

export function About() {
  const [wide, square] = about.gallery;

  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <Container>
        <div className={styles.head}>
          <Heading id="about-title" lines={about.heading} tone="onDark" />
          <div className={styles.lead}>
            <p>{about.lead}</p>
            <Button href={about.cta.href} variant="outline">
              {about.cta.label}
            </Button>
          </div>
        </div>

        <div className={styles.gallery}>
          <figure className={styles.figureWide}>
            <Image
              className={styles.image}
              src={wide.src}
              alt={wide.alt}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              className={styles.image}
              src={square.src}
              alt={square.alt}
              fill
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </figure>
        </div>

        <div className={styles.body}>
          <h3 className={styles.subtitle}>{about.subtitle}</h3>
          <div className={styles.columns}>
            {about.columns.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
