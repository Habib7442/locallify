import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import AppwritePing from "@/components/AppwritePing";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Locallify | Premium Website Design & Digital Marketing in India",
    template: "%s | Locallify",
  },
  description: "Elevate your local business with Locallify. We provide world-class website design, SEO, Google Business Profile optimization, and ROI-focused digital marketing across India.",
  keywords: [
    "Website Design India", 
    "Digital Marketing Agency", 
    "Local Business Marketing", 
    "SEO Services", 
    "Google Business Profile Optimization", 
    "Social Media Management", 
    "Performance Ads", 
    "Locallify"
  ],
  authors: [{ name: "Locallify" }],
  creator: "Locallify",
  publisher: "Locallify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://locallify.in"),
  openGraph: {
    title: "Locallify | Premium Website Design & Digital Marketing in India",
    description: "Transform your local business into a digital powerhouse with Locallify's premium web design and marketing solutions.",
    url: "https://locallify.in",
    siteName: "Locallify",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Locallify - Premium Digital Marketing and Web Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locallify | Digital Marketing tailored for Local Businesses",
    description: "Transform your local business into a digital powerhouse. Expert web design, SEO, and social media marketing in India.",
    images: ["/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-poppins text-zinc-900 bg-zinc-50">
        <AppwritePing />
        {children}
      </body>
    </html>
  );
}
