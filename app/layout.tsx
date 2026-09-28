import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saket Dandekar — Digital Marketing & Growth Analyst",
  description: "Digital Marketing & Growth Analyst specializing in performance marketing, business analytics, AI automation, and creative design. Based in Bhilai, Chhattisgarh, India.",
  keywords: [
    "Saket Dandekar",
    "Digital Marketing",
    "Growth Analyst",
    "Business Analytics",
    "AI Automation",
    "Performance Marketing",
    "Power BI",
    "SEO",
    "SEM",
    "Bhilai",
    "Chhattisgarh",
    "India"
  ],
  authors: [{ name: "Saket Dandekar" }],
  creator: "Saket Dandekar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saketdandekar.vercel.app",
    title: "Saket Dandekar — Digital Marketing & Growth Analyst",
    description: "Digital Marketing & Growth Analyst specializing in performance marketing, business analytics, AI automation, and creative design.",
    siteName: "Saket Dandekar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saket Dandekar — Digital Marketing & Growth Analyst",
    description: "Digital Marketing & Growth Analyst specializing in performance marketing, business analytics, AI automation, and creative design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
