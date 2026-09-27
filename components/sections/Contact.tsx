import { Container } from "@/components/ui/Container";
import { MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { contact, footer, site } from "@/content/site";
import { whatsappHref } from "@/lib/whatsapp";

import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      className={styles.contact}
      id="contacto"
      aria-labelledby="contacto-title"
    >
      <Container>
        <div className={styles.layout} data-reveal-group>
          <div className={styles.intro}>
            <h2 id="contacto-title" className={styles.title}>
              {contact.heading.map((line) => (
                <span className={styles.titleLine} key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className={styles.lead}>{contact.lead}</p>

            <h3 className={styles.introTitle}>{contact.nextStepsTitle}</h3>
            <ol className={styles.steps}>
              {contact.nextSteps.map((step, index) => (
                <li className={styles.stepItem} key={step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <h3 className={styles.introTitle}>{contact.directTitle}</h3>
            <ul className={styles.direct}>
              <li>
                <a className={styles.directLink} href={`mailto:${footer.contact.email}`}>
                  <MailIcon className={styles.directIcon} />
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  className={styles.directLink}
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className={styles.directIcon} />
                  WhatsApp {site.whatsapp.label}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
