"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type FormData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", interest: "General enquiry", message: ""
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", interest: "General enquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "#161625",
    border: "1px solid #252538",
    borderRadius: "8px",
    color: "#EEEEF5",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left: Info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#1560A8" }}>Get in touch</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#EEEEF5" }}>
                Let's talk about<br />your operation
              </h1>
              <p className="text-base leading-relaxed mb-12" style={{ color: "#AAAABC" }}>
                No jargon. No fluff. Just a straight conversation about what AI can actually do for your business. We'll tell you honestly if we're not the right fit.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Email", value: "hello@oltomatic.ai", href: "mailto:hello@oltomatic.ai" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#888896" }}>{item.label}</p>
                    <a href={item.href} className="text-sm" style={{ color: "#1560A8" }}>{item.value}</a>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-xl border" style={{ background: "#0F0F1A", borderColor: "#252538" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "#EEEEF5" }}>What to expect</p>
                <ul className="space-y-2">
                  {[
                    "30-minute discovery call",
                    "We listen before we pitch",
                    "Honest assessment of what AI can do for you",
                    "Clear next steps — no hard sell",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#888896" }}>
                      <span style={{ color: "#1560A8" }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 rounded-2xl border" style={{ background: "#0F0F1A", borderColor: "#252538" }}>
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(21,96,168,0.15)" }}>
                    <span style={{ color: "#1560A8", fontSize: "20px" }}>✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#EEEEF5" }}>Message sent</h3>
                  <p style={{ color: "#888896" }}>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Your name *</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Oliver Benson"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#252538"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Email *</label>
                      <input
                        name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="you@company.com"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#252538"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Company</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      placeholder="Your company name"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#252538"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>I'm interested in</label>
                    <select
                      name="interest" value={form.interest} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#252538"; }}
                    >
                      <option>General enquiry</option>
                      <option>OLTO Reach</option>
                      <option>OLTO Voice</option>
                      <option>OLTO Ops</option>
                      <option>Bespoke AI build</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Tell us about your operation</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="What does your business do, and what problem are you trying to solve?"
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#252538"; }}
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm" style={{ color: "#f87171" }}>Something went wrong. Email us directly at hello@oltomatic.ai</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                    style={{ background: status === "loading" ? "#252538" : "#1560A8", cursor: status === "loading" ? "not-allowed" : "pointer" }}
                    onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.background = "#2272C3"; }}
                    onMouseLeave={(e) => { if (status !== "loading") e.currentTarget.style.background = "#1560A8"; }}
                  >
                    {status === "loading" ? "Sending..." : "Send message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
