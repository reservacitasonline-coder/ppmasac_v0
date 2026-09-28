import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
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
          <p className={styles.legalName}>{hero.legalName}</p>
          <h1 id="hero-title" className={styles.title}>
            {hero.title.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions} data-whatsapp-avoid>
            <Button href={hero.primary.href} variant="light">
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>
        </div>

        <dl className={styles.proof}>
          {hero.proof.map((item) => (
            <div className={styles.proofItem} key={item.label.join(" ")}>
              <dt className={styles.proofLabel}>
                <span className={styles.proofLabelLine}>{item.label[0]}</span>{" "}
                <span className={styles.proofLabelLine}>{item.label[1]}</span>
              </dt>
              <dd className={styles.proofValue}>
                <CountUp value={item.value} />
                {"suffix" in item && item.suffix ? (
                  <span className={styles.proofSuffix}>{item.suffix}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
