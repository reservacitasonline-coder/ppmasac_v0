import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footer, services } from "@/content/site";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Container className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/" aria-label={`${footer.logo.alt} — inicio`}>
              <Image
                className={styles.brandLogo}
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={footer.logo.width}
                height={footer.logo.height}
              />
            </Link>
            <p className={styles.brandText}>
              <span className={styles.brandName}>{footer.brandName}</span>
              {footer.brandLine}
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

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>{footer.contact.title}</h2>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href={`mailto:${footer.contact.email}`}>
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a className={styles.link} href={footer.contact.phone.href}>
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
