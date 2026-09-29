import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { MailIcon, PhoneIcon } from "@/components/ui/icons";
import { footer, services } from "@/content/site";
import { cn } from "@/lib/cn";

import styles from "./SiteFooter.module.css";

/** Breaks a name into two lines at the space nearest its middle. */
function twoLines(text: string) {
  const middle = text.length / 2;
  let split = -1;
  for (let at = text.indexOf(" "); at !== -1; at = text.indexOf(" ", at + 1)) {
    if (split === -1 || Math.abs(at - middle) < Math.abs(split - middle)) split = at;
  }
  return split === -1 ? [text] : [text.slice(0, split), text.slice(split + 1)];
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container className={styles.columns}>
          <div className={styles.brand}>
            <Link className={styles.brandPlate} href="/" aria-label={`${footer.logo.alt} — inicio`}>
              <Image
                className={styles.brandLogo}
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={footer.logo.width}
                height={footer.logo.height}
              />
            </Link>
            <p className={styles.brandText}>
              <span className={styles.brandName}>
                {twoLines(footer.brandName).map((line) => (
                  <span className={styles.brandNameLine} key={line}>
                    {line}
                  </span>
                ))}
              </span>
              <span className={styles.brandLine}>{footer.brandLine}</span>
            </p>
          </div>

          <nav className={styles.column} aria-label={footer.company.title}>
            <h2 className={styles.columnTitle}>{footer.company.title}</h2>
            <ul className={styles.list}>
              {footer.company.links.map((link) => (
                <li key={link.href}>
                  <Link className={styles.link} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label={footer.servicesTitle}>
            <h2 className={styles.columnTitle}>{footer.servicesTitle}</h2>
            <ul className={styles.list}>
              {services.groups.map((group) => (
                <li key={group.slug}>
                  <Link className={styles.link} href={`/servicios#${group.slug}`}>
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={cn(styles.column, styles.contactColumn)}>
            <h2 className={styles.columnTitle}>{footer.contact.title}</h2>
            <ul className={styles.list}>
              <li>
                <a className={styles.contactLink} href={`mailto:${footer.contact.email}`}>
                  <MailIcon className={styles.contactIcon} />
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a className={styles.contactLink} href={footer.contact.phone.href}>
                  <PhoneIcon className={styles.contactIcon} />
                  {footer.contact.phone.label}
                </a>
              </li>
            </ul>
          </div>
        </Container>
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
