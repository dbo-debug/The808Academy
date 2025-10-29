// src/lib/mailer.ts
import nodemailer, { Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

/**
 * Typed mailer helper using nodemailer.
 * - Exports sendEmail(payload) returning Promise<SMTPTransport.SentMessageInfo>
 * - Warns in dev when SMTP env vars are missing, throws in production.
 */

export type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  from?: string; // optional override, falls back to SMTP_FROM / SMTP_USER
};

const host = process.env.SMTP_HOST ?? "";
const port = Number(process.env.SMTP_PORT ?? "465");
const user = process.env.SMTP_USER ?? "";
const pass = process.env.SMTP_PASS ?? "";
const defaultFrom = process.env.SMTP_FROM ?? user ?? "";

const missingVars = [
  !host ? "SMTP_HOST" : null,
  !user ? "SMTP_USER" : null,
  !pass ? "SMTP_PASS" : null,
].filter(Boolean) as string[];

if (missingVars.length > 0) {
  const msg = `Missing SMTP environment variables: ${missingVars.join(", ")}`;
  if (process.env.NODE_ENV === "production") {
    // Fail fast in production so email functionality doesn't silently break.
    throw new Error(msg);
  } else {
    // In dev, warn so you can continue developing without SMTP configured.
    // eslint-disable-next-line no-console
    console.warn(msg);
  }
}

const transportOptions: SMTPTransport.Options = {
  host,
  port,
  secure: port === 465, // true for 465, false for STARTTLS ports (587)
  auth: { user, pass },
};

let transporter: Transporter<SMTPTransport.SentMessageInfo> | null = null;

function getTransporter(): Transporter<SMTPTransport.SentMessageInfo> {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport(transportOptions) as Transporter<
    SMTPTransport.SentMessageInfo
  >;
  return transporter;
}

/**
 * Send an email using the configured transporter.
 */
export async function sendEmail({
  to,
  subject,
  html,
  from,
}: SendEmailInput): Promise<SMTPTransport.SentMessageInfo> {
  const t = getTransporter();
  const envelopeFrom = from ?? defaultFrom ?? `no-reply@localhost`;

  return t.sendMail({
    from: envelopeFrom,
    to,
    subject,
    html,
  });
}
