import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VoicePage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(21,96,168,0.1) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5BA3E0" }} />
            OLTO Voice · AI Call Handling
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            Your phone rings at 2am.<br />
            <span className="blue-text">OLTO answers it.</span>
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            OLTO Voice handles incoming calls 24/7 — qualifying leads, booking appointments, answering FAQs, and handing off to humans when it matters. You wake up to revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Get OLTO Voice</Link>
            <div className="btn-secondary" style={{ cursor: "default" }}>From £199/month</div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ borderTop: "1px solid #1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">The problem it solves</p>
              <h2 className="font-bold mb-6" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
                Every missed call is lost revenue
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "#9999B0" }}>
                The average business misses 62% of calls outside business hours. Each one is a potential booking, sale, or client — gone to whoever picked up.
              </p>
              <p className="leading-relaxed" style={{ color: "#9999B0" }}>
                OLTO Voice doesn't just answer calls. It has real conversations — asking the right questions, capturing lead details, booking into your calendar, and notifying you instantly.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: "24/7 call handling", desc: "Never miss a call again. OLTO answers every time, day or night." },
                { title: "Lead capture & qualification", desc: "Automatically captures name, email, and intent — then scores the lead." },
                { title: "Booking & calendar integration", desc: "Books directly into Google Calendar. Sends confirmation emails." },
                { title: "Smart call transfer", desc: "Hands off to a human when the caller requests it or the situation requires." },
                { title: "Instant notifications", desc: "Email summary of every call, every lead, every booking — straight to you." },
              ].map((item) => (
                <div key={item.title} className="card p-5 flex gap-4">
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                    style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>✓</div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#EEEEF5" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#55556A" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="font-bold mb-12" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>Simple. Transparent.</h2>
          <div className="card p-10 blue-glow" style={{ borderColor: "rgba(21,96,168,0.3)" }}>
            <div className="stat-number blue-text mb-1">£199<span style={{ fontSize: "20px", fontWeight: 400, color: "#55556A" }}>/month</span></div>
            <p className="mb-8 text-sm" style={{ color: "#55556A" }}>+ £0.05/minute call cost · No setup fee</p>
            <ul className="text-left flex flex-col gap-3 mb-8 max-w-xs mx-auto">
              {["Full OLTO Voice setup", "Custom voice & personality", "Calendar integration", "Email notifications", "GDPR compliant", "Ongoing support"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#9999B0" }}>
                  <span style={{ color: "#5BA3E0" }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary w-full justify-center">Get Started</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
