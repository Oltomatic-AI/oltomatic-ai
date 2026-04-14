import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>Terms of Service</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>Full terms coming soon.</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <p className="mb-4">Our full Terms of Service are being finalised. Use of this website is subject to our <a href="/privacy" style={{ color: "#1560A8" }}>Privacy Policy</a>, <a href="/cookies" style={{ color: "#1560A8" }}>Cookie Policy</a> and <a href="/ai-disclosure" style={{ color: "#1560A8" }}>AI Disclosure Notice</a>.</p>
          <p>Questions: <a href="mailto:hello@oltomatic.ai" style={{ color: "#1560A8" }}>hello@oltomatic.ai</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
