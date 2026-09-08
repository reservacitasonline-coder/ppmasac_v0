/** A photo rendered with `next/image` in `fill` mode inside a ratio box. */
export interface Photo {
  src: string;
  alt: string;
}

/** A photo rendered at a fixed intrinsic size. */
export interface SizedPhoto extends Photo {
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

/** Mission / vision statement rendered as a card in the about section. */
export interface Pillar {
  title: string;
  body: string;
}

export type ContactFieldName =
  "name" | "company" | "email" | "phone" | "service" | "message";

/** The consent box is not a text field, but it can still fail validation. */
export type ContactErrorName = ContactFieldName | "consent";

/** Result of a contact form submission, returned by the server action. */
export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<ContactErrorName, string>>;
  /** Echoed back so a rejected form keeps whatever was already typed. */
  values: Partial<Record<ContactFieldName, string>>;
  /** Echoed back so a rejected form keeps the consent box ticked. */
  consent?: boolean;
}

/** One numbered clause of a legal document such as the privacy policy. */
export interface LegalSection {
  index: string;
  /** Anchor id, so a clause can be linked to directly. */
  slug: string;
  title: string;
  body: string[];
  /** Rendered as a bulleted list under the paragraphs. */
  items?: string[];
}

/** Client logo shown in the logo wall. */
export interface Client {
  /** Doubles as the image's alt text. */
  name: string;
  logo: string;
  /**
   * Optical correction for logos that sit small inside their own artwork.
   * `1` fills the standard frame; higher values grow into the tile padding.
   */
  scale?: number;
}

export interface Stat {
  value: string;
  /** Rendered in a muted colour next to the value, e.g. the "+" in "150+". */
  suffix?: string;
  label: string;
}

/**
 * One of the six service lines. The home page shows the index, title and
 * summary; the `/servicios` page adds the photo and the full item list.
 */
export interface ServiceGroup {
  index: string;
  /** Anchor id on the services page. */
  slug: string;
  title: string;
  summary: string;
  photo: Photo;
  items: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: SizedPhoto;
  };
}
