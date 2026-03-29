import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ZiggyPayroll — Contractor Payroll & 1099 Management at $39/mo",
  description:
    "Pay your contractors. Skip the headache. Manage 1099 contractors, track hours, approve payments, and generate 1099-NEC forms — all for $39/mo flat. Built for small businesses.",
  keywords: [
    "1099 contractor payroll",
    "contractor payment software",
    "1099 management",
    "Gusto alternative",
    "contractor payroll software",
    "small business payroll",
    "W-9 collection software",
  ],
  openGraph: {
    title: "ZiggyPayroll — Contractor Payroll & 1099 Management at $39/mo",
    description:
      "Pay contractors, handle 1099s, track hours. $39/mo flat for up to 10 contractors. Skip the Gusto bloat.",
    url: "https://ziggypayroll.com",
  },
};

const accent = "#84cc16";
const bg = "#0a0a0a";
const cardBg = "#111111";
const border = "1px solid #1f1f1f";
const radius = "14px";
const muted = "#a1a1aa";

export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld-home"
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
            padding: "88px 24px 80px",
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
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(132,204,22,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Pay your contractors.
              <br />
              <span style={{ color: accent }}>Skip the headache.</span>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: muted,
                maxWidth: "580px",
                margin: "0 auto 40px",
                lineHeight: 1.65,
              }}
            >
              Manage 1099 contractors, track hours, approve payments, and
              generate year-end tax forms — all in one place. Flat $39/mo for
              up to 10 contractors. No Gusto bloat.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "36px",
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
                Start Free Trial
              </Link>
              <Link
                href="#features"
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
                See Features
              </Link>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                gap: "28px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["14-day free trial", "No credit card", "Cancel anytime"].map(
                (badge) => (
                  <span
                    key={badge}
                    style={{
                      color: muted,
                      fontSize: "0.875rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: accent }}>✓</span>
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── Problem Strip ────────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "72px 24px",
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 700,
                marginBottom: "48px",
              }}
            >
              Managing contractors shouldn&apos;t be this painful
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
                  icon: "📊",
                  title: "Gusto charges you for features you never use",
                  desc: "Payroll tax filing, benefits management, HR compliance — all built for W-2 employees you don't have. You're paying $79+/mo for a product designed for someone else.",
                },
                {
                  icon: "📋",
                  title: "W-9 chaos every tax season",
                  desc: "Chasing contractors for W-9 forms, manually entering data, praying you don't make a mistake on 1099s. It's a nightmare that repeats every January.",
                },
                {
                  icon: "💸",
                  title: "Payment tracking is a mess",
                  desc: "Venmo, bank transfers, PayPal, spreadsheets — no audit trail, no approval workflow, no visibility. Come tax time, you're scrambling to piece it all together.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "32px 28px",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginBottom: "10px",
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

        {/* ── Features ─────────────────────────────────────────────── */}
        <section id="features" style={{ background: bg, padding: "88px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                Everything you need to manage 1099 contractors
              </h2>
              <p style={{ color: muted, fontSize: "1.0625rem" }}>
                Zero W-2 overhead. Built exclusively for businesses that work
                with independent contractors.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: "🏠",
                  name: "Contractor Portal",
                  desc: "Contractors get their own login to submit invoices, log hours, and update bank info. No chasing, no paperwork.",
                },
                {
                  icon: "⏱️",
                  name: "Time Tracking",
                  desc: "Contractors log hours directly in the app. You review and approve before payment goes out.",
                },
                {
                  icon: "✅",
                  name: "Payment Approval Workflow",
                  desc: "Review every payment before it goes out. Approve or reject in one click. Full audit trail per contractor.",
                },
                {
                  icon: "🧾",
                  name: "1099-NEC Export",
                  desc: "Generate 1099 forms at year-end automatically. No accountant needed for the basics.",
                },
                {
                  icon: "📜",
                  name: "Payment History & Records",
                  desc: "Full payment history for every contractor. Every invoice, every payment, every approval logged.",
                },
                {
                  icon: "📋",
                  name: "Contractor Onboarding",
                  desc: "Collect W-9s, bank details, and rate agreements automatically when a contractor joins. Everything stored digitally.",
                },
                {
                  icon: "📊",
                  name: "Multi-Contractor Dashboard",
                  desc: "See all pending payments, outstanding invoices, and contractor statuses at a glance.",
                },
                {
                  icon: "🏦",
                  name: "Direct Bank Payment (ACH)",
                  desc: "Pay contractors directly to their bank account via ACH transfer. Fast, traceable, professional.",
                  comingSoon: true,
                },
              ].map((f) => (
                <div
                  key={f.name}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "28px 24px",
                    position: "relative",
                  }}
                >
                  {f.comingSoon && (
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        background: "#0066ff",
                        color: "#fff",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "20px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      COMING SOON
                    </div>
                  )}
                  <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "10px",
                    }}
                  >
                    {f.name}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coming Soon Strip ────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "64px 24px",
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              On the roadmap
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: "🏦",
                  name: "ACH Direct Bank Payments",
                  desc: "Pay contractors directly to their bank account. Fast, traceable, no third-party services.",
                },
                {
                  icon: "📒",
                  name: "QuickBooks Integration",
                  desc: "Sync contractor payments and 1099 data directly into QuickBooks. No manual exports.",
                },
                {
                  icon: "🏢",
                  name: "Multi-Entity Support",
                  desc: "Manage contractors across multiple business entities from one ZiggyPayroll account.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "28px 24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "#ff9500",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "20px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    IN DEVELOPMENT
                  </div>
                  <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "10px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.9rem",
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

        {/* ── Industries ───────────────────────────────────────────── */}
        <section style={{ background: bg, padding: "88px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                Built for your industry
              </h2>
              <p style={{ color: muted, fontSize: "1.0625rem" }}>
                If your business runs on 1099 contractors, ZiggyPayroll was
                built for you.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  icon: "🎨",
                  name: "Marketing & Creative Agencies",
                  desc: "Pay designers, copywriters, and freelancers on time — every time.",
                },
                {
                  icon: "🏗️",
                  name: "Construction & Trades",
                  desc: "Subcontractor payments + 1099 season handled without the annual scramble.",
                },
                {
                  icon: "🧹",
                  name: "Cleaning & Home Services",
                  desc: "Part-time staff + seasonal contractors paid and documented.",
                },
                {
                  icon: "💻",
                  name: "Tech Startups",
                  desc: "Dev contractors, remote workers, and fractional hires — all in one dashboard.",
                },
                {
                  icon: "📸",
                  name: "Photography & Events",
                  desc: "Pay photographers, videographers, and second shooters without the paperwork.",
                },
                {
                  icon: "🏥",
                  name: "Healthcare Practices",
                  desc: "Locum staff, billing contractors, and admin freelancers managed compliantly.",
                },
                {
                  icon: "🎓",
                  name: "Education & Coaching",
                  desc: "Guest instructors, tutors, and curriculum contractors paid and 1099ed.",
                },
                {
                  icon: "📦",
                  name: "eCommerce & Logistics",
                  desc: "Fulfillment staff and dropship partners tracked and paid efficiently.",
                },
              ].map((ind) => (
                <div
                  key={ind.name}
                  style={{
                    background: cardBg,
                    border,
                    borderRadius: radius,
                    padding: "24px 20px",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "10px" }}>
                    {ind.icon}
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "8px",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      color: muted,
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <p style={{ color: muted, fontSize: "0.9375rem" }}>
                Need a custom setup?{" "}
                <a
                  href="mailto:hello@ziggypayroll.com"
                  style={{ color: accent, textDecoration: "underline" }}
                >
                  Contact us.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ─────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "88px 24px",
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                ZiggyPayroll vs Gusto
              </h2>
              <p style={{ color: muted, fontSize: "1.0625rem" }}>
                Don&apos;t pay for W-2 features you&apos;ll never use.
              </p>
            </div>
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
                    ["Monthly cost (10 contractors)", "$39/mo flat", "$49 base + $60 = $109/mo"],
                    ["Built for 1099 contractors", "✅ Purpose-built", "⚠️ W-2 first, contractors secondary"],
                    ["Contractor portal", "✅", "✅"],
                    ["Time tracking", "✅", "✅"],
                    ["Payment approval workflow", "✅", "✅"],
                    ["1099-NEC export", "✅", "✅"],
                    ["W-9 collection", "✅ Automated", "✅"],
                    ["Contractor onboarding", "✅ Fully digital", "✅"],
                    ["W-2 payroll tax filing", "❌ Not needed", "✅ (You don't need this)"],
                    ["Benefits management", "❌ Not needed", "✅ (You don't need this)"],
                    ["HR compliance tools", "❌ Not needed", "✅ (You don't need this)"],
                    ["Self-serve setup", "✅ Under 10 min", "⚠️ Complex onboarding"],
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
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link
                href="/vs/gusto"
                style={{
                  color: accent,
                  textDecoration: "underline",
                  fontSize: "0.9375rem",
                }}
              >
                See the full comparison →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────── */}
        <section id="pricing" style={{ background: bg, padding: "88px 24px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                One price. No surprises.
              </h2>
              <p style={{ color: muted, fontSize: "1.0625rem" }}>
                Flat rate for up to 10 contractors. Add more as you grow.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              {/* Main plan */}
              <div
                style={{
                  background: cardBg,
                  border: `2px solid ${accent}`,
                  borderRadius: radius,
                  padding: "40px 32px",
                  position: "relative",
                  boxShadow: "0 0 48px rgba(132,204,22,0.12)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: accent,
                    color: "#0a0a0a",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    padding: "4px 16px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.04em",
                  }}
                >
                  FLAT RATE
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginBottom: "10px",
                  }}
                >
                  ZiggyPayroll
                </div>
                <div
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  $39
                  <span
                    style={{
                      fontSize: "1rem",
                      color: muted,
                      fontWeight: 400,
                    }}
                  >
                    /mo
                  </span>
                </div>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.875rem",
                    marginBottom: "6px",
                    marginTop: "8px",
                  }}
                >
                  Up to 10 contractors included
                </p>
                <p
                  style={{
                    color: accent,
                    fontSize: "0.875rem",
                    marginBottom: "28px",
                    fontWeight: 600,
                  }}
                >
                  +$5/contractor/mo after 10
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Contractor portal",
                    "Time tracking",
                    "Payment approval workflow",
                    "1099-NEC export",
                    "Payment history & records",
                    "Contractor onboarding (W-9, bank, rate)",
                    "Multi-contractor dashboard",
                    "14-day free trial",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: muted,
                      }}
                    >
                      <span style={{ color: accent }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://app.ziggypayroll.com/signup"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "13px",
                    borderRadius: "10px",
                    background: accent,
                    color: "#0a0a0a",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                  }}
                >
                  Start Free Trial
                </Link>
                <p
                  style={{
                    textAlign: "center",
                    color: muted,
                    fontSize: "0.8rem",
                    marginTop: "10px",
                  }}
                >
                  No credit card required
                </p>
              </div>

              {/* Scaling callout */}
              <div
                style={{
                  background: cardBg,
                  border,
                  borderRadius: radius,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "16px",
                  }}
                >
                  Growing your contractor team?
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  {[
                    { label: "Up to 10 contractors", price: "$39/mo" },
                    { label: "11–15 contractors", price: "$64/mo" },
                    { label: "16–20 contractors", price: "$89/mo" },
                    { label: "21–30 contractors", price: "$139/mo" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 14px",
                        background: "#0a0a0a",
                        borderRadius: "8px",
                        border: "1px solid #1a1a1a",
                      }}
                    >
                      <span style={{ color: muted, fontSize: "0.875rem" }}>
                        {row.label}
                      </span>
                      <span
                        style={{
                          color: accent,
                          fontWeight: 700,
                          fontSize: "0.9375rem",
                        }}
                      >
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ color: muted, fontSize: "0.8375rem", lineHeight: 1.6 }}>
                  $39/mo base + $5 per contractor over 10. Simple, predictable
                  scaling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "88px 24px",
            borderTop: "1px solid #1a1a1a",
          }}
        >
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.25rem",
                fontWeight: 800,
                marginBottom: "56px",
              }}
            >
              Frequently asked questions
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                {
                  q: "Is ZiggyPayroll better than Gusto for 1099 contractors?",
                  a: "Yes — Gusto is a full HR platform built for W-2 employees. If you only have 1099 contractors, you're paying for payroll taxes, benefits, and HR compliance you'll never use. ZiggyPayroll is built exclusively for contractor management. Same core workflow, half the cost.",
                },
                {
                  q: "How does contractor onboarding work?",
                  a: "Invite a contractor by email. They get their own portal login where they fill out their W-9, add their bank info, and confirm their rate agreement. Everything is stored digitally — no paperwork, no manual data entry.",
                },
                {
                  q: "Do I need an accountant to file 1099s?",
                  a: "Not for the basics. ZiggyPayroll tracks all payments throughout the year and generates 1099-NEC forms at year-end for every contractor you paid $600 or more. You can handle filing yourself or hand off the generated forms to your accountant.",
                },
                {
                  q: "What's the difference between $39/mo and adding more contractors?",
                  a: "The base plan includes up to 10 contractors for $39/mo flat. After 10, you add $5/contractor/mo. So 15 contractors = $64/mo, 20 contractors = $89/mo. Always predictable.",
                },
                {
                  q: "Can contractors see each other's payment info?",
                  a: "No. Each contractor only sees their own portal — their invoices, their payments, their 1099. You have the full view across all contractors from your admin dashboard.",
                },
                {
                  q: "Does ZiggyPayroll handle payroll taxes?",
                  a: "No — and that's intentional. 1099 contractors are responsible for their own taxes. ZiggyPayroll handles payments, records, and 1099 documentation. We don't file payroll taxes because contractors don't need that.",
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
            padding: "100px 24px",
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
                "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(132,204,22,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              Pay your contractors.
              <br />
              <span style={{ color: accent }}>Stop overpaying for software.</span>
            </h2>
            <p
              style={{
                color: muted,
                fontSize: "1.125rem",
                marginBottom: "40px",
                lineHeight: 1.6,
              }}
            >
              $39/mo flat for up to 10 contractors. Full 1099 workflow included.
              14-day free trial, no credit card required.
            </p>
            <Link
              href="https://app.ziggypayroll.com/signup"
              style={{
                display: "inline-block",
                background: accent,
                color: "#0a0a0a",
                padding: "16px 40px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
