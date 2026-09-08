import { unsplash } from "@/lib/unsplash";
import type {
  CallToAction,
  FaqItem,
  NavLink,
  Photo,
  ProcessStep,
  ServiceCard,
  ServicePhoto,
  Stat,
  Testimonial,
} from "./types";

export const site = {
  name: "Landmark",
  url: "https://landmark.example.com",
  tagline: "Building partnerships through commercial construction",
  description:
    "Landmark is a commercial construction and architecture studio delivering thoughtful, high-quality spaces from concept to completion.",
  phone: {
    label: "+1 800 555 0199",
    href: "tel:+18005550199",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export const hero = {
  cta: { label: "Get a quote", href: "#contact" } satisfies CallToAction,
  discover: { label: "Discover", href: "#about" } satisfies CallToAction,
  background: {
    src: unsplash("photo-1503387762-592deb58ef4e", 2000),
    alt: "Construction site overlooking the city skyline",
  } satisfies Photo,
  card: {
    photo: {
      src: unsplash("photo-1504307651254-35680f356dfd", 800),
      alt: "Construction crew reviewing plans on site",
    } satisfies Photo,
    caption: "On site · 2026",
  },
};

export const statement =
  "Starting from the 1980s, as the intricacy of structures continued to evolve, architecture transformed into a multidisciplinary field with various specializations. We blend creativity, technical skill, and an unwavering attention to detail, to deliver thoughtful, high-quality spaces.";

export const stats: Stat[] = [
  { value: "150", suffix: "+", label: "Completed projects" },
  { value: "210", suffix: "+", label: "Satisfied clients" },
  { value: "09", label: "Design awards" },
  { value: "18", suffix: "+", label: "Years of practice" },
];

export const about = {
  heading: ["We build foundations for", "future businesses"],
  lead: "In 1986 four current directors of the studio started designing on a handful of small-scale projects. Our belief in thoughtful construction hasn't changed: a deliberate structure, an honest budget, and a team that answers the phone.",
  cta: { label: "Contact", href: "#contact" } satisfies CallToAction,
  gallery: [
    {
      src: unsplash("photo-1493397212122-2b85dda8106b", 1400),
      alt: "Curved concrete facade of a modern building",
    },
    {
      src: unsplash("photo-1486406146926-c627a92ad1ab", 900),
      alt: "Glass tower photographed from below",
    },
  ] satisfies Photo[],
  subtitle: "Who we are",
  columns: [
    "We are a boutique, purpose-built practice working across ground-up commercial construction, tenant improvements, and adaptive reuse. Every project is led by a principal from the first sketch through the final walkthrough.",
    "We keep our teams small and our standards inflexible. That means transparent pricing, schedules we defend, and details that hold up long after the ribbon is cut — the only kind of work worth signing our name to.",
  ],
};

export const services = {
  eyebrow: "What we do",
  heading: ["Strategic excellence in", "every square foot."],
  lead: "Whatever the scale, we bring a disciplined process to the drawing, the budget and the build. Below are the disciplines our clients lean on most, from early feasibility studies to the last punch-list item.",
  /** Rendered in order; the grid interleaves photo and text tiles. */
  photos: [
    {
      title: "Cost-driven value",
      description:
        "Budgets modelled early, tracked weekly and defended to the final invoice.",
      tall: true,
      photo: {
        src: unsplash("photo-1471039497385-b6d6ba609f9c", 900),
        alt: "Tower crane above a construction site",
      },
    },
    {
      title: "Design-build schedule",
      description: "One contract, one team, one accountable delivery date.",
      photo: {
        src: unsplash("photo-1449157291145-7efd050a4d0e", 900),
        alt: "Steel and glass structure against the sky",
      },
    },
  ] satisfies ServicePhoto[],
  cards: [
    {
      index: "01",
      title: "Engineering design",
      description:
        "Structural, mechanical and civil coordination resolved before a single trade mobilises.",
    },
    {
      index: "02",
      title: "Building excellence",
      description:
        "Self-performed concrete and framing, so quality never leaves our hands.",
    },
    {
      index: "03",
      title: "Pre-construction & feasibility",
      description:
        "Site studies, entitlement support and phasing plans that de-risk the decision to build.",
    },
  ] satisfies ServiceCard[],
};

export const process = {
  heading: ["From concept to completion, we", "master every square foot."],
  background: {
    src: unsplash("photo-1487958449943-2429e8be8625", 2000),
    alt: "Concrete high-rise seen from street level",
  } satisfies Photo,
  steps: [
    {
      index: "01",
      title: "Initial planning",
      description:
        "We map programme, site constraints and budget into a single, testable brief.",
    },
    {
      index: "02",
      title: "Architectural phase",
      description:
        "Drawings developed with the trades in the room, so details survive the field.",
    },
    {
      index: "03",
      title: "Space complexity",
      description: "Systems, envelope and finishes coordinated in one federated model.",
    },
    {
      index: "04",
      title: "Materials selection",
      description:
        "Specifications balanced for lifecycle cost, lead time and long-term durability.",
    },
  ] satisfies ProcessStep[],
};

export const faq = {
  eyebrow: "Questions",
  heading: ["Frequently", "asked questions"],
  thumbnails: [
    {
      src: unsplash("photo-1541888946425-d81bb19240f5", 700),
      alt: "Modern residential building",
    },
    {
      src: unsplash("photo-1431576901776-e539bd916ba2", 700),
      alt: "Glass atrium ceiling",
    },
  ] satisfies Photo[],
  items: [
    {
      question: "What types of commercial projects do you handle?",
      answer:
        "Office, retail, light industrial, hospitality and mixed-use, typically between 5,000 and 250,000 square feet. Ground-up and adaptive reuse alike.",
    },
    {
      question: "How long does a typical commercial construction project take?",
      answer:
        "A tenant improvement usually runs 10 to 16 weeks. Ground-up construction averages 9 to 18 months depending on permitting and long-lead equipment.",
    },
    {
      question: "Do you offer design-build services?",
      answer:
        "Yes. Design-build is our default delivery method: a single contract keeps the drawings, the budget and the schedule aligned from day one.",
    },
    {
      question: "How do you keep projects on budget?",
      answer:
        "We price during design rather than after it, then report cost against the model every week so decisions happen while they are still cheap.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "We carry general liability, builder's risk and workers' compensation coverage, and hold active licences in every state where we operate.",
    },
    {
      question: "Can building materials be shipped to remote locations?",
      answer:
        "They can. We plan logistics, staging and storage during pre-construction so remote sites never wait on a delivery truck.",
    },
  ] satisfies FaqItem[],
};

export const testimonial: Testimonial = {
  quote:
    "Outstanding service and remarkable attention to detail. Highly recommended for anyone seeking premium real estate solutions.",
  author: {
    name: "Eleanor Achard",
    role: "Director, Meridian Holdings",
    avatar: {
      src: unsplash("photo-1507003211169-0a1dd7228f2d", 200),
      alt: "Portrait of Eleanor Achard",
      width: 88,
      height: 88,
    },
  },
};

export const footer = {
  background: {
    src: unsplash("photo-1444723121867-7a241cacace9", 2000),
    alt: "City skyline at dusk",
  } satisfies Photo,
  legal: `© ${new Date().getFullYear()} Landmark Construction Group. All rights reserved.`,
  links: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Careers", href: "#" },
  ] satisfies NavLink[],
};
