import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>Cookie Policy</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>Effective date: 14 April 2026 · Version 1.0</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>1. What Cookies Are</h2>
          <p className="mb-4">Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide information about how the site is used. This Cookie Policy should be read alongside our <a href="/privacy" style={{ color: "#1560A8" }}>Privacy Policy</a>.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>2. Categories of Cookies We Use</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Strictly necessary:</strong> Required for the website to function (session management, security). Cannot be switched off.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Performance and analytics:</strong> Help us understand how visitors use the site so we can improve it. Set only with your consent.</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>Functional:</strong> Remember choices you make (such as language preference) to provide a personalised experience. Set only with your consent.</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>Marketing:</strong> Used by us or our partners to show relevant adverts on other websites. Set only with your consent.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>3. Managing Your Preferences</h2>
          <p className="mb-4">You can accept, reject or change your cookie preferences at any time using the cookie banner on first visit, or through your browser settings. Blocking cookies may affect how the website functions.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>4. Do Not Track</h2>
          <p className="mb-4">Some browsers offer a "Do Not Track" signal. We do not currently respond to such signals because there is no industry consensus on how to interpret them.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>5. Changes</h2>
          <p className="mb-4">We may update this Cookie Policy from time to time. Please check back periodically.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>6. Contact</h2>
          <p className="mb-4"><a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
