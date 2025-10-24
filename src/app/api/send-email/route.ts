import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
};

export async function POST(req: Request) {
  let payload: EmailPayload;
  try {
    payload = (await req.json()) as EmailPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { to, subject, html, text } = payload;

  if (!to || !subject || (!html && !text)) {
    return NextResponse.json(
      { ok: false, error: "Missing to/subject and html or text" },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = (process.env.SMTP_SECURE ?? "true") !== "false"; // default true
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { ok: false, error: "SMTP env vars not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
    });
    return NextResponse.json({ ok: true, info }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
