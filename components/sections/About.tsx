import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ValueIcon } from "@/components/ui/icons";
import { about } from "@/content/site";

import styles from "./About.module.css";

export function About() {
  const [wide, square] = about.gallery;

  return (
    <section className={styles.about} id="nosotros" aria-labelledby="nosotros-title">
      <Container>
        <div className={styles.intro}>
          <div className={styles.introCopy}>
            <p className={styles.kicker}>{about.eyebrow}</p>
            <h2 id="nosotros-title" className={styles.title}>
              {about.heading.map((line) => (
                <span className={styles.titleLine} key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <span className={styles.accent} aria-hidden="true" />
          </div>
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
              sizes="(max-width: 900px) 100vw, 62vw"
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              className={styles.image}
              src={square.src}
              alt={square.alt}
              fill
              sizes="(max-width: 900px) 100vw, 36vw"
            />
          </figure>
        </div>

        <div className={styles.who}>
          <div className={styles.whoHead}>
            <span className={styles.sectionIndex} aria-hidden="true">
              01
            </span>
            <h3 className={styles.subtitle}>{about.subtitle}</h3>
          </div>
          <div className={styles.columns}>
            {about.columns.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.pillars}>
          {about.pillars.map((pillar, index) => (
            <article className={styles.pillar} key={pillar.title}>
              <span className={styles.pillarIndex} aria-hidden="true">
                {String(index + 2).padStart(2, "0")}
              </span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.values}>
          <div className={styles.whoHead}>
            <span className={styles.sectionIndex} aria-hidden="true">
              04
            </span>
            <h3 className={styles.subtitle}>{about.valuesTitle}</h3>
          </div>
          <ul className={styles.valueList}>
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
