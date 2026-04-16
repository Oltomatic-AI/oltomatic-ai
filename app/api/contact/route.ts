import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, replyToProspect, forwardToWebhook } from "@/lib/email";
import { contactInternalHtml, contactProspectHtml, type ContactPayload } from "@/lib/email-templates";

// Ensure this route runs on the Node.js runtime (Resend SDK needs it)
export const runtime = "nodejs";

const SITE: ContactPayload["site"] = "oltomatic.ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message } = body ?? {};

    // Minimal validation — the browser form already requires name/email.
    if (typeof name !== "string" || typeof email !== "string" || !name.trim() || !email.trim()) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : undefined,
      interest: typeof interest === "string" ? interest.trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
      site: SITE,
    };

    // Fire off all three side-effects in parallel. We wait on the internal
    // notification (that's the one we care about most) but don't block on
    // the prospect reply or the webhook forward — both are nice-to-haves.
    const internalPromise = notifyTeam({
      subject: `New enquiry · ${payload.name}${payload.company ? ` · ${payload.company}` : ""}`,
      html: contactInternalHtml(payload),
      replyTo: payload.email,
    });

    replyToProspect(payload.email, {
      subject: "Thanks — we'll be in touch",
      html: contactProspectHtml(payload),
    }).catch((err) => console.error("[contact] prospect reply failed:", err));

    forwardToWebhook({ type: "contact", ...payload });

    const internal = await internalPromise;

    if (!internal.ok) {
      // The email didn't send but we don't want to tell the user that —
      // they've given us their details either way. Log it so we can chase.
      console.error("[contact] internal notification failed:", internal.error, payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
