/**
 * Branded email templates — Oltomatic dark-mode aesthetic.
 *
 * Design principles:
 * - Inline CSS only (email clients strip <style> blocks)
 * - Table layouts for Outlook compatibility
 * - Explicit color values (no CSS variables, no prefers-color-scheme)
 * - Max width 600px, single column
 * - Two distinct template families:
 *     prospect* — premium, dark-mode, editorial (the brand experience)
 *     internal* — lightweight, utilitarian (the audit/monitoring log)
 */
import { escapeHtml } from "./email";

// ── Brand palette (matches site globals.css) ────────────────────────
const BASE = "#080810";
const SURFACE = "#0F0F1A";
const ELEVATED = "#161625";
const BORDER = "#252538";
const BLUE = "#1560A8";
const BLUE_LIGHT = "#5BA3E0";
const INK = "#EEEEF5";
const MUTED = "#9999B0";
const DIM = "#55556A";

// Product accents (match live site exactly)
const VOICE_RED = "#BE3A55";
const REACH_GREEN = "#16A34A";
const OPS_PURPLE = "#7C3AED";

// Light-mode palette (internal/utility emails)
const LINK = "#1560A8";
const L_BG = "#fafaf7";
const L_SURFACE = "#ffffff";
const L_INK = "#0b0b0c";
const L_MUTED = "#64635f";
const L_BORDER = "#e6e4dd";

// ── Shell components ────────────────────────────────────────────────

function header(mode: "dark" | "light"): string {
  const bg = mode === "dark" ? SURFACE : L_SURFACE;
  const borderCol = mode === "dark" ? BORDER : L_BORDER;
  const maticColor = mode === "dark" ? INK : L_INK;
  return `<tr><td style="padding:22px 32px;background:${bg};border-bottom:1px solid ${borderCol};">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="vertical-align:middle;">
        <div style="width:32px;height:32px;border-radius:7px;background:${BLUE};color:#ffffff;text-align:center;font-weight:800;font-size:18px;line-height:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">O</div>
      </td>
      <td style="vertical-align:middle;padding-left:12px;">
        <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:700;font-size:15px;letter-spacing:0.5px;"><span style="color:${BLUE};">OLTO</span><span style="color:${maticColor};">MATIC</span></span>
      </td>
    </tr></table>
  </td></tr>`;
}

function footer(mode: "dark" | "light", site: "oltomatic.ai" | "oltomatic.co"): string {
  const bg = mode === "dark" ? BASE : L_BG;
  const borderCol = mode === "dark" ? BORDER : L_BORDER;
  const muted = mode === "dark" ? DIM : L_MUTED;
  const link = mode === "dark" ? BLUE_LIGHT : LINK;
  return `<tr><td style="padding:22px 32px;background:${bg};border-top:1px solid ${borderCol};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.6;color:${muted};">
    <strong style="color:${muted};">Oltomatic Ltd</strong> · Company No. 16774271 · Registered in England &amp; Wales<br/>
    <a href="https://${site}" style="color:${link};text-decoration:none;">${site}</a> · Reply to any message we send from <a href="mailto:hello@${site}" style="color:${link};text-decoration:none;">hello@${site}</a>
  </td></tr>`;
}

function darkShell(bodyHtml: string, site: "oltomatic.ai" | "oltomatic.co"): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="supported-color-schemes" content="dark"/><title>Oltomatic</title></head>
<body style="margin:0;padding:0;background:${BASE};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BASE};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${SURFACE};border:1px solid ${BORDER};border-radius:16px;overflow:hidden;">
        ${header("dark")}
        <tr><td style="padding:36px 32px 12px 32px;color:${INK};">${bodyHtml}</td></tr>
        ${footer("dark", site)}
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function lightShell(bodyHtml: string, site: "oltomatic.ai" | "oltomatic.co"): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><title>Oltomatic — Internal</title></head>
<body style="margin:0;padding:0;background:${L_BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${L_BG};">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${L_SURFACE};border:1px solid ${L_BORDER};border-radius:12px;overflow:hidden;">
        ${header("light")}
        <tr><td style="padding:24px 28px;color:${L_INK};">${bodyHtml}</td></tr>
        ${footer("light", site)}
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── Content modules (prospect emails) ───────────────────────────────

