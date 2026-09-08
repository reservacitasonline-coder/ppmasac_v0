import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/content/site";

import styles from "./ServicesCover.module.css";

/** Cover band of the services page, with a jump list to each service line. */
export function ServicesCover() {
  const { page } = services;

  return (
    <section className={styles.cover}>
      <div className={styles.media}>
        <Image
          className={styles.mediaImage}
          src={page.background.src}
          alt={page.background.alt}
          fill
          sizes="100vw"
          priority
        />
      </div>

      <Container className={styles.inner}>
        <Eyebrow tone="onDark">{services.eyebrow}</Eyebrow>

        <h1 className={styles.title}>
          {page.heading.map((line) => (
            <span className={styles.titleLine} key={line}>
              {line}
            </span>
          ))}
        </h1>

        <p className={styles.lead}>{page.lead}</p>

        <nav className={styles.index} aria-label={page.indexTitle}>
          <ul className={styles.indexList}>
            {services.groups.map((group) => (
              <li key={group.slug}>
                <Link className={styles.indexLink} href={`#${group.slug}`}>
                  <span className={styles.indexNumber}>{group.index}</span>
                  {group.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
