import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/site";
import { cn } from "@/lib/cn";

import styles from "./ServiceGroups.module.css";

/** Enough bullets that a single column starts to feel like a scroll wall. */
const DENSE_AT = 12;

/** The six service lines in full, one band each. */
export function ServiceGroups() {
  const { closing } = services.page;

  return (
    <>
      <div className={styles.groups}>
        {services.groups.map((group) => {
          const dense = group.items.length >= DENSE_AT;

          return (
            <section
              className={cn(styles.group, dense && styles.dense)}
              id={group.slug}
              key={group.slug}
              aria-labelledby={`${group.slug}-title`}
            >
              <Container>
                <div className={styles.head}>
                  <span className={styles.index}>{group.index}</span>
                  <h2 className={styles.title} id={`${group.slug}-title`}>
                    {group.title}
                  </h2>
                  {dense ? (
                    <p className={styles.summary}>{group.summary}</p>
                  ) : null}
                </div>

                <div className={styles.body}>
                  <figure className={styles.figure}>
                    <Image
                      className={styles.image}
                      src={group.photo.src}
                      alt={group.photo.alt}
                      fill
                      sizes={
                        dense
                          ? "(max-width: 900px) 100vw, 32vw"
                          : "(max-width: 900px) 100vw, 40vw"
                      }
                    />
                  </figure>

                  <div className={styles.copy}>
                    {dense ? null : (
                      <p className={styles.summary}>{group.summary}</p>
                    )}
                    <ul className={styles.items}>
                      {group.items.map((item) => (
                        <li className={styles.item} key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
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