/** "What happens next" — three numbered steps. */
function nextSteps(): string {
  const steps = [
    { n: "01", title: "A real person replies", desc: "A member of our team will be in touch — usually within a few hours, always within one business day." },
    { n: "02", title: "A 30-minute discovery call", desc: "We listen first. No pitch deck, no jargon. We want to understand the operation." },
    { n: "03", title: "An honest recommendation", desc: "If we're the right fit, you get a clear proposal. If we're not, we'll tell you — and point you somewhere that is." },
  ];

  const rows = steps.map((s) => `
    <tr><td style="padding:14px 0;border-top:1px solid ${BORDER};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
        <td style="vertical-align:top;width:48px;">
          <span style="display:inline-block;color:${BLUE_LIGHT};font-weight:700;font-size:12px;letter-spacing:0.12em;font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;">${s.n}</span>
        </td>
        <td style="vertical-align:top;">
          <div style="color:${INK};font-weight:600;font-size:15px;line-height:1.3;">${s.title}</div>
          <div style="color:${MUTED};font-size:14px;line-height:1.55;margin-top:4px;">${s.desc}</div>
        </td>
      </tr></table>
    </td></tr>`).join("");

  return `<div style="margin:28px 0 8px 0;">
    <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:10px;">What happens next</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>
  </div>`;
}

/**
 * "While you wait" — Bespoke hero (full width, most visual weight because
 * it's the flagship offering) followed by three productised cards with
 * colour accents matching the live site.
 */
function whileYouWait(site: "oltomatic.ai" | "oltomatic.co"): string {
  const base = `https://${site}`;

  const bespoke = `
    <tr><td style="padding:10px 0 16px 0;">
      <a href="${base}/contact" style="display:block;text-decoration:none;padding:22px 24px;background:linear-gradient(135deg, ${ELEVATED} 0%, #12122a 100%);border:1px solid rgba(21,96,168,0.4);border-radius:12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="vertical-align:middle;">
            <div style="color:${BLUE_LIGHT};font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:8px;">Bespoke · Our flagship</div>
            <div style="color:${INK};font-weight:700;font-size:18px;line-height:1.25;letter-spacing:-0.01em;">Custom AI systems, built from the ground up</div>
            <div style="color:${MUTED};font-size:13px;line-height:1.55;margin-top:8px;">When a productised tool won't cut it. Strategy, architecture, build, deployment — end to end.</div>
          </td>
          <td style="vertical-align:middle;text-align:right;width:28px;padding-left:12px;">
            <span style="color:${BLUE_LIGHT};font-size:20px;font-weight:600;">→</span>
          </td>
        </tr></table>
      </a>
    </td></tr>`;

  const products = [
    { href: `${base}/voice`, name: "OLTO Voice", tag: "Voice AI",        desc: "24/7 AI voice agents for inbound calls",   accent: VOICE_RED },
    { href: `${base}/reach`, name: "OLTO Reach", tag: "Lead generation", desc: "Automated prospecting and outreach",       accent: REACH_GREEN },
    { href: `${base}/ops`,   name: "OLTO Ops",   tag: "Operations",      desc: "Back-office workflow automation",          accent: OPS_PURPLE },
  ];

  const cards = products.map((p) => `
    <tr><td style="padding:8px 0;">
      <a href="${p.href}" style="display:block;text-decoration:none;padding:16px 18px;background:${ELEVATED};border:1px solid ${BORDER};border-left:3px solid ${p.accent};border-radius:10px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="vertical-align:middle;">
            <div style="color:${p.accent};font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:5px;">${p.tag}</div>
            <div style="color:${INK};font-weight:600;font-size:15px;line-height:1.3;">${p.name}</div>
            <div style="color:${MUTED};font-size:13px;line-height:1.5;margin-top:3px;">${p.desc}</div>
          </td>
          <td style="vertical-align:middle;text-align:right;width:24px;padding-left:8px;">
            <span style="color:${p.accent};font-size:18px;font-weight:600;">→</span>
          </td>
        </tr></table>
      </a>
    </td></tr>`).join("");

  return `<div style="margin:32px 0 8px 0;padding-top:28px;border-top:1px solid ${BORDER};">
    <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:6px;">While you wait</div>
    <div style="color:${MUTED};font-size:14px;line-height:1.6;margin-bottom:14px;">Have a poke around — or talk to OTTO, our voice agent, live on the site right now.</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${bespoke}${cards}</table>
    <div style="margin-top:18px;">
      <a href="${base}" style="display:inline-block;padding:12px 22px;background:${BLUE};color:#ffffff;text-decoration:none;border-radius:10px;font-weight:600;font-size:14px;">🎙  Talk to OTTO</a>
    </div>
  </div>`;
}

/** Warm, signed sign-off — co-founder identification gives weight. */
function signOff(): string {
  return `<div style="margin:32px 0 4px 0;padding-top:28px;border-top:1px solid ${BORDER};color:${MUTED};font-size:14px;line-height:1.7;">
    Speak soon,<br/>
    <span style="color:${INK};font-weight:600;">Oli &amp; Tom</span><br/>
    <span style="font-size:12px;color:${DIM};">Co-founders, Oltomatic · Operating globally</span>
  </div>`;
}

// ── Internal-email helpers (light-mode) ─────────────────────────────

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:${L_MUTED};font-size:12px;vertical-align:top;white-space:nowrap;width:1%;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:${L_INK};font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

