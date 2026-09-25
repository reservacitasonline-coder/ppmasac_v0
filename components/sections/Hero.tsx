import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/site";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Image
          className={styles.mediaImage}
          src={hero.background.src}
          alt={hero.background.alt}
          fill
          priority
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            {hero.title.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.overline}>{hero.overline}</p>
        </div>

        <div className={styles.bottom}>
          <ul className={styles.disciplines} aria-label="Áreas de trabajo">
            {hero.disciplines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.actions} data-whatsapp-avoid>
            <Button href={hero.primary.href} variant="light">
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
