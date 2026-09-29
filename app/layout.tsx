import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    "Creative Design",
    "Marketing Strategy",
    "Data Analytics",
    "Bhilai",
    "Chhattisgarh",
    "India"
  ],
  authors: [{ name: "Saket Dandekar", url: "https://digitalsaket.vercel.app" }],
  creator: "Saket Dandekar",
  publisher: "Saket Dandekar",
  metadataBase: new URL('https://digitalsaket.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalsaket.vercel.app",
    title: "Saket Dandekar — Digital Marketing & Growth Analyst",
    description: "Digital Marketing & Growth Analyst specializing in performance marketing, business analytics, AI automation, and creative design. MBA in Digital Marketing. Based in Bhilai, India.",
    siteName: "Saket Dandekar Portfolio",
    images: [
      {
        url: '/saket-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Saket Dandekar - Digital Marketing & Growth Analyst',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saket Dandekar — Digital Marketing & Growth Analyst",
    description: "Digital Marketing & Growth Analyst specializing in performance marketing, business analytics, AI automation, and creative design.",
    images: ['/saket-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
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
        <SpeedInsights />
      </body>
    </html>
  );
}
