import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ZiggyPayroll — 1099 Contractor Management at $39/mo",
  description:
    "Gusto charges $79/mo. We charge $39. Manage 1099 contractors, send ACH payments, and generate tax forms — built for businesses that work with independent contractors.",
  alternates: { canonical: "https://ziggypayroll.com" },
};

const features = [
  {
    icon: "📋",
    title: "Contractor Onboarding",
    desc: "Collect W-9s digitally. Contractors fill out their own forms — no paperwork, no chasing.",
  },
  {
    icon: "💸",
    title: "ACH Payments",
    desc: "Send direct bank transfers to any contractor in the US. Batch payments in seconds.",
  },
  {
    icon: "🧾",
    title: "1099 Generation",
    desc: "Auto-generate 1099-NEC forms at year-end. E-file via Tax1099 integration.",
  },
  {
    icon: "🏠",
    title: "Contractor Self-Service Portal",
    desc: "Contractors log in to view payment history, update bank info, and download their own 1099s.",
  },
  {
    icon: "⏱️",
    title: "Time Tracking",
    desc: "Built-in time tracking for hourly contractors. Approve hours before payment.",
  },
  {
    icon: "✅",
    title: "Payment Approval Workflow",
    desc: "Review and approve payments before they go out. Full audit trail for your records.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#27272a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 via-transparent to-[#ff1744]/5 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm text-[#a1a1aa] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse inline-block" />
              1099 Contractors Only · Not for W-2 Employees
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span>Pay contractors </span>
              <br />
              <span className="text-[#a1a1aa]">without the headache</span>
            </h1>

            {/* Price comparison callout */}
            <div className="inline-block bg-[#18181b] border border-[#27272a] rounded-2xl px-6 py-4 mb-6">
              <p className="text-lg md:text-xl font-semibold">
                <span className="line-through text-[#a1a1aa]">Gusto charges $79/mo</span>
                <span className="text-[#a1a1aa]"> · </span>
                <span style={{ color: "#84cc16" }}>We charge $39</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
              Manage 1099 contractors, send ACH payments, and generate tax forms — built for businesses that work with independent contractors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
              >
                Start free trial — $39/mo
              </Link>
              <Link
                href="/features"
                className="border border-[#27272a] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:border-[#3f3f46] hover:bg-[#18181b] transition-colors"
              >
                See all features →
              </Link>
            </div>

            <p className="text-[#71717a] text-sm mt-4">No contracts. Cancel anytime. 14-day free trial.</p>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-b border-[#27272a] bg-[#18181b]/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[#a1a1aa] text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> ACH Payments
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> W-9 Collection
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> 1099-NEC E-Filing
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> Contractor Portal
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> No Setup Fee
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#84cc16]">✓</span> Self-Serve in 5 Min
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-[#27272a] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#ff1744]/10 border border-[#ff1744]/20 rounded-full px-4 py-1.5 text-sm text-[#ff1744] font-medium mb-6">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gusto and ADP are built for <span className="text-[#a1a1aa] line-through">W-2 employees</span>
            </h2>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-8">
              If you work with 1099 contractors, you&apos;re paying for payroll taxes, benefits administration, and compliance features you&apos;ll <em>never use</em>. Gusto&apos;s contractor plan starts at $6/contractor/mo plus base fees — and their full plan is $79+/mo for features designed for W-2 employees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "💰", label: "Payroll tax filing", note: "Not needed for 1099s" },
                { icon: "🏥", label: "Benefits management", note: "Contractors pay their own" },
                { icon: "📊", label: "HR compliance tools", note: "Built for employees, not contractors" },
              ].map((item) => (
                <div key={item.label} className="bg-[#18181b] border border-[#27272a] rounded-xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-[#a1a1aa] line-through">{item.label}</p>
                  <p className="text-[#71717a] text-sm mt-1">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="border-b border-[#27272a] py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built <span style={{ color: "#84cc16" }}>exclusively</span> for 1099 contractors
            </h2>
            <p className="text-lg text-[#a1a1aa] leading-relaxed mb-10">
              ZiggyPayroll handles 1099 contractor management end to end — onboarding, payments, and tax forms. No W-2 features. No bloat. No overpaying.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                { step: "01", label: "Onboard contractors", desc: "Invite contractors to fill out their W-9 digitally. Everything stored securely." },
                { step: "02", label: "Send ACH payments", desc: "Pay contractors via bank transfer. Batch payments to multiple contractors at once." },
                { step: "03", label: "Generate & file 1099s", desc: "Year-end 1099-NEC forms generated automatically. E-file via Tax1099 integration." },
              ].map((item) => (
                <div key={item.step} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-[#84cc16] font-bold text-lg mb-2">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-b border-[#27272a] py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for 1099 contractors</h2>
              <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">Six core tools, zero W-2 overhead.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/features" className="text-[#84cc16] font-semibold hover:underline">
                View all features →
              </Link>
            </div>
          </div>
        </section>

        {/* Deep Features */}
        <section className="border-b border-[#27272a] py-20 bg-[#18181b]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep features that matter</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contractor Self-Service */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-3">Contractor Self-Service Portal</h3>
                <p className="text-[#a1a1aa] leading-relaxed mb-4">
                  Every contractor gets their own login. They can view payment history, download pay stubs, update bank account info, and pull their own 1099 forms at tax time — without bugging you.
                </p>
                <ul className="space-y-2 text-sm text-[#a1a1aa]">
                  {["View full payment history", "Download 1099-NEC forms", "Update direct deposit info", "Submit hours for approval"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#84cc16]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 1099 E-Filing */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="text-2xl font-bold mb-3">1099 E-Filing via Tax1099</h3>
                <p className="text-[#a1a1aa] leading-relaxed mb-4">
                  Come January, ZiggyPayroll automatically generates 1099-NEC forms for every contractor you paid $600+ during the year. E-file directly to the IRS via our Tax1099 integration — no manual forms.
                </p>
                <ul className="space-y-2 text-sm text-[#a1a1aa]">
                  {["Auto-generate 1099-NEC", "E-file to IRS via Tax1099", "Email copies to contractors", "State filing support"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#84cc16]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-b border-[#27272a] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-[#a1a1aa] text-lg mb-10">No per-contractor fees. No setup costs. No surprises.</p>
            <div className="bg-[#18181b] border-2 border-[#84cc16]/30 rounded-2xl p-8 md:p-10 max-w-sm mx-auto">
              <div className="text-6xl font-bold mb-1">
                <span style={{ color: "#84cc16" }}>$39</span>
              </div>
              <div className="text-[#a1a1aa] mb-6">per month · unlimited contractors</div>
              <ul className="space-y-3 text-sm text-left mb-8">
                {[
                  "Unlimited contractors",
                  "ACH direct payments",
                  "W-9 collection & storage",
                  "1099-NEC generation & e-filing",
                  "Contractor self-service portal",
                  "Time tracking",
                  "Payment approval workflow",
                  "14-day free trial",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[#a1a1aa]">
                    <span className="text-[#84cc16]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="block w-full bg-[#84cc16] text-black font-bold py-3 rounded-xl hover:bg-[#65a30d] transition-colors"
              >
                Start free trial
              </Link>
            </div>
            <p className="text-[#71717a] text-sm mt-6">
              Need a bundle with invoicing or scheduling?{" "}
              <Link href="/pricing" className="text-[#84cc16] hover:underline">See bundle pricing</Link>
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-b border-[#27272a] py-20 bg-[#18181b]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How we compare</h2>
              <p className="text-[#a1a1aa] text-lg">Don&apos;t pay for what you don&apos;t need.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#27272a]">
                    <th className="text-left pb-4 font-semibold text-[#a1a1aa]">Feature</th>
                    <th className="text-center pb-4 font-bold" style={{ color: "#84cc16" }}>ZiggyPayroll<br /><span className="text-2xl font-bold text-white">$39</span><span className="text-[#a1a1aa] font-normal">/mo</span></th>
                    <th className="text-center pb-4 font-semibold text-[#a1a1aa]">Gusto<br /><span className="text-2xl font-bold text-[#a1a1aa]">$79+</span><span className="font-normal">/mo</span></th>
                    <th className="text-center pb-4 font-semibold text-[#a1a1aa]">Spreadsheets<br /><span className="text-2xl font-bold text-[#a1a1aa]">$0</span><span className="font-normal"> but...</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27272a]">
                  {[
                    ["Built for 1099 contractors", "✅", "⚠️ W-2 first", "❌"],
                    ["ACH payments", "✅", "✅", "❌ Venmo/Zelle"],
                    ["W-9 collection", "✅", "✅", "❌ Email chaos"],
                    ["1099-NEC e-filing", "✅", "✅", "❌ Manual"],
                    ["Contractor self-service portal", "✅", "✅", "❌"],
                    ["Time tracking", "✅", "✅", "❌"],
                    ["Self-serve setup", "✅ 5 min", "⚠️ Complex", "✅"],
                    ["Price per month", "$39", "$79+", "Time = Money"],
                  ].map(([feature, us, gusto, manual]) => (
                    <tr key={feature as string}>
                      <td className="py-3 text-[#a1a1aa]">{feature}</td>
                      <td className="py-3 text-center font-medium text-[#84cc16]">{us}</td>
                      <td className="py-3 text-center text-[#71717a]">{gusto}</td>
                      <td className="py-3 text-center text-[#71717a]">{manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/vs/gusto" className="text-[#a1a1aa] hover:text-white text-sm underline text-center">Full comparison vs Gusto →</Link>
              <Link href="/vs/adp" className="text-[#a1a1aa] hover:text-white text-sm underline text-center">Full comparison vs ADP →</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to stop overpaying?
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8">
              Start your 14-day free trial. No credit card required. Set up in 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/pricing"
                className="bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
              >
                Start free trial
              </Link>
              <Link
                href="/features"
                className="border border-[#27272a] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#18181b] transition-colors"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
