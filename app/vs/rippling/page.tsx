import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZiggyPayroll vs Rippling — Same power. Half the price.",
  description: "Rippling starts at $8+/user/mo. ZiggyPayroll gives you the same core features for $39/mo — plus it's part of the ZiggyTech Business Suite.",
}

const ACCENT = "#84cc16"
const SIGNUP = "https://app.ziggypayroll.com/signup"

const rows: [string, string, string][] = [
          ["Starting Price", "$39/mo flat", "$8+/user/mo + base fee"],
          ["Full Payroll", "✅", "✅"],
          ["Direct Deposit", "✅", "✅"],
          ["Tax Filing", "✅ Included", "✅"],
          ["W-2 / 1099s", "✅ Included", "✅"],
          ["Employee + Contractor", "✅", "✅"],
          ["Time Tracking", "✅ Built-in", "✅ (add-on cost)"],
          ["HR & IT Management", "❌ Use ZiggyHR", "✅ All-in-one"],
          ["Device Management", "❌", "✅"],
          ["Per-seat pricing", "❌ Flat rate", "✅ Adds up fast"],
          ["Complexity", "Simple — built for SMB", "Complex — built for enterprise"],
          ["Part of 10-app suite", "✅ $179/mo all apps", "❌"],
]

const bullets = [
            "Rippling charges $8+/user/mo plus a base fee — a 10-person team can cost $200+/mo minimum",
            "Rippling is powerful but built for mid-market and enterprise. ZiggyPayroll is built for small business.",
            "ZiggyPayroll has no per-seat pricing — one flat fee no matter how many employees you pay",
            "ZiggyPayroll pairs with ZiggyHR for HR management — purpose-built tools that work together",
            "ZiggyPayroll is part of the ZiggyTech Business Suite — 9 more apps for $179/mo total",
            "Setup takes minutes, not days — no Rippling onboarding call required",
]

export default function VsRippling() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>Payroll</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"], ["Sign In", `https://app.ziggypayroll.com/login`]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: `rgba(132,204,22,0.1)`, border: `1px solid rgba(132,204,22,0.25)`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600, marginBottom: 24,
        }}>
          Direct Comparison · Updated April 2026
        </div>
        <h1 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20 }}>
          ZiggyPayroll vs Rippling
        </h1>
        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 16, maxWidth: 580, margin: "0 auto 16px" }}>
          Same power. Half the price. Plus you get 9 other apps in the ZiggyTech Business Suite.
        </p>
        <p style={{ fontSize: 15, color: "#555", marginBottom: 36 }}>
          Rippling: <strong style={{ color: "#fff" }}>$8+/user/mo</strong> · ZiggyPayroll: <strong style={{ color: ACCENT }}>$39/mo</strong>
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "14px 28px", borderRadius: 10, fontSize: 16, fontWeight: 700,
        }}>
          Start Free Trial — No credit card required
        </a>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 32, textAlign: "center" }}>Feature Comparison</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(132,204,22,0.05)` }}>ZiggyPayroll ✅</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Rippling</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, ziggy, comp], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "13px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "13px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(132,204,22,0.03)`, fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "13px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#333" }}>Pricing verified from Rippling public pricing page · April 2026</p>
      </section>

      {/* Why ZiggyX wins */}
      <section style={{ padding: "60px 24px 80px", background: "#080808", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 32, textAlign: "center" }}>
            Why teams switch to ZiggyPayroll
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {bullets.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px", background: "#111", border: "1px solid #1f1f1f", borderRadius: 12 }}>
                <span style={{ color: ACCENT, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 15, color: "#ccc", lineHeight: 1.6 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "80px 24px", maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 8 }}>Simple, transparent pricing</h2>
        <p style={{ fontSize: 16, color: "#666", marginBottom: 40 }}>No per-seat gouging. No tier traps. One price, everything included.</p>
        <div style={{ background: "#111", border: `2px solid #84cc16`, borderRadius: 20, padding: "36px", marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>ZiggyPayroll</div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 24 }}>
            <span style={{ fontSize: 60, fontWeight: 700, color: "#fff", letterSpacing: "-2px" }}>$39</span>
            <span style={{ fontSize: 18, color: "#555" }}>/mo</span>
          </div>
          <a href={SIGNUP} style={{
            display: "block", background: ACCENT, color: "#fff", textDecoration: "none",
            padding: "15px", borderRadius: 10, fontSize: 16, fontWeight: 700,
          }}>
            Start Free Trial — 14 days free
          </a>
        </div>
        <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 12, padding: "20px 24px" }}>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
            🏢 Get ZiggyPayroll + 9 other apps in the 
            <a href="https://ziggybusiness.com" style={{ color: ACCENT, textDecoration: "none" }}>ZiggyTech Business Suite</a> 
            for <strong style={{ color: "#fff" }}>$179/mo flat</strong>. That's all 10 apps for less than Rippling costs alone.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "#080808", borderTop: "1px solid #1f1f1f" }}>
        <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
          Ready to switch from Rippling?
        </h2>
        <p style={{ fontSize: 17, color: "#555", marginBottom: 36 }}>14 days free. No credit card. Cancel anytime.</p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "16px 36px", borderRadius: 12, fontSize: 17, fontWeight: 700,
        }}>
          Start Free Trial →
        </a>
      </section>

      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
          {[["Home", "/"], ["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"]].map(([l, h]) => (
            <a key={l} href={h} style={{ color: "#555", fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyPayroll. All rights reserved.</p>
      </footer>
    </>
  )
}
