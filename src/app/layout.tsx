import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face. Left at Fraunces' default SOFT/WONK/opsz axes, which is its
// most restrained cut — the characterful settings read as decorative here.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imali Susan | Software Engineer",
  description:
    "Full-stack engineer in Kenya. Laravel and PHP across utility billing, point-of-sale, insurance and donor management — backend services, REST APIs, and the dashboards teams work in.",
  openGraph: {
    title: "Imali Susan | Software Engineer",
    description:
      "Full-stack engineer in Kenya building backend services, REST APIs and internal tools.",
    type: "profile",
    locale: "en_GB",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full`}
    >
      <body className="grain flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
