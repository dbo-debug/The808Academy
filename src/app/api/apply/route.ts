import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const {
      program,            // "Course" | "Tutoring" | "VIP"
      course,             // null or string
      tutoringFocus,      // null or string

      firstName,
      lastName,
      email,
      phone,

      address, // { address1, address2, city, region, postalCode, country }

      experience,
      goals,
      sessionMonth,
      consentEmail,
      consentSMS,
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !program) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }
    if (program === "Course" && !course) {
      return NextResponse.json({ ok: false, error: "Course is required for Program: Course." }, { status: 400 });
    }
    if (program === "Tutoring" && (!tutoringFocus || tutoringFocus.trim().length < 5)) {
      return NextResponse.json({ ok: false, error: "Please describe your tutoring focus." }, { status: 400 });
    }
    if (!address?.address1 || !address?.city || !address?.region || !address?.postalCode || !address?.country) {
      return NextResponse.json({ ok: false, error: "Complete mailing address is required." }, { status: 400 });
    }

    // Construct an email summary (HTML)
    const html = `
      <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.45;">
        <h2 style="margin:0 0 12px;">New Application — ${program}</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}

        <p><strong>Session Month:</strong> ${sessionMonth || "TBD"}</p>
        ${
          program === "Course"
            ? `<p><strong>Course:</strong> ${course}</p>`
            : program === "Tutoring"
            ? `<p><strong>Tutoring Focus:</strong> ${escapeHtml(tutoringFocus || "")}</p>`
            : ""
        }

        <h3 style="margin:16px 0 8px;">Address</h3>
        <p>
          ${escapeHtml(address.address1)} ${address.address2 ? `<br>${escapeHtml(address.address2)}` : ""}<br>
          ${escapeHtml(address.city)}, ${escapeHtml(address.region)} ${escapeHtml(address.postalCode)}<br>
          ${escapeHtml(address.country)}
        </p>

        ${experience ? `<p><strong>Experience:</strong><br>${nl2br(escapeHtml(experience))}</p>` : ""}
        ${goals ? `<p><strong>Goals:</strong><br>${nl2br(escapeHtml(goals))}</p>` : ""}

        <p><strong>Consent (Email):</strong> ${consentEmail ? "Yes" : "No"}<br>
        <strong>Consent (SMS):</strong> ${consentSMS ? "Yes" : "No"}</p>

        <hr style="margin:16px 0;">
        <p style="color:#888;">Submitted: ${new Date().toLocaleString()}</p>
      </div>
    `;

    // Send with Resend
    if (process.env.RESEND_API_KEY && process.env.ENROLLMENT_INBOX) {
      await resend.emails.send({
        from: process.env.ENROLLMENT_FROM || "808 Academy <admin@the808academy.com>",
        to: [process.env.ENROLLMENT_INBOX],
        subject: `New ${program} Application — ${firstName} ${lastName}`,
        html,
      });
    }

    // Fire-and-forget Zapier (optional)
    const zapUrl = process.env.ZAPIER_ENROLL_WEBHOOK_URL;
    if (zapUrl) {
      fetch(zapUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program,
          course,
          tutoringFocus,
          firstName,
          lastName,
          email,
          phone,
          address,
          experience,
          goals,
          sessionMonth,
          consentEmail,
          consentSMS,
          createdAt: new Date().toISOString(),
          source: "apply-form",
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function nl2br(s: string) {
  return s.replace(/\n/g, "<br>");
}
