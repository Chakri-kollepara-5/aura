import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aura-lang.org"),
  title: {
    template: "%s | AURA 2.0",
    default: "AURA 2.0 | Explainable Offline Programming Language",
  },
  description: "A premium, production-grade programming language ecosystem featuring an explainable runtime, offline-first compiler, and safe concurrency.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/aura-app-icon.png",
  },
  openGraph: {
    title: "AURA 2.0 | Explainable Offline Programming Language",
    description: "The complete offline-first toolchain. Includes the compiler, language server, REPL, and standard library in a single dependency-free binary.",
    url: "https://aura-lang.org",
    siteName: "AURA Docs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aura-hero.png",
        width: 1200,
        height: 630,
        alt: "AURA 2.0 Programming Language",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA 2.0",
    description: "The complete offline-first toolchain.",
    images: ["/images/aura-hero.png"],
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
