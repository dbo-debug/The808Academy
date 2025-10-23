import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = Number(process.env.SMTP_PORT || 465);
const secure = (process.env.SMTP_SECURE ?? "").toLowerCase() === "true" || port === 465;

const user = process.env.SMTP_USER!;
const pass = process.env.SMTP_PASS!;
const from = process.env.SMTP_FROM || user;

/**
 * Create a single transport instance. We keep TLS strict but modern.
 */
const transport = nodemailer.createTransport({
  host,
  port,
  secure, // true -> SMTPS (465), false -> STARTTLS (587)
  auth: { user, pass },
  // Helps with some corporate networks; Gmail wants modern TLS
  tls: {
    minVersion: "TLSv1.2",
    // comment the next line unless you need to troubleshoot cert issues
    // rejectUnauthorized: false,
  },
  // Toggle these if you want verbose logs while debugging:
  logger: true,
  debug: true,
});

export async function sendMail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  try {
    const info = await transport.sendMail({
      from,
      ...opts,
    });
    return { ok: true, info };
  } catch (err: any) {
    // Surface as much context as possible
    const pretty = {
      message: err?.message,
      code: err?.code,
      command: err?.command,
      response: err?.response,
      responseCode: err?.responseCode,
      stack: err?.stack,
    };
    console.error("SMTP sendMail failed:", pretty);
    return { ok: false, error: pretty };
  }
}
