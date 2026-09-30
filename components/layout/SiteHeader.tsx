import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact, footer, navLinks, site } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

import { HeaderShell } from "./HeaderShell";
import { HomeLink } from "./HomeLink";
import { MenuLink } from "./MenuLink";
import { MobileMenu } from "./MobileMenu";
import styles from "./SiteHeader.module.css";

/**
 * Navigation that floats above the hero and stays fixed while scrolling. The
 * inner grid is `1fr auto 1fr` so the menu stays optically centred whatever the
 * width of the logo and the actions beside it. Narrow viewports swap the inline
 * menu for `MobileMenu`.
 */
export function SiteHeader() {
  return (
    <HeaderShell>
      <Container className={styles.inner}>
        <HomeLink className={styles.logo} aria-label={`${site.logo.alt} — inicio`}>
          <Image
            className={styles.logoImage}
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            priority
          />
        </HomeLink>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.menu}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <MenuLink className={styles.menuLink} href={link.href}>
                  {link.label}
                </MenuLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.barCta}>
            <Button href={contact.cta.href} variant="light">
              {contact.cta.label}
            </Button>
          </div>
          <MobileMenu
            links={navLinks}
            cta={contact.cta}
            email={footer.contact.email}
            whatsapp={{ href: whatsappHref, label: site.whatsapp.label }}
          />
        </div>
      </Container>
    </HeaderShell>
  );
}
