import type { Metadata } from "next";
import { Ubuntu, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Data Analyst at VIG | Founder at Noord7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

