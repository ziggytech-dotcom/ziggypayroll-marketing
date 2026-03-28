import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "ZiggyPayroll vs Gusto — 1099 Contractor Management",
  description:
    "If you only need 1099 contractor management, Gusto is overkill. ZiggyPayroll is $39/mo vs Gusto's $79+/mo — built exclusively for 1099 contractors.",
  alternates: { canonical: "https://ziggypayroll.com/vs/gusto" },
};

const rows = [
  { feature: "Built for 1099 contractors", us: "✅ Yes — exclusively", them: "⚠️ W-2 first, contractor add-on" },
  { feature: "Built for W-2 employees", us: "❌ Not our focus", them: "✅ Primary use case" },
  { feature: "Monthly price", us: "✅ $39/mo flat", them: "❌ $79+/mo (Plus plan)" },
  { feature: "Per-contractor fees", us: "✅ $0 — unlimited included", them: "❌ $6/contractor/mo (Contractor plan)" },
  { feature: "Setup time", us: "✅ 5 minutes, self-serve", them: "⚠️ Complex onboarding" },
  { feature: "ACH direct payments", us: "✅ Yes", them: "✅ Yes" },
  { feature: "W-9 collection", us: "✅ Yes", them: "✅ Yes" },
  { feature: "1099-NEC generation", us: "✅ Yes", them: "✅ Yes" },
  { feature: "1099 e-filing", us: "✅ Included", them: "⚠️ Add-on fee" },
  { feature: "Contractor self-service portal", us: "✅ Yes", them: "✅ Yes" },
  { feature: "Payroll tax filing (W-2)", us: "❌ N/A for 1099 contractors", them: "✅ Yes (for W-2 employers)" },
  { feature: "Benefits administration", us: "❌ N/A for 1099 contractors", them: "✅ Yes (for W-2 employers)" },
  { feature: "HR compliance tools", us: "❌ N/A for 1099 contractors", them: "✅ Yes (for W-2 employers)" },
  { feature: "Time tracking", us: "✅ Yes", them: "✅ Yes (higher plans)" },
];

export default function VsGustoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#ff1744]/10 border border-[#ff1744]/20 rounded-full px-4 py-1.5 text-sm text-[#ff1744] font-medium mb-6">
              ZiggyPayroll vs Gusto
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              If you only need 1099 contractor management, <span style={{ color: "#84cc16" }}>Gusto is overkill</span>
            </h1>
            <p className="text-[#a1a1aa] text-lg max-w-3xl mx-auto">
              Gusto is an excellent product — for businesses with W-2 employees. But if your entire workforce is 1099 independent contractors, you&apos;re paying $79+/mo for payroll taxes, benefits, and HR features you&apos;ll never touch.
            </p>
          </div>
        </section>

        {/* Price Callout */}
        <section className="border-b border-[#27272a] py-12 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#18181b] border-2 border-[#84cc16]/40 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xl font-bold" style={{ color: "#ff1744" }}>Ziggy</span>
                  <span className="text-xl font-bold" style={{ color: "#84cc16" }}>Payroll</span>
                </div>
                <div className="text-5xl font-bold text-[#84cc16] mb-2">$39</div>
                <div className="text-[#a1a1aa] mb-4">/month · unlimited contractors</div>
                <div className="text-sm text-[#a1a1aa]">Built for 1099 contractors only</div>
              </div>
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 text-center">
                <div className="text-xl font-bold text-[#a1a1aa] mb-2">Gusto Plus</div>
                <div className="text-5xl font-bold text-[#a1a1aa] mb-2">$79+</div>
                <div className="text-[#a1a1aa] mb-4">/month + $12/person</div>
                <div className="text-sm text-[#71717a]">Built for W-2 employees (contractor add-on available)</div>
              </div>
            </div>
            <p className="text-center text-[#71717a] text-sm mt-6">
              Gusto Contractor-Only plan: $35/mo base + $6/contractor/mo. For 5 contractors that&apos;s $65/mo — still $26 more than ZiggyPayroll.
            </p>
          </div>
        </section>

        {/* Why Gusto is overkill */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What you&apos;re paying for at Gusto that you don&apos;t need</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "🏥", title: "Benefits administration", desc: "Health insurance, 401k, FSA — designed for W-2 employees. 1099 contractors handle their own benefits." },
                { icon: "📊", title: "Payroll tax filing", desc: "Gusto files federal and state payroll taxes for W-2 employees. 1099 contractors pay their own taxes." },
                { icon: "⚖️", title: "HR compliance", desc: "Offer letters, I-9 verification, ACA compliance — all built for employees, not contractors." },
              ].map((item) => (
                <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2 text-[#a1a1aa] line-through">{item.title}</h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Feature comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#27272a]">
                    <th className="text-left pb-4 font-semibold text-[#a1a1aa]">Feature</th>
                    <th className="text-center pb-4 font-bold text-[#84cc16]">ZiggyPayroll<br /><span className="text-white">$39/mo</span></th>
                    <th className="text-center pb-4 font-semibold text-[#a1a1aa]">Gusto<br /><span className="text-[#a1a1aa]">$79+/mo</span></th>
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
              Gusto is a great product for businesses with W-2 employees who also happen to work with some contractors. But if <strong className="text-white">all</strong> your workers are 1099 independent contractors, you&apos;re paying for an enterprise W-2 payroll system you&apos;ll never use.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed mb-10">
              ZiggyPayroll is $39/mo, self-serve in 5 minutes, and does everything you actually need: W-9 collection, ACH payments, and 1099 filing. Nothing else.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial — $39/mo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
