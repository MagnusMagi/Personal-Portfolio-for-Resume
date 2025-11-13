import type { Metadata } from "next";
import { Ubuntu, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["300", "400", "500", "700"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aydin Gundeger - Resume & CV",
  description: "Data Analyst at VIG | Founder at Noord7. Passionate about transforming complex data into actionable insights.",
  keywords: ["Aydin Gundeger", "Data Analyst", "Portfolio", "Resume", "CV", "VIG", "Noord7"],
  authors: [{ name: "Aydin Gundeger" }],
  creator: "Aydin Gundeger",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aydingundeger.com",
    title: "Aydin Gundeger - Resume & CV",
    description: "Data Analyst at VIG | Founder at Noord7. Passionate about transforming complex data into actionable insights.",
    siteName: "Aydin Gundeger Portfolio",
    images: [
      {
        url: "https://aydingundeger.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aydin Gundeger - Data Analyst & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydin Gundeger - Resume & CV",
    description: "Data Analyst at VIG | Founder at Noord7",
    creator: "@aydingundeger",
    images: ["https://aydingundeger.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aydingundeger.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

