import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
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
          <div className={styles.headMain}>
            <p className={styles.kicker}>{clients.eyebrow}</p>
            <h2 id="clientes-title" className={styles.title}>
              {clients.heading.map((line) => (
                <span className={styles.titleLine} key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <span className={styles.accent} aria-hidden="true" />
          </div>

          <div className={styles.summary}>
            <p className={styles.count}>
              <span className={styles.countValue}>
                <CountUp value={String(clients.items.length)} />
              </span>
              <span className={styles.countLabel}>{clients.countLabel}</span>
            </p>
            <p className={styles.lead}>{clients.lead}</p>
          </div>
        </div>

        <ul className={styles.grid} data-reveal-group>
          {clients.items.map((client) => (
            <li className={styles.item} key={client.name}>
              {/* Fixed-height frame so logos of very different proportions
                  read at a comparable optical size. */}
              <span
                className={styles.frame}
                style={
                  client.scale
                    ? ({ "--logo-scale": client.scale } as CSSProperties)
                    : undefined
                }
              >
                <Image
                  className={styles.logo}
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="200px"
                />
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
