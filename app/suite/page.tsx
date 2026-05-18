import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const tools = [
  {
    name: "Maintenance Management",
    tag: "Property · Facilities · Trades",
    summary: "Every job logged with the context that matters, scheduled without coordination, and signed off without chasing. Reactive issues and planned work in one place, tracked from raised to closed.",
    benefits: [
      "Repeat-issue clarity — context captured once, available forever",
      "End-of-month reports written from the job record, not by you",
      "Engineers and contractors know what's next without being told",
      "Tenants and clients get progress updates without the back-and-forth",
    ],
    fitFor: "Property managers, facilities teams, multi-site operators, trades businesses",
  },
  {
    name: "Labour Management",
    tag: "Workforce · Scheduling · Payroll",
    summary: "Rotas, hours, and coverage that adjust themselves when reality shifts. Less spreadsheet, less WhatsApp, less guesswork at the end of the period.",
    benefits: [
      "Hours, breaks, and overtime captured without manual entry",
      "Coverage gaps flagged before they cost you a service failure",
      "Compliance records stored automatically, retrievable on demand",
      "Payroll-ready exports the moment the period closes",
    ],
    fitFor: "Hospitality, retail, healthcare, multi-location service businesses",
  },
  {
    name: "Email Agents",
    tag: "Inbox · Sales · Support",
    summary: "An agent that triages your inbox, drafts in your voice, and escalates what matters — so you stop opening email on instinct.",
    benefits: [
      "Hours back per week on triage and reply-drafting",
      "Lead and customer response times measurably faster",
      "Nothing slips — every email gets a sensible action",
      "Your tone of voice, not a stilted template",
    ],
    fitFor: "Founders, operators, sales teams, anyone losing the morning to email",
  },
  {
    name: "Document & SOP Generator",
    tag: "Knowledge · Onboarding · Process",
    summary: "Turn a five-minute screen recording or a rough brain-dump into a polished SOP, training doc, or process guide. Your operation, documented, without anyone writing it from scratch.",
    benefits: [
      "New-hire onboarding measured in days, not months",
      "Tribal knowledge captured before key people move on",
      "Consistent formatting and versioning across every doc",
      "Updates take minutes, not afternoons",
    ],
    fitFor: "Growing teams, franchise operators, anyone scaling beyond founder-knowledge",
  },
  {
    name: "Compliance & Checklist Runner",
    tag: "Audit · H&S · Quality",
    summary: "Recurring checks assigned, completed, and stored as defensible evidence. When the auditor turns up, the answer is already in the system.",
    benefits: [
      "Audit prep collapsed from days to minutes",
      "Recurring checks never missed — the system chases, not you",
      "Photographic and signed evidence captured in-app",
      "A record that holds up if anything is ever queried",
    ],
    fitFor: "Hospitality, healthcare, manufacturing, regulated trades",
  },
  {
    name: "Internal Knowledge Base",
    tag: "Search · Q&A · Self-serve",
    summary: "Ask your business a question. Get an answer with the source. Handbooks, contracts, SOPs, project notes — searchable in plain English by anyone on the team.",
    benefits: [
      "Stop answering the same question fifteen times a week",
      "Instant answers from documents your team forgot existed",
      "New starters self-serve their first month of questions",
      "Every answer cites its source — trust stays high",
    ],
    fitFor: "Any team with more than five people and more than ten documents",
  },
  {
    name: "Reporting & Dashboards",
    tag: "Visibility · Decisions",
    summary: "Live dashboards built on the systems you already use. The numbers that actually matter, surfaced where you can see them, refreshed without anyone touching a spreadsheet.",
    benefits: [
      "Decisions made on this week's data, not last month's export",
      "Monday-morning reporting time eliminated",
      "Multi-source views — ops, finance, CRM in one place",
      "Alerts when a number drifts outside your range",
    ],
    fitFor: "Owners, ops directors, founders who want fewer meetings about numbers",
  },
  {
    name: "Customer Feedback Collector",
    tag: "Reviews · NPS · Insight",
    summary: "Automated post-job, post-visit, and post-purchase feedback. Positive reviews routed to public platforms, negative ones routed to you — so issues land in your inbox before they land on Google.",
    benefits: [
      "Public review volume up without lifting a finger",
      "Negative feedback caught privately, before it goes public",
      "Themes surfaced across responses, not just star ratings",
      "NPS, CSAT, and qualitative insight in one feed",
    ],
    fitFor: "Service businesses, hospitality, healthcare — anyone whose reputation lives online",
  },
];

export default function SuitePage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(21,96,168,0.12) 0%, transparent 70%)" }} />
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(34,114,195,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1560A8" }} />
            OLTO Suite · Operational Platform
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            Your operation,<br />
            <span style={{ background: "linear-gradient(135deg, #1560A8, #5BA3E0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>running itself.</span>
          </h1>
          <p className="mb-10 max-w-2xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            OLTO Suite is the operational layer underneath your business — a set of AI-driven modules built from the patterns we kept seeing across bespoke work. Run one. Run them all. They get stronger together.
          </p>
          <Link href="/contact" className="btn-primary">Talk to us about Suite</Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20" style={{ borderTop: "1px solid #1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Start where it hurts most", desc: "Tell us what's draining the hours. Inbox? Rotas? Reactive maintenance? We start with the module that buys the most time back." },
              { num: "02", title: "We build it around you", desc: "Configured to how your operation actually runs — not how the software thinks it should. Connected to the tools you already use." },
              { num: "03", title: "Grow into the rest", desc: "Add modules when you're ready. Same login, same data, the system gets more useful the more of it you run." },
            ].map((item) => (
              <div key={item.num} className="card p-6">
                <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#1560A8" }}>{item.num}</p>
                <h3 className="font-semibold mb-2" style={{ fontSize: "16px", color: "#EEEEF5" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9999B0" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS LIST ── */}
      <section className="py-24" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center">The modules</p>
          <h2 className="font-bold mb-4 text-center" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
            Tools that earn their place
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto leading-relaxed" style={{ color: "#9999B0" }}>
            Every module exists because we built it for a real business first. They&apos;re the recurring problems we&apos;ve solved enough times to productise.
          </p>

          <div className="flex flex-col gap-6">
            {tools.map((tool, idx) => (
              <div key={tool.name} className="card p-8 md:p-10" style={{ position: "relative", overflow: "hidden" }}>
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(21,96,168,0.5), transparent)" }} />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
                  <div>
                    <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#1560A8" }}>
                      {String(idx + 1).padStart(2, "0")} · {tool.tag}
                    </p>
                    <h3 className="font-bold mb-4 leading-tight" style={{ fontSize: "26px", color: "#EEEEF5" }}>
                      {tool.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#9999B0" }}>
                      {tool.summary}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#55556A" }}>
                      <span style={{ color: "#9999B0", fontWeight: 500 }}>Fit for:</span> {tool.fitFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#55556A" }}>Why it earns its keep</p>
                    <ul className="flex flex-col gap-3">
                      {tool.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#EEEEF5" }}>
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "#1560A8" }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24" style={{ borderTop: "1px solid #1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
            Where would you start?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: "#9999B0" }}>
            Tell us what&apos;s draining the hours and we&apos;ll scope it on a call. One module, several, or the full operation — same conversation either way.
          </p>
          <Link href="/contact" className="btn-primary">Book a call</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
