import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact, navLinks, site } from "@/content/site";

import { HeaderShell } from "./HeaderShell";
import styles from "./SiteHeader.module.css";

/**
 * Navigation that floats above the hero and stays fixed while scrolling. The
 * inner grid is `1fr auto 1fr` so the menu stays optically centred whatever the
 * width of the logo and the actions beside it.
 */
export function SiteHeader() {
  return (
    <HeaderShell>
      <Container className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label={`${site.logo.alt} — inicio`}>
          <Image
            className={styles.logoImage}
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Main">
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

        <div className={styles.actions}>
          <Button href={contact.cta.href} variant="light">
            {contact.cta.label}
          </Button>
        </div>
      </Container>
    </HeaderShell>
  );
}
