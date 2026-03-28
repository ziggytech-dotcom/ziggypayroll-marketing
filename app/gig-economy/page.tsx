import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gig Worker Payments — Manage and Pay Your 1099 Workforce at Scale",
  description:
    "ZiggyPayroll helps gig economy platforms manage and pay 1099 gig workers at scale. Batch ACH payments, W-9 collection, and 1099-NEC e-filing. $39/mo.",
  alternates: { canonical: "https://ziggypayroll.com/gig-economy" },
};

export default function GigEconomyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              Gig Economy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gig Worker Payments
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-6">
              Manage and pay your 1099 workforce at scale
            </p>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
              Whether you have 10 gig workers or 500, ZiggyPayroll handles W-9 collection, batch ACH payments, and year-end 1099 filing for your entire 1099 workforce — at one flat rate.
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
                className="border border-[#27272a] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-[#18181b] transition-colors"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* The scale problem */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Scale changes everything</h2>
            <p className="text-[#a1a1aa] text-center mb-8 max-w-2xl mx-auto">
              Managing 5 gig workers with a spreadsheet is painful. Managing 50+ is impossible. ZiggyPayroll brings structure to your 1099 workforce.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "📤",
                  title: "Batch payments",
                  desc: "Pay your entire 1099 workforce in one batch. Review totals, approve, and send — ACH settles in 1-3 business days for everyone.",
                },
                {
                  icon: "🗂️",
                  title: "Centralized records",
                  desc: "Every W-9, every payment, every contractor profile in one place. No more hunting through email threads and Venmo history.",
                },
                {
                  icon: "📬",
                  title: "1099 at scale",
                  desc: "At year-end, every gig worker who earned $600+ gets their 1099-NEC automatically. E-file to the IRS with one click — 10 workers or 500.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 1099 vs W-2 distinction */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">1099 gig workers vs W-2 employees</h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                ZiggyPayroll is built for <strong className="text-[#84cc16]">1099 independent contractors only</strong>. This is the critical distinction in the gig economy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#84cc16]/20 rounded-xl p-5">
                  <h3 className="font-bold text-[#84cc16] mb-3">✅ ZiggyPayroll handles</h3>
                  <ul className="space-y-2 text-sm text-[#a1a1aa]">
                    <li>• 1099 gig workers (Uber-style drivers)</li>
                    <li>• Freelance marketplace contractors</li>
                    <li>• Independent service providers</li>
                    <li>• On-demand workers (1099 status)</li>
                    <li>• Project-based contractors</li>
                  </ul>
                </div>
                <div className="border border-[#ff1744]/20 rounded-xl p-5">
                  <h3 className="font-bold text-[#ff1744] mb-3">❌ ZiggyPayroll does NOT handle</h3>
                  <ul className="space-y-2 text-sm text-[#a1a1aa]">
                    <li>• W-2 employees (any type)</li>
                    <li>• Payroll tax withholding</li>
                    <li>• Benefits administration</li>
                    <li>• FICA/FUTA/SUTA filing</li>
                    <li>• Employee classification compliance</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#71717a] text-xs mt-4">
                Consult a labor attorney or CPA if you&apos;re unsure whether your gig workers should be classified as 1099 or W-2. Misclassification carries significant legal risk.
              </p>
            </div>
          </div>
        </section>

        {/* Feature highlights */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What you get at $39/mo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "👥", label: "Unlimited gig workers" },
                { icon: "📋", label: "Digital W-9 collection" },
                { icon: "💸", label: "Batch ACH payments" },
                { icon: "✅", label: "Payment approval workflow" },
                { icon: "🏠", label: "Worker self-service portal" },
                { icon: "🧾", label: "1099-NEC e-filing" },
                { icon: "⏱️", label: "Time tracking" },
                { icon: "📊", label: "Payment reporting & CSV export" },
                { icon: "🔒", label: "Secure document storage" },
              ].map((item) => (
                <div key={item.label} className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-[#a1a1aa]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Gig economy businesses we work with</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Delivery platforms",
                "Home services",
                "Tutoring platforms",
                "Beauty & wellness",
                "On-demand staffing",
                "Pet services",
                "Task apps",
                "Freelance platforms",
              ].map(item => (
                <div key={item} className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-sm text-[#a1a1aa]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Manage your 1099 workforce at scale</h2>
            <p className="text-[#a1a1aa] mb-2">$39/mo · Unlimited contractors · No per-worker fees</p>
            <p className="text-[#71717a] text-sm mb-8">Whether you have 10 gig workers or 500, it&apos;s still $39/mo.</p>
            <Link
              href="/pricing"
              className="inline-block bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
