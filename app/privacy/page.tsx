import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#EEEEF5" }}>Privacy Policy</h1>
        <div className="prose" style={{ color: "#AAAABC" }}>
          <p className="mb-4">Oltomatic Ltd ("we", "us") is committed to protecting your personal data.</p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>Data we collect</h2>
          <p className="mb-4">When you contact us via our website, we collect the information you provide: name, email, company name, and your message.</p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>How we use it</h2>
          <p className="mb-4">Solely to respond to your enquiry and, with your consent, to send relevant information about our services.</p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>Contact</h2>
          <p>Data controller: Oltomatic Ltd, 128 City Road, London EC1V 2NX. Email: <a href="mailto:hello@oltomatic.ai" style={{ color: "#1560A8" }}>hello@oltomatic.ai</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
