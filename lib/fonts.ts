import { Anton, Barlow_Condensed, Inter } from "next/font/google";

/** Poster-scale display type used for the wordmark and section headings. */
export const fontDisplay = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

/** Condensed type used for uppercase statements, questions and quotes. */
export const fontCondensed = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

/** Body copy, labels and interface text. */
export const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const fontVariables = [
  fontDisplay.variable,
  fontCondensed.variable,
  fontBody.variable,
].join(" ");
