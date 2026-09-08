"use client";

import Link from "next/link";
import { useActionState } from "react";

import { contact } from "@/content/site";
import type { ContactFormState } from "@/content/types";
import { submitEnquiry } from "@/lib/actions/contact";

import styles from "./Contact.module.css";

const empty: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, empty);
  const { form } = contact;

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{form.title}</h3>

      {/* Remounting after a successful send clears every field. */}
      <form className={styles.form} action={action} key={state.status}>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Nombre y apellido *
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
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
            Empresa
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
            Correo electrónico *
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
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
            Teléfono
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={state.values.phone}
          />
        </p>

        <p className={styles.fieldWide}>
          <label className={styles.label} htmlFor="service">
            Servicio de interés
          </label>
          <select
            className={styles.select}
            id="service"
            name="service"
            defaultValue={state.values.service ?? ""}
          >
            <option value="">Selecciona una opción</option>
            {form.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </p>

        <p className={styles.fieldWide}>
          <label className={styles.label} htmlFor="message">
            Cuéntanos sobre el proyecto *
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows={5}
            required
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
        <p className={styles.consent}>
          <input
            className={styles.checkbox}
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
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

        {/* Spam trap: hidden from people, tempting for bots. */}
        <input
          className={styles.honeypot}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={styles.actions}>
          <button className={styles.submit} type="submit" disabled={pending}>
            {pending ? form.submitting : form.submit}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </button>
          <span className={styles.note}>{form.note}</span>
        </div>

        <p aria-live="polite" className={styles.status}>
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
