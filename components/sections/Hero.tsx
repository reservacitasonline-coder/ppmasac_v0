import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero, site } from "@/content/site";

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
        <h1 id="hero-title" className={styles.title}>
          {site.name}
        </h1>

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <p className={styles.tagline}>{site.tagline}</p>
            <Button href={hero.discover.href} variant="light">
              {hero.discover.label}
            </Button>
          </div>

          <figure className={styles.card}>
            <div className={styles.cardMedia}>
              <Image
                className={styles.cardImage}
                src={hero.card.photo.src}
                alt={hero.card.photo.alt}
                fill
                sizes="(max-width: 720px) 100vw, 260px"
              />
            </div>
            <figcaption className={styles.cardCaption}>{hero.card.caption}</figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
