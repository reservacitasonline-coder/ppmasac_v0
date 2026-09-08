import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { faq } from "@/content/site";

import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <Container className={styles.inner}>
        <div className={styles.aside}>
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <Heading id="faq-title" lines={faq.heading} />

          <div className={styles.thumbs}>
            {faq.thumbnails.map((thumbnail) => (
              <figure className={styles.thumb} key={thumbnail.src}>
                <Image
                  className={styles.thumbImage}
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* Native <details> keeps the accordion working without client JS. */}
        <div className={styles.list}>
          {faq.items.map((item, index) => (
            <details className={styles.item} key={item.question} open={index === 0}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
