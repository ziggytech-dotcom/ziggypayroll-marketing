'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Does ZiggyPayroll handle both contractors and employees?`, a: `Yes. Starter is focused on 1099 contractors. Pro adds W-2 payroll for employees, including automatic tax calculations, withholding, and year-end W-2 forms.` },
  { q: `Are 1099 forms included?`, a: `Yes. ZiggyPayroll generates 1099-NEC forms for all contractors at year-end, included in your subscription. Electronic filing with the IRS is also included on Pro.` },
  { q: `How does direct deposit work?`, a: `Contractors and employees provide their bank account information through the secure contractor portal. ZiggyPayroll processes ACH transfers. Standard direct deposit is next-day.` },
  { q: `Is there a limit on the number of contractors?`, a: `Starter covers up to 5 contractors at $29/mo. Pro covers up to 15 at $39/mo. Add more at $6/contractor/mo (Starter) or $5/contractor/mo (Pro).` },
  { q: `Does ZiggyPayroll file taxes?`, a: `Pro plan includes automated state and federal tax filing, including 941/944 quarterly filings, state withholding deposits, and year-end W-2/1099 filing.` },
  { q: `Can contractors view their own pay history?`, a: `Yes. Every contractor has access to a self-service portal to view pay history, download 1099 forms, update banking info, and submit their W-9.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyPayroll.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#84cc16]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#84cc16] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#84cc16]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#84cc16] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
