import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
};

const host = process.env.SMTP_HOST!;
const port = Number(process.env.SMTP_PORT ?? 465);
const user = process.env.SMTP_USER!;
const pass = process.env.SMTP_PASS!;
const from = process.env.SMTP_FROM ?? user;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // true for 465, false for STARTTLS
  auth: { user, pass },
} as SMTPTransport.Options);

export async function sendEmail(
  { to, subject, html }: SendEmailInput
): Promise<SMTPTransport.SentMessageInfo> {
  return transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
}
