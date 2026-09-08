import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { testimonial } from "@/content/site";

import styles from "./Testimonial.module.css";

export function Testimonial() {
  const { quote, author } = testimonial;

  return (
    <section className={styles.testimonial} id="contact">
      <Container className={styles.inner}>
        <span className={styles.mark} aria-hidden="true">
          ”
        </span>
        <figure>
          <blockquote className={styles.quote}>{quote}</blockquote>
          <figcaption className={styles.author}>
            <Image
              className={styles.avatar}
              src={author.avatar.src}
              alt={author.avatar.alt}
              width={author.avatar.width}
              height={author.avatar.height}
            />
            <span className={styles.authorMeta}>
              <span className={styles.authorName}>{author.name}</span>
              <span className={styles.authorRole}>{author.role}</span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
