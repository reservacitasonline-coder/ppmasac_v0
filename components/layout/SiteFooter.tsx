import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ArrowUpIcon } from "@/components/ui/icons";
import { footer, navLinks, site } from "@/content/site";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bar}>
        <Container className={styles.barInner}>
          <nav aria-label="Footer">
            <ul className={styles.menu}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className={styles.menuLink} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link className={styles.toTop} href="#top">
            Back to top
            <span className={styles.toTopIcon}>
              <ArrowUpIcon className={styles.toTopGlyph} />
            </span>
          </Link>
        </Container>
      </div>

      <div className={styles.wordmarkBlock}>
        <div className={styles.media}>
          <Image
            className={styles.mediaImage}
            src={footer.background.src}
            alt={footer.background.alt}
            fill
            sizes="100vw"
          />
        </div>
        <p className={styles.wordmark}>{site.name}</p>
      </div>

      <div className={styles.legal}>
        <Container className={styles.legalInner}>
          <p>{footer.legal}</p>
          <ul className={styles.legalLinks}>
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
