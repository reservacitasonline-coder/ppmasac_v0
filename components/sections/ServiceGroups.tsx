import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";

import styles from "./ServiceGroups.module.css";

/** The six service lines in full, one band each. */
export function ServiceGroups() {
  const { closing } = services.page;

  return (
    <>
      <div className={styles.groups}>
        {services.groups.map((group) => (
          <section
            className={styles.group}
            id={group.slug}
            key={group.slug}
            aria-labelledby={`${group.slug}-title`}
          >
            <Container>
              <div className={styles.head}>
                <div>
                  <span className={styles.index}>{group.index}</span>
                  <h2 className={styles.title} id={`${group.slug}-title`}>
                    {group.title}
                  </h2>
                </div>
                <p className={styles.summary}>{group.summary}</p>
              </div>

              <div className={styles.body}>
                <figure className={styles.figure}>
                  <Image
                    className={styles.image}
                    src={group.photo.src}
                    alt={group.photo.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                  />
                </figure>

                <ul className={styles.items}>
                  {group.items.map((item) => (
                    <li className={styles.item} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <section className={styles.closing}>
        <Container className={styles.closingInner}>
          <div>
            <h2 className={styles.closingTitle}>{closing.title}</h2>
            <p className={styles.closingText}>{closing.body}</p>
          </div>
          <Button href={closing.cta.href} variant="light">
            {closing.cta.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
