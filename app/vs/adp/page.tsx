import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "ZiggyPayroll vs ADP Run — 1099 Contractor Management",
  description:
    "ADP Run requires a sales call and is built for W-2 payroll. ZiggyPayroll is self-serve in 5 minutes at $39/mo — built exclusively for 1099 contractors.",
  alternates: { canonical: "https://ziggypayroll.com/vs/adp" },
};

const rows = [
  { feature: "Built for 1099 contractors", us: "✅ Yes — exclusively", them: "⚠️ Add-on, not primary focus" },
  { feature: "Self-serve sign-up", us: "✅ 5 minutes, online", them: "❌ Requires a sales call" },
  { feature: "Transparent pricing", us: "✅ $39/mo, on the website", them: "❌ Quote-based, not public" },
  { feature: "Monthly price", us: "✅ $39/mo", them: "❌ Typically $150–$200+/mo" },
  { feature: "Per-employee fees", us: "✅ $0 for contractors", them: "❌ $4–$12+/employee/mo" },
  { feature: "No long-term contracts", us: "✅ Month-to-month", them: "❌ Annual contracts common" },
  { feature: "ACH direct payments", us: "✅ Yes", them: "✅ Yes" },
  { feature: "W-9 collection", us: "✅ Yes", them: "⚠️ Limited contractor tools" },
  { feature: "1099-NEC e-filing", us: "✅ Included", them: "⚠️ Add-on / extra cost" },
  { feature: "Contractor self-service portal", us: "✅ Yes", them: "✅ Limited" },
  { feature: "Setup without a demo", us: "✅ Yes", them: "❌ Sales call required first" },
  { feature: "Implementation time", us: "✅ 5 minutes", them: "❌ Days to weeks" },
];

export default function VsAdpPage() {
  return (
    <>
      <MarketingNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#ff1744]/10 border border-[#ff1744]/20 rounded-full px-4 py-1.5 text-sm text-[#ff1744] font-medium mb-6">
              ZiggyPayroll vs ADP Run
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ADP requires a sales call. <span style={{ color: "#84cc16" }}>We&apos;re self-serve in 5 minutes.</span>
            </h1>
            <p className="text-[#a1a1aa] text-lg max-w-3xl mx-auto">
              ADP Run is enterprise payroll software built for businesses with hundreds of W-2 employees. If you just need to manage and pay 1099 contractors, you don&apos;t need ADP — and you definitely don&apos;t need their price tag.
            </p>
          </div>
        </section>

        {/* The ADP problem */}
        <section className="border-b border-[#27272a] py-12 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: "📞", title: "Sales call required", desc: "You can't even see ADP's pricing without talking to a sales rep. That's not how software works in 2025." },
                { icon: "💰", title: "Enterprise pricing", desc: "ADP Run typically runs $150–$200+/mo for small businesses. That's 4–5x ZiggyPayroll." },
                { icon: "📅", title: "Annual contracts", desc: "ADP often requires annual commitments. ZiggyPayroll is month-to-month. Cancel any time." },
              ].map((item) => (
                <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2 text-[#ff1744]">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup comparison */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How setup compares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ZiggyPayroll */}
              <div className="bg-[#18181b] border-2 border-[#84cc16]/40 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold" style={{ color: "#ff1744" }}>Ziggy</span>
                  <span className="font-bold" style={{ color: "#84cc16" }}>Payroll</span>
                </div>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Sign up at ziggypayroll.com" },
                    { step: "2", text: "Connect your bank account" },
                    { step: "3", text: "Invite your first contractor" },
                    { step: "4", text: "Send your first payment" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#84cc16] text-black text-xs font-bold flex items-center justify-center flex-shrink-0">{item.step}</span>
                      <span className="text-[#a1a1aa] text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#84cc16] font-bold mt-4 text-sm">⏱️ Total time: ~5 minutes</p>
              </div>

              {/* ADP */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
                <div className="text-xl font-bold text-[#a1a1aa] mb-4">ADP Run</div>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Request a demo/quote" },
                    { step: "2", text: "Wait for sales rep to call back" },
                    { step: "3", text: "Sit through a sales demo" },
                    { step: "4", text: "Negotiate contract & pricing" },
                    { step: "5", text: "Sign annual contract" },
                    { step: "6", text: "Wait for implementation team" },
                    { step: "7", text: "Complete onboarding calls" },
                    { step: "8", text: "Go live" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#27272a] text-[#71717a] text-xs font-bold flex items-center justify-center flex-shrink-0">{item.step}</span>
                      <span className="text-[#71717a] text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#ff1744] font-bold mt-4 text-sm">⏱️ Total time: Days to weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Feature comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#27272a]">
                    <th className="text-left pb-4 font-semibold text-[#a1a1aa]">Feature</th>
                    <th className="text-center pb-4 font-bold text-[#84cc16]">ZiggyPayroll<br /><span className="text-white">$39/mo</span></th>
                    <th className="text-center pb-4 font-semibold text-[#a1a1aa]">ADP Run<br /><span className="text-[#a1a1aa]">$150+/mo</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27272a]">
                  {rows.map((row) => (
                    <tr key={row.feature}>
                      <td className="py-3 text-[#a1a1aa]">{row.feature}</td>
                      <td className="py-3 text-center text-[#84cc16] font-medium">{row.us}</td>
                      <td className="py-3 text-center text-[#71717a]">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bottom line */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The bottom line</h2>
            <p className="text-[#a1a1aa] leading-relaxed mb-6">
              ADP Run is built for medium-to-large businesses running full W-2 payroll. It&apos;s powerful software — for the right use case. Managing 1099 independent contractors is not that use case.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed mb-10">
              ZiggyPayroll does everything you need: collect W-9s, send ACH payments, and generate 1099s. Self-serve. No sales call. No annual contract. $39/mo.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial — $39/mo
            </Link>
            <p className="text-[#71717a] text-sm mt-4">No sales call required.</p>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </>
  );
}
