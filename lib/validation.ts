/**
 * Rules the contact form applies on both sides of the wire: the browser uses
 * them to stop a bad value early, the server action re-checks them because
 * anything sent from a page can be forged.
 */

/**
 * Digits plus the punctuation phone numbers are written with: the leading `+`
 * of an international prefix, spaces, dots, dashes and the parentheses around
 * an area code. Anything else — letters above all — is rejected.
 *
 * Written as a string because it doubles as the `pattern` attribute of the
 * input, which takes a source string rather than a RegExp.
 *
 * The brackets and the dash are escaped because browsers compile `pattern`
 * with the `v` flag, which rejects them bare inside a character class. An
 * invalid pattern is not an error a browser reports: it silently stops
 * validating the field altogether.
 */
export const phonePattern = "[0-9+\\(\\)\\s.\\-]{6,20}";

/** The same rule for the server, anchored so it has to match the whole value. */
export const phoneRegExp = new RegExp(`^(?:${phonePattern})$`);

/** Drops every character a phone number may not contain. */
export function stripPhone(value: string): string {
  return value.replace(/[^0-9+()\s.-]/g, "");
}

/**
 * Copy for the browser's own validation bubble, keyed by the reason the value
 * was rejected. Only the reasons a given field can produce need an entry.
 */
export interface ValidationCopy {
  valueMissing?: string;
  typeMismatch?: string;
  patternMismatch?: string;
  tooShort?: string;
}

/**
 * Picks the message for whatever is wrong with a field.
 *
 * Browsers word these bubbles in the language of the browser itself, not of
 * the page, so a visitor with an English Chrome reads English errors on a
 * Spanish form. Feeding our own copy to `setCustomValidity` is the only way
 * to control them.
 */
export function validationMessage(
  field: { validity: ValidityState },
  copy: ValidationCopy,
): string {
  const { validity } = field;

  if (validity.valueMissing) return copy.valueMissing ?? "";
  if (validity.typeMismatch) return copy.typeMismatch ?? "";
  if (validity.patternMismatch) return copy.patternMismatch ?? "";
  if (validity.tooShort) return copy.tooShort ?? "";

  return "";
}
