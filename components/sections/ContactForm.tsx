"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, type FormEvent } from "react";

import { contact } from "@/content/site";
import type { ContactFormState } from "@/content/types";
import { TurnstileField } from "@/components/ui/TurnstileField";
import { submitEnquiry } from "@/lib/actions/contact";
import {
  emailPattern,
  phonePattern,
  stripPhone,
  validationMessage,
  type ValidationCopy,
} from "@/lib/validation";

import styles from "./Contact.module.css";

const empty: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

const copy = contact.form.errors;
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type Field = HTMLInputElement | HTMLTextAreaElement;

/**
 * Props that put our own wording in the browser's validation bubble.
 *
 * Browsers write those bubbles in the language they were installed in rather
 * than the language of the page, so an English Chrome shows English errors on
 * this form unless every field carries its own copy. `setCustomValidity` keeps
 * the field invalid until it is cleared, hence the reset while typing.
 */
function inSpanish(messages: ValidationCopy) {
  return {
    onInvalid: (event: FormEvent<Field>) => {
      event.currentTarget.setCustomValidity(
        validationMessage(event.currentTarget, messages),
      );
    },
    onInput: (event: FormEvent<Field>) => {
      event.currentTarget.setCustomValidity("");
    },
  };
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, empty);
  const { form } = contact;
  const { labels } = form;
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  // After the server answers, keyboard and screen-reader users land on the
  // first field to fix, or on the message when no single field is to blame.
  useEffect(() => {
    if (state.status === "idle") return;
    const invalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
    (invalid ?? statusRef.current)?.focus();
  }, [state]);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{form.title}</h3>
      <p className={styles.requiredNote}>{form.requiredNote}</p>

      {/* Remounting after a successful send clears every field. */}
      <form className={styles.form} action={action} key={state.status} ref={formRef}>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {labels.name}
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            {...inSpanish({ valueMissing: copy.name })}
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "name-error" : undefined}
          />
          {state.errors.name ? (
            <span className={styles.error} id="name-error">
              {state.errors.name}
            </span>
          ) : null}
        </p>

        <p className={styles.field}>
          <label className={styles.label} htmlFor="company">
            {labels.company}
          </label>
          <input
            className={styles.input}
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            defaultValue={state.values.company}
          />
        </p>

        <p className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {labels.email}
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            pattern={emailPattern}
            {...inSpanish({
              valueMissing: copy.email,
              typeMismatch: copy.emailInvalid,
              patternMismatch: copy.emailInvalid,
            })}
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? "email-error" : undefined}
          />
          {state.errors.email ? (
            <span className={styles.error} id="email-error">
              {state.errors.email}
            </span>
          ) : null}
        </p>

        <p className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            {labels.phone}
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern={phonePattern}
            defaultValue={state.values.phone}
            aria-invalid={Boolean(state.errors.phone)}
            aria-describedby={state.errors.phone ? "phone-error" : undefined}
            onInvalid={(event) => {
              event.currentTarget.setCustomValidity(
                validationMessage(event.currentTarget, {
                  patternMismatch: copy.phoneInvalid,
                }),
              );
            }}
            onInput={(event) => {
              const input = event.currentTarget;
              input.setCustomValidity("");

              const cleaned = stripPhone(input.value);
              if (cleaned === input.value) return;

              // Assigning `value` drops the caret at the end of the field, so
              // it goes back to where the rejected character was typed.
              const caret = Math.max(0, (input.selectionStart ?? 0) - 1);
              input.value = cleaned;
              input.setSelectionRange(caret, caret);
            }}
          />
          {state.errors.phone ? (
            <span className={styles.error} id="phone-error">
              {state.errors.phone}
            </span>
          ) : null}
        </p>

        <p className={styles.fieldWide}>
          <label className={styles.label} htmlFor="service">
            {labels.service}
          </label>
          <select
            className={styles.select}
            id="service"
            name="service"
            defaultValue={state.values.service ?? ""}
          >
            <option value="">{labels.servicePlaceholder}</option>
            {form.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </p>

        <p className={styles.fieldWide}>
          <label className={styles.label} htmlFor="message">
            {labels.message}
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows={5}
            required
            // Matches the length the server action asks for, so the browser
            // catches a two-word message before it makes the round trip.
            minLength={15}
            {...inSpanish({
              valueMissing: copy.message,
              tooShort: copy.messageShort,
            })}
            defaultValue={state.values.message}
            aria-invalid={Boolean(state.errors.message)}
            aria-describedby={state.errors.message ? "message-error" : undefined}
          />
          {state.errors.message ? (
            <span className={styles.error} id="message-error">
              {state.errors.message}
            </span>
          ) : null}
        </p>

        {/* Ley 29733 wants consent given actively, so this never ships ticked. */}
        <p className={styles.consent} data-whatsapp-avoid>
          <input
            className={styles.checkbox}
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            {...inSpanish({ valueMissing: copy.consent })}
            defaultChecked={state.consent}
            aria-invalid={Boolean(state.errors.consent)}
            aria-describedby={state.errors.consent ? "consent-error" : undefined}
          />
          <label className={styles.consentLabel} htmlFor="consent">
            {form.consent.before}
            <Link className={styles.consentLink} href={form.consent.link.href}>
              {form.consent.link.label}
            </Link>
            {form.consent.after}
          </label>
          {state.errors.consent ? (
            <span className={styles.consentError} id="consent-error">
              {state.errors.consent}
            </span>
          ) : null}
        </p>

        <div className={styles.turnstile}>
          {turnstileSiteKey ? (
            <TurnstileField
              siteKey={turnstileSiteKey}
              resetSignal={
                state.status === "error"
                  ? `${state.message}:${state.errors.turnstile ?? ""}`
                  : "ok"
              }
              className={styles.turnstileWidget}
            />
          ) : (
            <span className={styles.error} role="alert">
              Falta configurar la verificación antispam.
            </span>
          )}
          {state.errors.turnstile ? (
            <span className={styles.error} id="turnstile-error">
              {state.errors.turnstile}
            </span>
          ) : null}
        </div>

        {/* Spam trap: hidden from people, tempting for bots. */}
        <input
          className={styles.honeypot}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={styles.actions} data-whatsapp-avoid>
          <button className={styles.submit} type="submit" disabled={pending}>
            {pending ? form.submitting : form.submit}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </button>
        </div>

        <p aria-live="polite" className={styles.status} ref={statusRef} tabIndex={-1}>
          {state.status !== "idle" && state.message ? (
            <span
              className={state.status === "success" ? styles.success : styles.failure}
            >
              {state.message}
            </span>
          ) : null}
        </p>
      </form>
    </div>
  );
}
