import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

// Body copy, as in the template.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Headings, buttons and labels.
const manrope = Manrope({
  variable: "--font-manrope",
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
      className={`${inter.variable} ${manrope.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
