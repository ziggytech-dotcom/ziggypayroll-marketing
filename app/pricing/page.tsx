import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing — $39/mo · 1099 Contractor Management",
  description:
    "ZiggyPayroll is $39/mo for unlimited 1099 contractors. No per-contractor fees. No setup costs. Compare to Gusto at $79+/mo.",
  alternates: { canonical: "https://ziggypayroll.com/pricing" },
};

const faq = [
  {
    q: "Is ZiggyPayroll for W-2 employees or 1099 contractors?",
    a: "ZiggyPayroll is exclusively for 1099 independent contractors. We do not support W-2 employee payroll, payroll tax filing, benefits administration, or any W-2-related compliance. If you need to run payroll for employees, look at Gusto or ADP. If you work with 1099 contractors only, ZiggyPayroll is built for you.",
  },
  {
    q: "How does the Tax1099 integration work?",
    a: "At year-end, ZiggyPayroll automatically identifies contractors you paid $600 or more during the year and generates their 1099-NEC forms. You review them, then e-file directly to the IRS with one click via our Tax1099 integration. Contractors receive email copies automatically. The e-filing fee is included in your $39/mo subscription.",
  },
  {
    q: "How long does ACH payment take?",
    a: "Standard ACH transfers settle in 1-3 business days. Payments initiated before 3pm ET on weekdays typically settle the next business day. We use bank-grade ACH rails — the same infrastructure used by major banks.",
  },
  {
    q: "Is there a limit on how many contractors I can have?",
    a: "No. $39/mo includes unlimited contractors. Whether you have 2 or 200 contractors, the price stays the same.",
  },
  {
    q: "What happens after my free trial?",
    a: "After your 14-day free trial, you'll be charged $39/mo. You can cancel any time — no contracts, no cancellation fees.",
  },
  {
    q: "Do contractors need to pay anything?",
    a: "No. Contractors use the self-service portal for free. Only the business account pays the $39/mo subscription.",
  },
  {
    q: "Is ZiggyPayroll a licensed payroll provider?",
    a: "No. ZiggyPayroll is a contractor management platform — not a licensed payroll provider. We help you manage and pay 1099 contractors and generate 1099-NEC forms. We do not file employment taxes, withhold income tax, or process W-2 payroll. Consult a CPA for your specific tax obligations.",
  },
  {
    q: "Can I use ZiggyPayroll with my existing accounting software?",
    a: "Yes. ZiggyPayroll exports payment data to CSV, which imports into QuickBooks, Xero, FreshBooks, and most other accounting tools. Native integrations coming soon.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              One price. No surprises.
            </h1>
            <p className="text-[#a1a1aa] text-lg">
              Gusto charges $79+/mo for tools built for W-2 employees. We charge $39 for tools built for 1099 contractors.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="border-b border-[#27272a] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Main Plan */}
              <div className="bg-[#18181b] border-2 border-[#84cc16]/40 rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#84cc16] text-black text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-1">ZiggyPayroll</h2>
                <p className="text-[#a1a1aa] text-sm mb-6">For businesses with 1099 contractors</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold text-[#84cc16]">$39</span>
                  <span className="text-[#a1a1aa] pb-1">/month</span>
                </div>
                <ul className="space-y-3 text-sm mb-8">
                  {[
                    "Unlimited 1099 contractors",
                    "ACH direct payments",
                    "W-9 collection & storage",
                    "1099-NEC generation",
                    "1099 e-filing via Tax1099",
                    "Contractor self-service portal",
                    "Time tracking",
                    "Payment approval workflow",
                    "Payment history & reporting",
                    "CSV exports",
                    "Email support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#a1a1aa]">
                      <span className="text-[#84cc16] flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="block w-full bg-[#84cc16] text-black font-bold py-3 rounded-xl hover:bg-[#65a30d] transition-colors text-center"
                >
                  Start 14-day free trial
                </Link>
                <p className="text-[#71717a] text-xs text-center mt-3">No credit card required</p>
              </div>

              {/* Bundle */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-1">ZiggyPayroll + Bundle</h2>
                <p className="text-[#a1a1aa] text-sm mb-6">Add invoicing, scheduling, and more</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">$79</span>
                  <span className="text-[#a1a1aa] pb-1">/month</span>
                </div>
                <ul className="space-y-3 text-sm mb-8">
                  {[
                    "Everything in ZiggyPayroll",
                    "+ ZiggyInvoice (send invoices)",
                    "+ ZiggySchedule (job scheduling)",
                    "+ ZiggyDocs (contracts & e-sign)",
                    "Priority support",
                    "Dedicated onboarding call",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#a1a1aa]">
                      <span className="text-[#84cc16] flex-shrink-0">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="block w-full border border-[#27272a] text-white font-bold py-3 rounded-xl hover:bg-[#27272a] transition-colors text-center"
                >
                  Get the bundle
                </Link>
                <p className="text-[#71717a] text-xs text-center mt-3">Same 14-day free trial</p>
              </div>
            </div>

            {/* Compare callout */}
            <div className="mt-8 text-center">
              <p className="text-[#a1a1aa] text-sm">
                Gusto Contractor Plan: $6/contractor/mo + $35 base = $65+/mo for just 5 contractors.{" "}
                <Link href="/vs/gusto" className="text-[#84cc16] hover:underline">See full comparison →</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-[#27272a] py-16 md:py-20 bg-[#18181b]/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-[#18181b] border border-[#27272a] rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">{item.q}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Start managing contractors the right way</h2>
            <p className="text-[#a1a1aa] mb-8">14-day free trial · No credit card · Setup in 5 minutes</p>
            <Link
              href="#"
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
