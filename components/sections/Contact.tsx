import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { contact } from "@/content/site";

import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contact} id="contacto" aria-labelledby="contacto-title">
      <Container>
        <div className={styles.intro}>
          <Eyebrow tone="onDark">{contact.eyebrow}</Eyebrow>
          <Heading
            id="contacto-title"
            lines={contact.heading}
            tone="onDark"
            align="center"
          />
          <p className={styles.lead}>{contact.lead}</p>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
