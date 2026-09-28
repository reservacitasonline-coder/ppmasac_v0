import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Container } from "@/components/ui/Container";
import { clients } from "@/content/site";

import styles from "./Clients.module.css";

export function Clients() {
  return (
    <section
      className={styles.clients}
      id="clientes"
      aria-labelledby="clientes-title"
    >
      <Container>
        <div className={styles.head} data-reveal>
          <h2 id="clientes-title" className={styles.title}>
            {clients.heading.map((line) => (
              <span className={styles.titleLine} key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.lead}>
            <strong className={styles.count}>
              {clients.items.length} {clients.countLabel}
            </strong>{" "}
            {clients.lead}
          </p>
        </div>

        <ul className={styles.wall} data-reveal-group>
          {clients.items.map((client) => (
            <li className={styles.item} key={client.name}>
              {/* Every logo gets the same visual area whatever its
                  proportions, so a square mark and a long wordmark read at
                  a comparable size. */}
              <span
                className={styles.frame}
                style={
                  {
                    "--ratio": client.width / client.height,
                    "--logo-scale": "scale" in client ? client.scale : 1,
                  } as CSSProperties
                }
              >
                <Image
                  className={styles.logo}
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="220px"
                />
              </span>
            </li>
          ))}
          <li className={styles.cta}>
            <p className={styles.ctaTitle}>{clients.cta.title}</p>
            <Link className={styles.ctaLink} href={clients.cta.href}>
              {clients.cta.label}
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
