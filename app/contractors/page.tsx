import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pay Construction Subcontractors — Track Work, Pay Accurately, File 1099s",
  description:
    "ZiggyPayroll helps construction companies manage subcontractors: collect W-9s, send ACH payments, track hours, and generate 1099-NEC forms at year-end. $39/mo.",
  alternates: { canonical: "https://ziggypayroll.com/contractors" },
};

export default function ContractorsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              Construction & Trades
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pay Construction Subcontractors
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-6">
              Track work, pay accurately, file 1099s — without the spreadsheet chaos
            </p>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
              If you hire plumbers, electricians, framers, painters, or any other subcontractors as 1099 workers, ZiggyPayroll gives you one place to manage all of them — from W-9 collection to final 1099 filing.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial — $39/mo
            </Link>
          </div>
        </section>

        {/* Pain points */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The old way is broken</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "📋", problem: "W-9 chaos", desc: "Chasing subcontractors via text and email to get their W-9 before you can pay them or file their 1099." },
                { icon: "💸", problem: "Venmo & cash", desc: "Sending payment via Venmo, Zelle, or cash — with no record, no audit trail, no way to prove what you paid." },
                { icon: "📊", problem: "Spreadsheet hell", desc: "Tracking who worked when, how much they billed, and what you paid in Excel — or worse, on paper." },
                { icon: "😰", problem: "January 1099 panic", desc: "Scrambling every January to figure out who you paid $600+ so you can manually fill out 1099 forms." },
              ].map((item) => (
                <div key={item.problem} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#ff1744] mb-2">{item.problem}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How ZiggyPayroll helps */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How ZiggyPayroll works for construction</h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Collect W-9s digitally",
                  desc: "Invite each subcontractor via email or text. They fill out their W-9 online — takes 2 minutes. You get a stored, verified copy automatically. No paper, no scanning, no filing.",
                },
                {
                  step: "02",
                  title: "Track hours and approved work",
                  desc: "Subs submit their hours through the contractor portal. You approve hours before any payment goes out. Full record of who worked when and what was approved.",
                },
                {
                  step: "03",
                  title: "Pay via ACH bank transfer",
                  desc: "Once hours are approved, send payment via direct bank transfer. Funds settle in 1-3 business days. Every payment logged automatically — no Venmo, no cash, no paper checks.",
                },
                {
                  step: "04",
                  title: "Generate 1099s in January",
                  desc: "At year-end, ZiggyPayroll tallies everything up and generates 1099-NEC forms for every sub you paid $600+. E-file with the IRS via Tax1099. Done.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-[#84cc16] font-bold text-2xl flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Who uses ZiggyPayroll in construction</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["General contractors", "Plumbing companies", "Electrical contractors", "HVAC companies", "Roofing companies", "Landscapers", "Painters", "Handymen"].map(item => (
                <div key={item} className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-sm text-[#a1a1aa]">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[#71717a] text-sm mt-6">
              Important: ZiggyPayroll is for 1099 independent contractors only. If your workers are W-2 employees, look at traditional payroll software.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Manage your subs the right way</h2>
            <p className="text-[#a1a1aa] mb-8">$39/mo · Unlimited subcontractors · 14-day free trial</p>
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
