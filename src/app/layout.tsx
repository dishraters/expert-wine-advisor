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
    default: "Andrew Misialek Wine Consulting in PA | Italy & Napa Wine Experience",
    template: "%s | Expert Wine Advisor",
  },
  description:
    "Pennsylvania wine consulting from Andrew Misialek, shaped by wine school in Italy and Napa wine industry experience.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "wine consulting",
    "wine consultant",
    "restaurant wine program consulting",
    "wine brand consulting",
    "Pennsylvania wine consultant",
    "Napa wine consultant",
    "private wine collection advisor",
    "wine tasting consultant",
  ],
  openGraph: {
    title: "Andrew Misialek Wine Consulting in PA",
    description:
      "Wine consulting in Pennsylvania from Andrew Misialek, with wine education in Italy and Napa wine industry experience.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Expert Wine Advisor",
    images: [
      {
        url: "/images/italy-wine-education-vineyard.jpg",
        width: 1800,
        height: 1029,
        alt: "Italian vineyard terrace with wine glass, notebook, and hillside vineyard rows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Misialek Wine Consulting in PA",
    description:
      "Wine consulting in Pennsylvania from Andrew Misialek, with wine education in Italy and Napa wine industry experience.",
    images: ["/images/italy-wine-education-vineyard.jpg"],
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
