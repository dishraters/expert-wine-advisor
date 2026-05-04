import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
  title: "Wine Consulting Services | Expert Wine Advisor",
  description:
    "Expert wine consulting for brands, restaurants, hospitality groups, private collectors, and events.",
  openGraph: {
    title: "Wine Consulting Services | Expert Wine Advisor",
    description:
      "Expert wine consulting for brands, restaurants, hospitality groups, private collectors, and events.",
    type: "website",
    locale: "en_US",
    siteName: "Expert Wine Advisor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Consulting Services | Expert Wine Advisor",
    description:
      "Expert wine consulting for brands, restaurants, hospitality groups, private collectors, and events.",
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
