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

export interface Stat {
  value: string;
  /** Rendered in a muted colour next to the value, e.g. the "+" in "150+". */
  suffix?: string;
  label: string;
}

/** Dark text tile in the services grid. */
export interface ServiceCard {
  index: string;
  title: string;
  description: string;
}

/** Photo tile in the services grid. */
export interface ServicePhoto {
  title: string;
  description: string;
  photo: Photo;
  /** Spans two rows on wide viewports. */
  tall?: boolean;
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
