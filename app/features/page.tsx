import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `1099 Contractor Management`, desc: `Manage all your 1099 contractors in one place. Track payments and generate year-end 1099-NEC forms.`, bullets: [`Contractor onboarding portal`, `Payment history per contractor`, `Year-end 1099-NEC generation`, `Electronic 1099 filing`, `W-9 collection and storage`, `Contractor portal access`] },
  { title: `W-2 Payroll`, desc: `Run payroll for W-2 employees with automatic tax calculations, withholding, and direct deposit.`, bullets: [`Automatic tax calculations`, `Federal and state withholding`, `Direct deposit`, `Pay stub generation`, `Year-end W-2 forms`, `New hire reporting`] },
  { title: `Time Tracking`, desc: `Built-in time tracking for hourly contractors and employees. Approve timesheets and run payroll in two clicks.`, bullets: [`Web and mobile time entry`, `Project-based tracking`, `Manager approval workflows`, `Timesheet export`, `Overtime calculations`, `Integration with payroll`] },
  { title: `Expense Management`, desc: `Contractors submit expenses, you approve and reimburse in the next payroll run.`, bullets: [`Mobile receipt capture`, `Expense categories`, `Manager approval flow`, `Reimbursement in payroll`, `Expense reports export`, `Policy limits enforcement`] },
  { title: `Contractor Portal`, desc: `Every contractor gets their own portal to view pay history, download 1099 forms, and update banking info.`, bullets: [`Pay stub access`, `1099 document download`, `W-9 submission`, `Banking info update`, `Payment history`, `Mobile-friendly portal`] },
  { title: `Direct Deposit`, desc: `Pay contractors and employees via ACH direct deposit. Same-day or next-day funding available.`, bullets: [`ACH direct deposit`, `Same-day funding option`, `Next-day funding standard`, `No per-transaction fees`, `Multiple bank accounts`, `International support (coming soon)`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#84cc16]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#84cc16] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyPayroll can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#84cc16] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#84cc16]/20 border border-[#84cc16]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#84cc16]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggypayroll.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#84cc16] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
