import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#EEEEF5" }}>Terms of Service</h1>
        <p style={{ color: "#AAAABC" }}>Full terms of service coming soon. For any questions, contact <a href="mailto:hello@oltomatic.ai" style={{ color: "#1560A8" }}>hello@oltomatic.ai</a></p>
      </section>
      <Footer />
    </main>
  );
}
