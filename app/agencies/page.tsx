import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Agency Contractor Payments — Pay Freelancers and Independent Contractors",
  description:
    "ZiggyPayroll helps agencies manage and pay freelancers and independent contractors. W-9 collection, ACH payments, and 1099-NEC filing at $39/mo.",
  alternates: { canonical: "https://ziggypayroll.com/agencies" },
};

export default function AgenciesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              Agencies
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agency Contractor Payments
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-6">
              Pay freelancers and independent contractors — without the admin headache
            </p>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-10">
              Agencies live or die by their contractor network. ZiggyPayroll gives you one place to onboard contractors, collect their W-9s, send payments, and handle their 1099s at year-end — so you can focus on delivering work, not chasing paperwork.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-[#84cc16] text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial — $39/mo
            </Link>
          </div>
        </section>

        {/* Common agency problems */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Agencies deal with this every month</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "📂", title: "Missing W-9s at tax time", desc: "Scrambling in January to collect W-9s from freelancers who've moved, changed names, or stopped responding." },
                { icon: "💳", title: "Payment tracking across apps", desc: "Paying contractors via PayPal, Venmo, wire transfers, and checks — then trying to reconcile it all for accounting." },
                { icon: "🧾", title: "Manual 1099 prep", desc: "Manually calculating who hit $600, filling out forms by hand, and mailing paper 1099s every January." },
              ].map((item) => (
                <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#ff1744] mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features for agencies */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Built for how agencies actually work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "📋",
                  title: "Digital W-9 onboarding",
                  desc: "Before a freelancer ever gets their first payment, they complete their W-9 digitally. Stored forever. No chasing, no follow-ups, no January panic.",
                },
                {
                  icon: "💸",
                  title: "One-click ACH payments",
                  desc: "Pay any contractor via direct bank transfer. Batch payments to multiple freelancers at once. Every payment auto-logged with date, amount, and recipient.",
                },
                {
                  icon: "✅",
                  title: "Payment approvals",
                  desc: "Set up approval workflows before payments go out. Review invoices, approve hours, then release payment. Full audit trail for every dollar.",
                },
                {
                  icon: "🏠",
                  title: "Contractor self-service portal",
                  desc: "Freelancers log in to submit invoices, check payment status, update their bank info, and download their 1099 — without emailing you.",
                },
                {
                  icon: "🧾",
                  title: "Automatic 1099 generation",
                  desc: "At year-end, ZiggyPayroll generates 1099-NEC forms for every contractor you paid $600+. E-file to the IRS via Tax1099 integration.",
                },
                {
                  icon: "📊",
                  title: "Contractor spend reporting",
                  desc: "See exactly what you paid each contractor, by month or by project. Export to CSV for your bookkeeper or accounting software.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency types */}
        <section className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Agencies that use ZiggyPayroll</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Marketing agencies",
                "Design studios",
                "Video production",
                "PR firms",
                "Staffing agencies",
                "Consulting firms",
                "Software agencies",
                "Content agencies",
              ].map(item => (
                <div key={item} className="bg-[#18181b] border border-[#27272a] rounded-xl p-4 text-sm text-[#a1a1aa]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#18181b] border border-[#27272a] rounded-xl p-5 max-w-xl mx-auto">
              <p className="text-[#a1a1aa] text-sm">
                <strong className="text-white">Important:</strong> ZiggyPayroll is for <strong className="text-[#84cc16]">1099 independent contractors only</strong>. If your agency has W-2 employees, use ZiggyPayroll for contractors and a separate payroll tool (like Gusto or ADP) for employees.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Stop chasing W-9s and scrambling at year-end</h2>
            <p className="text-[#a1a1aa] mb-8">$39/mo · Unlimited contractors · 14-day free trial</p>
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
