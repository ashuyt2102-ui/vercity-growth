import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import AIAssistant from "@/components/AIAssistant";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vercitygrowth.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vercity Growth | Digital Marketing & Web Design",
    template: "%s | Vercity Growth",
  },
  description:
    "Vercity Growth brings performance marketing, websites, content, and creative together to help your business reach the right audience and turn interest into enquiries.",
  openGraph: {
    title: "Vercity Growth | Digital Marketing & Web Design",
    description:
      "Performance marketing, websites, content, and creative for businesses that want clearer growth.",
    type: "website",
    siteName: "Vercity Growth",
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: "Vercity Growth" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og.svg"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text no-hscroll">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        <AIAssistant />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                { "@type": "Organization", name: "Vercity Growth", url: siteUrl },
                { "@type": "WebSite", name: "Vercity Growth", url: siteUrl },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

