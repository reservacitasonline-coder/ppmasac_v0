import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { clients } from "@/content/site";

import styles from "./Clients.module.css";

export function Clients() {
  return (
    <section className={styles.clients} id="clientes" aria-labelledby="clientes-title">
      <Container>
        <Eyebrow>{clients.eyebrow}</Eyebrow>
        <Heading id="clientes-title" lines={clients.heading} />

        <ul className={styles.grid}>
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
