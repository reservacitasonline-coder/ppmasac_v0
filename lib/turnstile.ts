/**
 * Server-side check for Cloudflare Turnstile.
 * The widget alone is not enough: every token has to be verified here.
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileOutcome {
  success: boolean;
  "error-codes"?: string[];
  action?: string;
  hostname?: string;
}

export async function verifyTurnstileToken(
  token: string,
  remoteip?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("[contacto] falta TURNSTILE_SECRET_KEY");
    return false;
  }

  if (!token) return false;

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    });
    if (remoteip) body.set("remoteip", remoteip);

    const response = await fetch(SITEVERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const outcome = (await response.json()) as TurnstileOutcome;
    if (!response.ok || !outcome.success) {
      console.error("[contacto] Turnstile rechazó el token", outcome["error-codes"]);
      return false;
    }

    return true;
  } catch (cause) {
    console.error("[contacto] no se pudo verificar Turnstile", cause);
    return false;
  }
}
