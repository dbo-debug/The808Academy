import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { to, subject, html, text } = await req.json();
    const result = await sendMail({ to, subject, html, text });
    if (!result.ok) {
      return NextResponse.json(result, { status: 500 });
    }
    return NextResponse.json(result);
  } catch (err: any) {
    console.error("send-email route error:", err?.message || err);
    return NextResponse.json({ ok: false, error: err?.message || "Unknown" }, { status: 500 });
  }
}
