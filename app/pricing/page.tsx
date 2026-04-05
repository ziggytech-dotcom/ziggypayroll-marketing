'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const starterFeatures = [
  `Up to 5 contractors`,
  `1099 contractor management`,
  `Basic time tracking`,
  `Direct deposit`,
  `Contractor portal`,
  `1099 form generation`,
  `Email support`,
]
const proFeatures = [
  `Everything in Starter`,
  `Up to 15 contractors`,
  `W-2 payroll`,
  `Expense management`,
  `Tax filing (state + federal)`,
  `Approval workflows`,
  `Advanced reporting`,
  `Priority support`,
  `API access`,
]
const compRows = [
  { feature: `Contractors included`, starter: `Up to 5`, pro: `Up to 15` },
  { feature: `Additional contractors`, starter: `$6/contractor/mo`, pro: `$5/contractor/mo` },
  { feature: `1099 management`, starter: true, pro: true },
  { feature: `Direct deposit`, starter: true, pro: true },
  { feature: `Contractor portal`, starter: true, pro: true },
  { feature: `Time tracking`, starter: true, pro: true },
  { feature: `W-2 payroll`, starter: false, pro: true },
  { feature: `Expense management`, starter: false, pro: true },
  { feature: `Tax filing`, starter: false, pro: true },
  { feature: `Advanced reporting`, starter: false, pro: true },
  { feature: `API access`, starter: false, pro: true },
  { feature: `Priority support`, starter: false, pro: true },
]
const faqs = [
  { q: `Does ZiggyPayroll handle both contractors and employees?`, a: `Yes. Starter is focused on 1099 contractors. Pro adds W-2 payroll for employees, including automatic tax calculations, withholding, and year-end W-2 forms.` },
  { q: `Are 1099 forms included?`, a: `Yes. ZiggyPayroll generates 1099-NEC forms for all contractors at year-end, included in your subscription. Electronic filing with the IRS is also included on Pro.` },
  { q: `How does direct deposit work?`, a: `Contractors and employees provide their bank account information through the secure contractor portal. ZiggyPayroll processes ACH transfers. Standard direct deposit is next-day.` },
  { q: `Is there a limit on the number of contractors?`, a: `Starter covers up to 5 contractors at $29/mo. Pro covers up to 15 at $39/mo. Add more at $6/contractor/mo (Starter) or $5/contractor/mo (Pro).` },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Simple, honest pricing</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">No seat traps. No hidden fees. Just a price that works.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$29</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 5 contractors · +$6/contractor</p>
              <Link href="https://app.ziggypayroll.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] rounded-xl font-semibold hover:bg-[#84cc16]/20 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{starterFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
            <div className="bg-[#111111] border-2 border-[#84cc16]/40 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#84cc16] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$39</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 15 contractors · +$5/contractor</p>
              <Link href="https://app.ziggypayroll.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#84cc16] text-white rounded-xl font-semibold hover:opacity-90 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{proFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Feature comparison</h2>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-white text-center">Starter</div>
              <div className="p-4 text-sm font-semibold text-[#84cc16] text-center">Pro</div>
            </div>
            {compRows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0 hover:bg-[#151515]">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.starter === 'boolean' ? (r.starter ? <svg className="w-5 h-5 text-[#84cc16] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#b3b3b3]">{r.starter}</span>}
                </div>
                <div className="p-4 text-center">
                  {typeof r.pro === 'boolean' ? (r.pro ? <svg className="w-5 h-5 text-[#84cc16] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#84cc16] font-medium">{r.pro}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 mb-8 text-center">
            <p className="text-[#b3b3b3] text-sm mb-2">vs the competition</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div><p className="text-[#b3b3b3] text-sm">Gusto</p><p className="text-2xl font-bold text-white">$49<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#84cc16] text-sm font-medium">ZiggyPayroll</p><p className="text-2xl font-bold text-[#84cc16]">$29<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#b3b3b3] text-sm">ADP</p><p className="text-2xl font-bold text-white">$80<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#84cc16] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-[#b3b3b3] leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Start your free trial today</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14 days free. No credit card required.</p>
          <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#84cc16] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
