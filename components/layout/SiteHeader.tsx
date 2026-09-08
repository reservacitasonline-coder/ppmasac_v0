import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoMark, PhoneIcon } from "@/components/ui/icons";
import { hero, navLinks, site } from "@/content/site";

import styles from "./SiteHeader.module.css";

/** Transparent navigation that floats above the hero. */
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.logo} href="#top">
          <LogoMark className={styles.logoMark} />
          <span className={styles.logoText}>{site.name}</span>
        </Link>

        <nav aria-label="Main">
          <ul className={styles.menu}>
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  className={index === 0 ? styles.menuLinkActive : styles.menuLink}
                  href={link.href}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href={site.phone.href}>
            <span className={styles.phoneIcon}>
              <PhoneIcon className={styles.phoneGlyph} />
            </span>
            {site.phone.label}
          </a>
          <Button href={hero.cta.href} variant="light">
            {hero.cta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
