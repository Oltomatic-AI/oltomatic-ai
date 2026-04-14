import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>Effective date: 14 April 2026 · Version 1.0</p>

        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>1. About this Policy</h2>
          <p className="mb-4">Oltomatic Ltd (trading as Oltomatic, "we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and share personal data when you visit oltomatic.ai, use our products (OLTO Reach, OLTO Voice and OLTO Ops) or otherwise interact with us. This Policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>2. Who We Are</h2>
          <p className="mb-4">Data controller: Oltomatic Ltd<br />Registered address: 128 City Road, London EC1V 2NX<br />Company number: 16774271<br />Privacy contact: <a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a></p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>3. Personal Data We Collect</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Data you give us:</strong> identity data (name, job title, company name), contact data (email, phone, address), account data, communications data (messages, call recordings), and billing data.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Data we collect automatically:</strong> device and usage data (IP address, browser type, pages visited), cookies — see our Cookie Policy — and voice agent recordings and transcripts where calls are routed through OLTO Voice.</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>Data from third parties:</strong> publicly available business contact data sourced from Google Places and similar prospecting tools for use with OLTO Reach, and enrichment data from data providers.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>4. How and Why We Use Your Data</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Performance of a contract:</strong> to provide our products, manage your account, deliver agreed services and handle billing.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Legitimate interests:</strong> to run, secure and improve our business — including B2B prospecting, fraud prevention and product analytics — where your interests do not override ours.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Consent:</strong> where required by law (for example, marketing cookies and call recording in some jurisdictions). You can withdraw consent at any time.</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>Legal obligation:</strong> to comply with our legal, regulatory and tax obligations.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>5. How We Use AI and Automated Processing</h2>
          <p className="mb-4">Our products use large language models and other AI systems to generate outreach copy, classify leads, transcribe and respond to phone calls, and automate business workflows. We do not make solely automated decisions that produce legal or similarly significant effects on you. AI outputs that affect a customer relationship are reviewed by a human before being acted on. Calls handled by OLTO Voice are recorded and transcribed — the opening of every call includes a notice to this effect.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>6. Who We Share Data With</h2>
          <p className="mb-4">We share personal data with: subprocessors providing infrastructure, AI, telephony and analytics services on our behalf; professional advisers under duties of confidentiality; authorities where required by law or court order; and buyers or investors in connection with a corporate transaction, subject to confidentiality. We do not sell personal data.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>7. How Long We Keep Data</h2>
          <p className="mb-4">Maximum retention: 60 days from the date the data is no longer needed for the purpose for which it was collected, unless a longer period is required by law, contract or to defend a legal claim. Voice recordings are retained for 30 days. Client account data is retained for the life of the contract plus 6 years.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>8. International Transfers</h2>
          <p className="mb-4">Where we transfer personal data outside the UK or EEA, we rely on appropriate safeguards such as the UK International Data Transfer Agreement, EU Standard Contractual Clauses, or an adequacy decision.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>9. Your Rights</h2>
          <p className="mb-4">Under UK GDPR you have the right to: access your personal data; request correction of inaccurate data; request erasure; restrict or object to processing; receive a portable copy of your data; and withdraw consent where processing is consent-based. To exercise any right, email <a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a>. We will respond within one month. You may also lodge a complaint with the UK Information Commissioner's Office at ico.org.uk.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>10. Security</h2>
          <p className="mb-4">We apply appropriate technical and organisational measures including encryption in transit (TLS 1.2+) and at rest (AES-256), role-based access controls, multi-factor authentication on production systems, and regular review of subprocessors.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>11. Children</h2>
          <p className="mb-4">Our services are sold to businesses and not directed to children. We do not knowingly collect personal data from anyone under 18.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>12. Changes to this Policy</h2>
          <p className="mb-4">We may update this Policy from time to time. Material changes will be communicated through the website or by email.</p>

          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>13. Contact Us</h2>
          <p className="mb-4">Questions, requests or complaints: <a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a><br />Postal: Oltomatic Ltd, 128 City Road, London EC1V 2NX</p>

        </div>
      </section>
      <Footer />
    </main>
  );
}
