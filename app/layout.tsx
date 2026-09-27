import type { Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";
import { organizationWebsiteJsonLd } from "@/lib/structured-data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Global viewport settings matching brand colors
export const viewport: Viewport = {
  themeColor: "#0A0A0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden max-w-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden max-w-full relative" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebsiteJsonLd()) }}
        />
        {/* One skip link for every route. Each page renders its own
            <main id="main-content">, so this wrapper is a div — nesting a
            second <main> here would be invalid. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
        >
          Skip to content
        </a>
        <div className="flex-grow overflow-x-hidden max-w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
