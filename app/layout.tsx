import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ZiggyPayroll — 1099 Contractor Management at $39/mo",
    template: "%s | ZiggyPayroll",
  },
  description:
    "ZiggyPayroll handles 1099 contractor management end to end — onboarding, ACH payments, and tax forms. Built for businesses that work with independent contractors. Starting at $39/mo.",
  keywords: [
    "1099 contractor management",
    "contractor payments",
    "ACH payments",
    "1099 tax forms",
    "independent contractor software",
    "contractor payroll",
    "W-9 collection",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziggypayroll.com",
    siteName: "ZiggyPayroll",
    title: "ZiggyPayroll — 1099 Contractor Management at $39/mo",
    description:
      "Manage 1099 contractors, send ACH payments, and generate tax forms. Half the price of Gusto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyPayroll — 1099 Contractor Management at $39/mo",
    description:
      "Manage 1099 contractors, send ACH payments, and generate tax forms. Half the price of Gusto.",
  },
  metadataBase: new URL("https://ziggypayroll.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-[#0f0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
