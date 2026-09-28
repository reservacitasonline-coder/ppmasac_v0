import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";

/** Display cut, tuned for large sizes: section headings and figures. */
export const fontDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
});

/** Text cut, tuned for small sizes: body copy, labels and interface text. */
export const fontBody = Red_Hat_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-text",
});

export const fontVariables = [fontDisplay.variable, fontBody.variable].join(" ");