function block(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<div style="margin-top:14px;padding:14px 16px;background:${L_BG};border-radius:8px;">
    <p style="margin:0 0 6px 0;color:${L_MUTED};font-size:11px;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(label)}</p>
    <p style="margin:0;color:${L_INK};font-size:14px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(value)}</p>
  </div>`;
}

// ── Public types ────────────────────────────────────────────────────

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message?: string;
  site: "oltomatic.ai" | "oltomatic.co";
};

export type SupportPayload = {
  name: string;
  email: string;
  product?: string;
  issue: string;
  description?: string;
  site: "oltomatic.ai" | "oltomatic.co";
};

// ── Internal emails (tech@ — utilitarian log) ───────────────────────

export function contactInternalHtml(p: ContactPayload): string {
  const body = `
    <p style="margin:0 0 4px 0;font-size:11px;color:${L_MUTED};text-transform:uppercase;letter-spacing:1.2px;">New enquiry · ${p.site}</p>
    <h1 style="margin:0 0 18px 0;font-size:20px;font-weight:600;color:${L_INK};">${escapeHtml(p.name)}${p.company ? ` · <span style="color:${L_MUTED};font-weight:500;">${escapeHtml(p.company)}</span>` : ""}</h1>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Email", p.email)}
      ${row("Interest", p.interest)}
    </table>
    ${block("Message", p.message)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${L_MUTED};line-height:1.6;">
      <strong style="color:${L_INK};">For the log.</strong> The prospect has been auto-replied from <a href="mailto:hello@${p.site}" style="color:${LINK};text-decoration:none;">hello@${p.site}</a> — that's where they'll reply. Hitting reply on this email will also reach them if you need to respond from tech@.
    </p>`;
  return lightShell(body, p.site);
}

export function supportInternalHtml(p: SupportPayload): string {
  const body = `
    <p style="margin:0 0 4px 0;font-size:11px;color:${L_MUTED};text-transform:uppercase;letter-spacing:1.2px;">Support ticket · ${p.site}</p>
    <h1 style="margin:0 0 18px 0;font-size:20px;font-weight:600;color:${L_INK};">${escapeHtml(p.issue)}</h1>
    <table style="width:100%;border-collapse:collapse;">
      ${row("From", `${p.name} · ${p.email}`)}
      ${row("Product", p.product)}
    </table>
    ${block("Details", p.description)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${L_MUTED};line-height:1.6;">
      <strong style="color:${L_INK};">For the log.</strong> Hitting reply reaches the customer directly. Conversations should continue on <a href="mailto:hello@${p.site}" style="color:${LINK};text-decoration:none;">hello@${p.site}</a> where possible.
    </p>`;
  return lightShell(body, p.site);
}

// ── Prospect-facing emails (dark-mode, premium) ─────────────────────

export function contactProspectHtml(p: ContactPayload): string {
  const firstName = p.name.split(" ")[0] || p.name;
  const body = `
    <p style="margin:0 0 6px 0;color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;">Thanks for reaching out</p>
    <h1 style="margin:0 0 16px 0;font-size:26px;font-weight:700;line-height:1.25;color:${INK};letter-spacing:-0.02em;">Hi ${escapeHtml(firstName)} — we've got it.</h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:${MUTED};">
      Your message is in the right place. We read everything that comes in personally, so it won't be sitting in a queue somewhere.
    </p>
    ${nextSteps()}
    ${whileYouWait(p.site)}
    ${signOff()}
    <p style="margin:20px 0 0 0;font-size:12px;line-height:1.6;color:${DIM};">
      P.S. Questions in the meantime? Just reply to this email — it reaches us directly.
    </p>`;
  return darkShell(body, p.site);
}

export function supportProspectHtml(p: SupportPayload): string {
  const firstName = p.name.split(" ")[0] || p.name;
  const body = `
    <p style="margin:0 0 6px 0;color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;">Ticket received</p>
    <h1 style="margin:0 0 16px 0;font-size:26px;font-weight:700;line-height:1.25;color:${INK};letter-spacing:-0.02em;">Hi ${escapeHtml(firstName)} — we're on it.</h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:${MUTED};">
      Your support ticket has been logged. We'll respond within one business day — Growth &amp; Scale customers within 4 hours.
    </p>
    <div style="margin:24px 0;padding:16px 18px;background:${ELEVATED};border:1px solid ${BORDER};border-radius:10px;">
      <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">The issue you flagged</div>
      <div style="color:${INK};font-size:15px;line-height:1.55;">${escapeHtml(p.issue)}</div>
    </div>
    <p style="margin:0 0 14px 0;font-size:14px;line-height:1.7;color:${MUTED};">
      If you think of anything else we should know, just reply to this email.
    </p>
    ${signOff()}`;
  return darkShell(body, p.site);
}
