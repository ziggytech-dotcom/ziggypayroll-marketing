import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Features — 1099 Contractor Management Tools",
  description:
    "Everything you need to manage 1099 independent contractors: W-9 collection, ACH payments, 1099-NEC e-filing, contractor portal, time tracking, and payment approval workflows.",
  alternates: { canonical: "https://ziggypayroll.com/features" },
};

const featureSections = [
  {
    id: "contractor-management",
    icon: "👥",
    color: "#84cc16",
    title: "Contractor Management",
    tagline: "Onboard contractors in minutes, not days",
    desc: "ZiggyPayroll is built exclusively for 1099 independent contractors — not W-2 employees. Every tool is designed around the contractor relationship.",
    features: [
      {
        title: "Digital W-9 Collection",
        desc: "Invite contractors via email. They fill out their W-9 digitally — you get a stored, verified copy. No chasing paperwork, no scanning, no filing cabinets.",
      },
      {
        title: "Contractor Profiles",
        desc: "Every contractor has a full profile: contact info, tax ID, payment history, documents, and notes. Everything in one place.",
      },
      {
        title: "Contractor Self-Service Portal",
        desc: "Contractors get their own login. They can view payment history, update direct deposit info, download their 1099s, and submit hours — without emailing you.",
      },
      {
        title: "Onboarding Checklists",
        desc: "Custom onboarding flows for each contractor type. Make sure you collect everything you need before the first payment.",
      },
    ],
  },
  {
    id: "payments",
    icon: "💸",
    color: "#84cc16",
    title: "Payments",
    tagline: "Pay contractors fast, accurately, and on record",
    desc: "ACH bank transfers, batch payments, and full audit trails. No more Venmo, no more Zelle, no more spreadsheet tracking.",
    features: [
      {
        title: "ACH Direct Payments",
        desc: "Send money directly to any US bank account. Standard ACH settles in 1-3 business days. Every payment is logged automatically.",
      },
      {
        title: "Batch Payments",
        desc: "Pay multiple contractors at once. Review the batch, approve it, and ZiggyPayroll sends everything in one shot.",
      },
      {
        title: "Payment Approval Workflow",
        desc: "Set up approval gates before payments go out. One-person approval or multi-step — you decide. Full audit trail for every payment.",
      },
      {
        title: "Payment History & Records",
        desc: "Every payment is recorded with date, amount, contractor, and payment method. Export to CSV any time for your records or accountant.",
      },
    ],
  },
  {
    id: "tax-compliance",
    icon: "🧾",
    color: "#84cc16",
    title: "Tax & Compliance",
    tagline: "1099s handled. Year-end sorted.",
    desc: "ZiggyPayroll tracks all contractor payments throughout the year and auto-generates 1099-NEC forms come January. E-file to the IRS with one click via Tax1099.",
    features: [
      {
        title: "1099-NEC Generation",
        desc: "At year-end, ZiggyPayroll automatically identifies contractors you paid $600+ and generates their 1099-NEC forms. No manual math.",
      },
      {
        title: "E-Filing via Tax1099",
        desc: "File 1099s directly with the IRS via our Tax1099 integration. No paper forms, no manual submission. Email copies go straight to contractors.",
      },
      {
        title: "W-9 Storage & Audit",
        desc: "Every W-9 is stored securely for 7 years. Audit-ready any time. TIN verification included.",
      },
      {
        title: "State Filing Support",
        desc: "State 1099 filing requirements vary. ZiggyPayroll handles state-level submissions where required.",
      },
    ],
  },
  {
    id: "reporting",
    icon: "📊",
    color: "#84cc16",
    title: "Reporting",
    tagline: "Know exactly where your contractor spend goes",
    desc: "Real-time dashboards, payment summaries, and exportable reports. Get a clear picture of your contractor workforce at any time.",
    features: [
      {
        title: "Contractor Spend Dashboard",
        desc: "See total payments by contractor, by month, and by project. Spot your highest-paid contractors at a glance.",
      },
      {
        title: "Payment History Export",
        desc: "Export full payment history to CSV for your accountant, bookkeeper, or internal records. Filter by date range, contractor, or status.",
      },
      {
        title: "Year-End Summary Reports",
        desc: "Generate year-end payment summaries for every contractor. Share directly from ZiggyPayroll or export as PDF.",
      },
      {
        title: "Audit Trail",
        desc: "Every action logged: who approved what, when payments were sent, when forms were filed. Full accountability for your records.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#27272a] py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block bg-[#84cc16]/10 border border-[#84cc16]/20 rounded-full px-4 py-1.5 text-sm text-[#84cc16] font-medium mb-6">
              Features
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Built for 1099 contractors. Only.
            </h1>
            <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              No W-2 payroll. No benefits. No HR tools. Just everything you need to manage, pay, and file for your 1099 independent contractors.
            </p>
          </div>
        </section>

        {/* Feature Sections */}
        {featureSections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className={`border-b border-[#27272a] py-16 md:py-20 ${i % 2 === 1 ? "bg-[#18181b]/30" : ""}`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Left */}
                <div className="md:w-1/3">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{section.title}</h2>
                  <p className="text-[#84cc16] font-semibold mb-3">{section.tagline}</p>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{section.desc}</p>
                </div>
                {/* Right */}
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.features.map((f) => (
                    <div key={f.title} className="bg-[#18181b] border border-[#27272a] rounded-xl p-5">
                      <h3 className="font-bold mb-2">{f.title}</h3>
                      <p className="text-[#a1a1aa] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">See it for yourself</h2>
            <p className="text-[#a1a1aa] mb-8">14-day free trial. No credit card required. Set up in 5 minutes.</p>
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
