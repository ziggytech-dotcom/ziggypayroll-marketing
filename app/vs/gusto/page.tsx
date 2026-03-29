import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "ZiggyPayroll vs Gusto — Which Is Right for 1099 Contractors?",
  description:
    "ZiggyPayroll vs Gusto: full comparison for businesses with 1099 contractors. ZiggyPayroll at $39/mo vs Gusto at $109/mo for 10 contractors. See which wins.",
  keywords: [
    "ZiggyPayroll vs Gusto",
    "Gusto alternative for 1099",
    "cheaper than Gusto",
    "1099 contractor software vs Gusto",
    "Gusto for contractors",
  ],
  openGraph: {
    title: "ZiggyPayroll vs Gusto — $39 vs $109/mo for 10 contractors",
    description:
      "Gusto is built for W-2 employees. If you just need to pay contractors and handle 1099s, ZiggyPayroll is $39/mo flat. Gusto charges $49 base + $6/contractor.",
    url: "https://ziggypayroll.com/vs/gusto",
  },
};

const accent = "#84cc16";
const bg = "#0a0a0a";
const cardBg = "#111111";
const border = "1px solid #1f1f1f";
const radius = "14px";
const muted = "#a1a1aa";

export default function VsGustoPage() {
  return (
    <>
      <Script
        id="json-ld-vs-gusto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ZiggyPayroll",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "39",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          style={{
            background: bg,
            padding: "88px 24px 72px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(132,204,22,0.09) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: cardBg,
                border,
                borderRadius: "50px",
                padding: "6px 16px",
                fontSize: "0.8125rem",
                color: muted,
                marginBottom: "24px",
              }}
            >
              ZiggyPayroll vs Gusto — 2024 Comparison
            </div>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: accent }}>ZiggyPayroll</span> vs Gusto
              <br />
              Which is right for 1099 contractors?
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: muted,
                maxWidth: "640px",
                margin: "0 auto 40px",
                lineHeight: 1.65,
              }}
            >
              Gusto is a full HR platform. If you just need to pay contractors
              and handle 1099s, you&apos;re paying $49 base + $6/contractor for
              features you&apos;ll never use. ZiggyPayroll is built for exactly
              this —{" "}
              <strong style={{ color: "#fff" }}>
                $39/mo flat for up to 10 contractors.
              </strong>
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="https://app.ziggypayroll.com/signup"
                style={{
                  background: accent,
                  color: "#0a0a0a",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Try ZiggyPayroll Free
              </Link>
              <Link
                href="#comparison"
                style={{
                  background: "transparent",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1px solid #2a2a2a",
                }}
              >
                See Full Comparison
              </Link>
            </div>
          </div>
        </section>

        {/* ── Price Reality Check ──────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "72px 24px",
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 800,
                marginBottom: "48px",
              }}
            >
              What you&apos;re actually paying Gusto
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: cardBg,
                  border: `2px solid ${accent}`,
                  borderRadius: radius,
                  padding: "36px 28px",
                  textAlign: "center",
                  boxShadow: "0 0 40px rgba(132,204,22,0.1)",
                }}
              >
                <div
                  style={{
                    color: accent,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}
                >
                  ZIGGYPAYROLL
                </div>
                <div
                  style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1 }}
                >
                  $39
                </div>
                <div
                  style={{
                    color: muted,
                    fontSize: "0.9rem",
                    marginTop: "6px",
                  }}
                >
                  /mo for up to 10 contractors
                </div>
                <div
                  style={{
                    color: accent,
                    fontSize: "0.875rem",
                    marginTop: "16px",
                    fontWeight: 600,
                  }}
                >
                  Flat rate. No per-contractor fees.
                </div>
              </div>
              <div
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "36px 28px",
                  textAlign: "center",
                  opacity: 0.75,
                }}
              >
                <div
                  style={{
                    color: muted,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}
                >
                  GUSTO (10 CONTRACTORS)
                </div>
                <div
                  style={{
                    fontSize: "4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: muted,
                  }}
                >
                  $109
                </div>
                <div
                  style={{
                    color: muted,
                    fontSize: "0.9rem",
                    marginTop: "6px",
                  }}
                >
                  /mo ($49 base + $6 × 10 contractors)
                </div>
                <div
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    marginTop: "16px",
                  }}
                >
                  Mostly W-2 features you don&apos;t need
                </div>
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                color: muted,
                marginTop: "32px",
                fontSize: "0.9375rem",
              }}
            >
              That&apos;s{" "}
              <strong style={{ color: "#fff" }}>$840/year saved</strong> just
              by switching from Gusto to ZiggyPayroll for a 10-contractor
              business.
            </p>
          </div>
        </section>

        {/* ── Why Gusto Is Overkill ────────────────────────────────── */}
        <section style={{ background: bg, padding: "72px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 800,
                marginBottom: "48px",
              }}
            >
              What you&apos;re paying Gusto for (but don&apos;t need)
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: "🏛️",
                  title: "Payroll tax filing",
                  desc: "Gusto files federal and state payroll taxes for W-2 employees. 1099 contractors pay their own taxes — you never needed this feature.",
                },
                {
                  icon: "🏥",
                  title: "Benefits administration",
                  desc: "Health insurance, 401(k), commuter benefits — all for employees. Your 1099 contractors handle their own benefits.",
                },
                {
                  icon: "📊",
                  title: "HR compliance tools",
                  desc: "Offer letters, performance reviews, org charts — built for companies with full-time staff, not for contractor-first businesses.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "28px 24px",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "10px",
                      textDecoration: "line-through",
                      color: muted,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full Comparison Table ────────────────────────────────── */}
        <section
          id="comparison"
          style={{
            background: "#0d0d0d",
            padding: "88px 24px",
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "920px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "48px",
              }}
            >
              Feature-by-feature comparison
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        color: muted,
                        fontWeight: 600,
                      }}
                    >
                      Feature
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 16px",
                        color: accent,
                        fontWeight: 700,
                      }}
                    >
                      ZiggyPayroll
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "14px 16px",
                        color: muted,
                        fontWeight: 600,
                      }}
                    >
                      Gusto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly cost (10 contractors)", "$39/mo flat", "$109/mo ($49 + $60)"],
                    ["Built exclusively for 1099 contractors", "✅ Purpose-built", "❌ W-2 first"],
                    ["Contractor portal", "✅", "✅"],
                    ["Time tracking", "✅", "✅"],
                    ["Payment approval workflow", "✅ Built-in", "⚠️ Limited"],
                    ["1099-NEC generation", "✅", "✅"],
                    ["W-9 collection & storage", "✅ Automated", "✅"],
                    ["Contractor onboarding (W-9 + bank + rates)", "✅ All-in-one", "⚠️ Partial"],
                    ["Multi-contractor dashboard", "✅", "✅"],
                    ["ACH direct payments", "🔜 Coming Soon", "✅"],
                    ["W-2 payroll tax filing", "❌ Not needed", "✅ (You don't need this)"],
                    ["Benefits administration", "❌ Not needed", "✅ (You don't need this)"],
                    ["HR compliance tools", "❌ Not needed", "✅ (You don't need this)"],
                    ["Self-serve setup time", "< 10 minutes", "30–60 minutes"],
                  ].map(([feature, us, them], i) => (
                    <tr
                      key={feature}
                      style={{
                        borderBottom: "1px solid #1a1a1a",
                        background:
                          i % 2 === 0
                            ? "transparent"
                            : "rgba(17,17,17,0.6)",
                      }}
                    >
                      <td style={{ padding: "12px 16px" }}>{feature}</td>
                      <td
                        style={{
                          padding: "12px 16px",
                          textAlign: "center",
                          color: accent,
                          fontWeight: 600,
                        }}
                      >
                        {us}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          textAlign: "center",
                          color: muted,
                        }}
                      >
                        {them}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Bottom Line ──────────────────────────────────────────── */}
        <section
          style={{ background: bg, padding: "72px 24px" }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div
              style={{
                background: cardBg,
                border: `2px solid ${accent}`,
                borderRadius: radius,
                padding: "40px 36px",
                textAlign: "center",
                boxShadow: "0 0 48px rgba(132,204,22,0.1)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🏆</div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  marginBottom: "20px",
                  lineHeight: 1.25,
                }}
              >
                The bottom line
              </h2>
              <p
                style={{
                  color: muted,
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Gusto is a full HR platform. If you just need to pay contractors
                and handle 1099s, you&apos;re paying $49 base + $6/contractor for
                features you&apos;ll never use. ZiggyPayroll is built for exactly
                this —{" "}
                <strong style={{ color: "#fff" }}>
                  $39/mo flat for up to 10 contractors.
                </strong>
              </p>
              <Link
                href="https://app.ziggypayroll.com/signup"
                style={{
                  display: "inline-block",
                  background: accent,
                  color: "#0a0a0a",
                  padding: "14px 36px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                Switch to ZiggyPayroll — Free for 14 Days
              </Link>
              <div
                style={{
                  color: muted,
                  fontSize: "0.8125rem",
                  marginTop: "12px",
                }}
              >
                No credit card required. Cancel anytime.
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "80px 24px",
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 800,
                marginBottom: "48px",
              }}
            >
              Common questions about switching
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                {
                  q: "Can I migrate from Gusto to ZiggyPayroll?",
                  a: "Yes. Export your contractor list from Gusto, invite them to ZiggyPayroll, and they complete onboarding themselves. Existing payment records in Gusto can stay there for historical reference.",
                },
                {
                  q: "Does ZiggyPayroll support the same 1099 features as Gusto?",
                  a: "Yes — contractor portals, W-9 collection, payment tracking, and 1099-NEC generation are all included. The difference is we don't include W-2 payroll features that don't apply to contractor-only businesses.",
                },
                {
                  q: "What happens if I add more than 10 contractors?",
                  a: "Simple: each contractor over 10 adds $5/mo. 15 contractors = $64/mo, 20 contractors = $89/mo. No tiers, no surprise plan upgrades.",
                },
                {
                  q: "Is ZiggyPayroll right if I have a mix of employees and contractors?",
                  a: "If you have W-2 employees AND 1099 contractors, Gusto may be the better fit (you need the W-2 payroll features). ZiggyPayroll is purpose-built for businesses that work exclusively or primarily with 1099 contractors.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "24px 28px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "12px",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────────── */}
        <section
          style={{
            background: bg,
            padding: "96px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "620px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                fontWeight: 800,
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              Ready to stop paying the Gusto tax?
            </h2>
            <p
              style={{
                color: muted,
                fontSize: "1.0625rem",
                marginBottom: "36px",
                lineHeight: 1.65,
              }}
            >
              Start your free 14-day trial. No credit card. Full contractor
              workflow on day one.
            </p>
            <Link
              href="https://app.ziggypayroll.com/signup"
              style={{
                display: "inline-block",
                background: accent,
                color: "#0a0a0a",
                padding: "15px 36px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.0625rem",
                textDecoration: "none",
              }}
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
