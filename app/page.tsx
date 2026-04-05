'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: '1099 Contractor Management', desc: 'Onboard contractors, collect W-9s, and run payments in minutes. Every contractor gets a portal to update their own info.' },
  { title: 'W-2 Payroll', desc: 'Full W-2 payroll for your employees. Federal and state tax withholding, pay stubs, and year-end forms — all handled.' },
  { title: 'Time Tracking', desc: 'Built-in time tracking tied directly to payroll. Contractors log hours, you approve them, we run the numbers.' },
  { title: 'Expense Management', desc: 'Contractors submit expenses with receipts. You approve or reject with one click. Reimbursements flow through payroll.' },
  { title: 'Contractor Portal', desc: 'Every contractor gets their own portal to view pay history, download 1099s, and update their banking info.' },
  { title: 'Direct Deposit & Tax Export', desc: 'Same-day or next-day direct deposit. Tax forms generated automatically. Export everything your accountant needs.' },
]

const faqs = [
  { q: 'Does ZiggyPayroll handle 1099-NEC filing?', a: 'Yes. We generate and file 1099-NEC forms for all contractors paid through the platform. You review, we file — nothing falls through the cracks at tax time.' },
  { q: 'Can I run both contractors and W-2 employees?', a: 'Yes. ZiggyPayroll handles both 1099 contractors and W-2 employees on the same platform. Starter covers contractors only; Pro covers both.' },
  { q: 'What happens if I have more than 15 contractors?', a: 'On Pro, your first 15 contractors are included. After that, it\'s $5 per additional contractor per month — still far cheaper than per-person pricing models.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
  { q: 'Does ZiggyPayroll handle state tax compliance?', a: 'Yes — for the states your contractors are in. We calculate and remit state taxes automatically. Federal taxes too.' },
  { q: 'Can contractors update their own banking info?', a: 'Yes. Each contractor has their own secure portal to update bank details, download tax forms, and view pay history. No back-and-forth emails.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#84cc16' }}>Ziggy</span><span className="text-white">Payroll</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['vs Gusto', '/compare/gusto'], ['vs ADP', '/compare/adp']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggypayroll.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#84cc16] text-black rounded-xl font-semibold text-sm hover:bg-[#84cc16]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#84cc16]/8 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/20 text-[#84cc16] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyPayroll — Contractor & Payroll Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Payroll for <span style={{ color: '#84cc16' }}>real small businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            Gusto charges $49/mo base plus $6 per contractor. For a 10-contractor team that&apos;s $109/month. We cover 15 contractors for $39/mo &mdash; flat, predictable, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggypayroll.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#84cc16] text-black rounded-xl font-semibold text-lg hover:bg-[#84cc16]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] rounded-xl font-semibold text-lg hover:bg-[#84cc16]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$39/mo for 15 contractors', 'No per-contractor surprise fees', '1099 + W-2 support', 'Support from the team that built it'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#84cc16]/10 border border-[#84cc16]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#84cc16]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyPayroll in action</p>
                <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#84cc16] text-black rounded-lg text-sm font-medium hover:bg-[#84cc16]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything payroll. Nothing extra.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">Run contractors, full-time employees, and everything in between — without the enterprise price tag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#84cc16]/30 hover:shadow-[0_0_30px_rgba(132,204,22,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#84cc16]/10 border border-[#84cc16]/20 flex items-center justify-center mb-5 group-hover:bg-[#84cc16]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#84cc16]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] rounded-xl font-semibold hover:bg-[#84cc16]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#84cc16]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#84cc16]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because Gusto was robbing us</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>We were paying Gusto $109/month for 10 contractors on our team. $49 base plus $6 per person. Every month we watched that number go up as we hired more help.</p>
            <p>We built a flat-rate alternative that covers 15 contractors for $39/month. No per-person fees. No surprise charges when your team grows. Just payroll that works.</p>
            <p className="text-white font-medium">That&apos;s ZiggyPayroll. Built because the alternative was highway robbery.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$29/mo', label: 'Starting price', color: '#84cc16' },
              { value: '15 contractors', label: 'On Pro plan', color: '#0ea5e9' },
              { value: 'Flat rate', label: 'No per-person fees', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#84cc16]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">Gusto charges $109/mo for 10 contractors. We cover 15 contractors for $39/mo. No per-contractor fees. No surprises.</p>

          {/* Competitor comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { name: 'Gusto', price: '$109/mo for 10 contractors', note: '$49 base + $6/contractor' },
              { name: 'ADP', price: '$80+/mo', note: 'Plus per-employee fees' },
            ].map((comp) => (
              <div key={comp.name} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-left opacity-60">
                <p className="text-sm font-semibold text-[#b3b3b3] mb-1">{comp.name}</p>
                <p className="text-xl font-bold text-white line-through decoration-red-500">{comp.price}</p>
                <p className="text-xs text-[#b3b3b3] mt-1">{comp.note}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$29</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 5 contractors · +$6/additional</p>
              <Link href="https://app.ziggypayroll.com/signup" className="block w-full text-center px-6 py-3 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] rounded-xl font-semibold hover:bg-[#84cc16]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#84cc16]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(132,204,22,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#84cc16] text-black text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$39</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Up to 15 contractors · +$5/additional</p>
              <Link href="https://app.ziggypayroll.com/signup" className="block w-full text-center px-6 py-3 bg-[#84cc16] text-black rounded-xl font-semibold hover:bg-[#84cc16]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#84cc16] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#84cc16]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#84cc16] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#84cc16] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="absolute inset-0 bg-[#84cc16]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to simplify<br /><span style={{ color: '#84cc16' }}>contractor payments?</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">Flat rate. No surprises.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggypayroll.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#84cc16] text-black rounded-xl font-bold text-xl hover:bg-[#84cc16]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(132,204,22,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#84cc16]/10 border border-[#84cc16]/30 text-[#84cc16] rounded-xl font-bold text-xl hover:bg-[#84cc16]/20 transition-all">View Pricing</Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60 mt-6">14-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#84cc16' }}>Ziggy</span><span className="text-white">Payroll</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">Flat-rate payroll built for real small businesses.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs Gusto', '/compare/gusto'], ['vs ADP', '/compare/adp'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
