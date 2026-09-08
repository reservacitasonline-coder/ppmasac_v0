import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { process } from "@/content/site";

import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.process} id="projects" aria-labelledby="process-title">
      <div className={styles.media}>
        <Image
          className={styles.mediaImage}
          src={process.background.src}
          alt={process.background.alt}
          fill
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <Heading
          id="process-title"
          lines={process.heading}
          tone="onDark"
          align="center"
        />

        <ol className={styles.grid}>
          {process.steps.map((step) => (
            <li className={styles.step} key={step.index}>
              <span className={styles.stepIndex}>{step.index}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
