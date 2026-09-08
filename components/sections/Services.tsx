import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { services } from "@/content/site";
import type { ServiceCard, ServicePhoto } from "@/content/types";
import { cn } from "@/lib/cn";

import styles from "./Services.module.css";

const TILE_SIZES = "(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw";

function PhotoTile({ tile }: { tile: ServicePhoto }) {
  return (
    <figure className={cn(styles.photo, tile.tall && styles.photoTall)}>
      <Image
        className={styles.photoImage}
        src={tile.photo.src}
        alt={tile.photo.alt}
        fill
        sizes={TILE_SIZES}
      />
      <figcaption className={styles.photoCaption}>
        <span className={styles.photoTitle}>{tile.title}</span>
        <span className={styles.photoText}>{tile.description}</span>
      </figcaption>
    </figure>
  );
}

function CardTile({ card }: { card: ServiceCard }) {
  return (
    <article className={styles.card}>
      <span className={styles.cardIndex}>{card.index}</span>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardText}>{card.description}</p>
      <span className={styles.cardArrow} aria-hidden="true">
        →
      </span>
    </article>
  );
}

export function Services() {
  const [tallPhoto, widePhoto] = services.photos;
  const [engineering, excellence, preconstruction] = services.cards;

  return (
    <section className={styles.services} id="services" aria-labelledby="services-title">
      <Container>
        <Eyebrow>{services.eyebrow}</Eyebrow>

        <div className={styles.head}>
          <Heading id="services-title" lines={services.heading} />
          <p className={styles.lead}>{services.lead}</p>
        </div>

        <div className={styles.grid}>
          <PhotoTile tile={tallPhoto} />
          <CardTile card={engineering} />
          <CardTile card={excellence} />
          <PhotoTile tile={widePhoto} />
          <CardTile card={preconstruction} />
        </div>
      </Container>
    </section>
  );
}
