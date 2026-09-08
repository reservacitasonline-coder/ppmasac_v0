import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
        <Eyebrow tone="onDark">{hero.overline}</Eyebrow>

        <h1 id="hero-title" className={styles.title}>
          {hero.title.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h1>

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <ul className={styles.disciplines} aria-label="Áreas de trabajo">
              {hero.disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button href={hero.primary.href} variant="light">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="outline">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
