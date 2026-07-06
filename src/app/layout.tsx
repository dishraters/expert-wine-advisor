import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://expert-wine-advisor.vercel.app";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andrew Misialek Wine Consulting | Expert Wine Advisor",
    template: "%s | Expert Wine Advisor",
  },
  description:
    "Wine consulting from Andrew Misialek for brands, restaurants, hospitality teams, private collectors, events, and production decisions.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "wine consulting",
    "wine consultant",
    "restaurant wine program consulting",
    "wine brand consulting",
    "private wine collection advisor",
    "wine tasting consultant",
  ],
  openGraph: {
    title: "Andrew Misialek Wine Consulting | Expert Wine Advisor",
    description:
      "Wine consulting for brands, restaurants, hospitality teams, private collectors, events, and production decisions.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Expert Wine Advisor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Misialek Wine Consulting | Expert Wine Advisor",
    description:
      "Wine consulting for brands, restaurants, hospitality teams, private collectors, events, and production decisions.",
  },
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
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
