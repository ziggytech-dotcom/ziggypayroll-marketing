import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0f0a0a] mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-0 mb-3">
              <span className="text-lg font-bold" style={{ color: "#ff1744" }}>Ziggy</span>
              <span className="text-lg font-bold" style={{ color: "#84cc16" }}>Payroll</span>
            </Link>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              1099 contractor management built for businesses that skip the W-2 overhead.
            </p>
            <p className="text-[#84cc16] font-bold text-sm mt-2">$39/mo · No contracts</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><Link href="/pricing#faq" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Compare</h4>
            <ul className="space-y-2">
              <li><Link href="/vs/gusto" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">vs Gusto</Link></li>
              <li><Link href="/vs/adp" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">vs ADP Run</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/contractors" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">Construction</Link></li>
              <li><Link href="/agencies" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">Agencies</Link></li>
              <li><Link href="/gig-economy" className="text-[#a1a1aa] hover:text-white text-sm transition-colors">Gig Economy</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#27272a] pt-6 mb-6">
          <p className="text-[#71717a] text-xs leading-relaxed max-w-3xl">
            ⚠️ <strong className="text-[#a1a1aa]">Legal Disclaimer:</strong> ZiggyPayroll is not a licensed payroll provider. ZiggyPayroll is a contractor management platform designed for 1099 independent contractors only — not W-2 employees. It does not process employment taxes, withholding, or benefits. Consult a CPA or licensed payroll provider for your specific tax obligations.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#71717a] text-xs">
          <p>© {new Date().getFullYear()} ZiggyPayroll. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#a1a1aa] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#a1a1aa] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
