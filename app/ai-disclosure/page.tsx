import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AIDisclosurePage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>AI Disclosure & Call Recording Notice</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>Effective date: 14 April 2026 · Version 1.0</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>1. Purpose</h2>
          <p className="mb-4">Oltomatic builds and operates AI systems. This notice tells customers, prospects and end users when and how AI is used so they can make informed decisions and we can comply with applicable disclosure laws.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>2. Where We Use AI</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>OLTO Reach:</strong> Uses generative AI to draft outreach emails personalised to the recipient. A human must approve every outreach before it is sent.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>OLTO Voice:</strong> Uses speech-to-text, large language models and text-to-speech to handle inbound and outbound phone calls. Calls are recorded and transcribed.</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>OLTO Ops:</strong> Uses AI to automate workflow tasks specified by the customer.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>3. Call Recording Disclosure</h2>
          <p className="mb-4">Every OLTO Voice call begins with a clear notice: you are speaking with an AI assistant and the call may be recorded for quality and assurance purposes.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>4. Human Oversight</h2>
          <p className="mb-4">AI outputs that affect a customer relationship are reviewable by humans, and outreach to third parties is gated on human approval. We do not make solely automated decisions producing legal or similarly significant effects on individuals.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>5. Model Providers</h2>
          <p className="mb-4">We use third-party AI providers including Anthropic (Claude) and OpenAI. We do not allow these providers to train their models on our customers' content.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>6. Limitations</h2>
          <p className="mb-4">AI systems can produce inaccurate, biased or unexpected outputs. Customers are responsible for reviewing AI-generated content and ensuring it is accurate, lawful and appropriate. Oltomatic does not guarantee the accuracy of any AI output.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>7. Reporting Concerns</h2>
          <p className="mb-4">Contact <a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a>. We will investigate and respond within 30 days.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
