import { Container } from "@/components/ui/Container";
import { contact } from "@/content/site";

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
            <p className={styles.kicker}>{contact.eyebrow}</p>
            <h2 id="contacto-title" className={styles.title}>
              {contact.heading.map((line) => (
                <span className={styles.titleLine} key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <span className={styles.accent} aria-hidden="true" />
            <p className={styles.lead}>{contact.lead}</p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
