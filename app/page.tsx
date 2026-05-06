export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automated Code Review<br />
          <span className="text-[#58a6ff]">for Technical Interviews</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Upload candidate code submissions and get instant AI analysis — standardized scores, red flag detection, and ready-to-use interview talking points.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Reviewing Candidates — $16/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["Standardized", "Scoring"],
            ["Red Flag", "Detection"],
            ["Interview", "Talking Points"],
          ].map(([a, b]) => (
            <div key={a} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-white font-semibold text-sm">{a}</p>
              <p className="text-[#8b949e] text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited code submissions",
              "AI quality scoring (0–100)",
              "Automated red flag detection",
              "Interview talking points per candidate",
              "Supports all major languages",
              "Export reports as PDF",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What languages and file types are supported?",
              a: "The AI supports all major programming languages including Python, JavaScript, TypeScript, Java, Go, Rust, C++, and more. You can upload .zip archives or paste code directly.",
            },
            {
              q: "How is the scoring standardized across candidates?",
              a: "Each submission is evaluated against the same rubric: code quality, readability, correctness, edge case handling, and best practices. Scores are normalized 0–100 so you can compare candidates fairly.",
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel anytime from your billing portal. You keep access until the end of your billing period with no hidden fees.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="text-white font-semibold mb-2 text-sm">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} CodeReview AI. All rights reserved.
      </footer>
    </main>
  );
}
