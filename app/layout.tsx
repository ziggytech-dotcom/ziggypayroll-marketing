import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/app/components/CookieBanner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: { default: "ZiggyPayroll — Payroll for real small businesses", template: "%s | ZiggyPayroll" },
  description: "Payroll for real small businesses. Part of the ZiggyTech Business Suite.",
  openGraph: { title: "ZiggyPayroll — Payroll for real small businesses", description: "Payroll for real small businesses.", siteName: "ZiggyPayroll", url: "https://ziggypayroll.com" },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL("https://ziggypayroll.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
