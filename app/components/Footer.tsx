import Link from "next/link";

const accent = "#84cc16";
const muted = "#a1a1aa";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1f1f1f",
        background: "#0a0a0a",
        padding: "56px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#ff1744" }}>Ziggy</span>
              <span style={{ color: accent }}>Payroll</span>
            </div>
            <p
              style={{
                color: muted,
                fontSize: "0.875rem",
                lineHeight: 1.65,
                maxWidth: "240px",
                marginBottom: "14px",
              }}
            >
              Pay your contractors. Skip the headache. 1099 contractor management
              built for small businesses.
            </p>
            <a
              href="https://ziggybusiness.com"
              style={{
                color: muted,
                fontSize: "0.8rem",
                textDecoration: "none",
                borderBottom: "1px solid #2a2a2a",
                paddingBottom: "2px",
              }}
            >
              Part of the ZiggyTech Business Suite
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Compare
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                { label: "vs Gusto", href: "/vs/gusto" },
                { label: "vs ADP Run", href: "/vs/adp" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Legal */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                color: muted,
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Account
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[
                {
                  label: "Sign In",
                  href: "https://app.ziggypayroll.com/login",
                },
                {
                  label: "Start Free Trial",
                  href: "https://app.ziggypayroll.com/signup",
                },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: muted,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            borderTop: "1px solid #1f1f1f",
            paddingTop: "20px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              color: "#666",
              fontSize: "0.775rem",
              lineHeight: 1.65,
              maxWidth: "800px",
            }}
          >
            ⚠️{" "}
            <strong style={{ color: muted }}>Legal Disclaimer:</strong>{" "}
            ZiggyPayroll is a contractor management platform designed for 1099
            independent contractors only — not W-2 employees. It does not
            process employment taxes, withholding, or benefits. Consult a CPA
            or licensed payroll provider for your specific tax obligations.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: muted, fontSize: "0.8125rem", margin: 0 }}>
            © {new Date().getFullYear()} ZiggyPayroll. All rights reserved.
          </p>
          <p style={{ color: muted, fontSize: "0.8125rem", margin: 0 }}>
            Built for businesses that run on 1099 contractors.
          </p>
        </div>
      </div>
    </footer>
  );
}
