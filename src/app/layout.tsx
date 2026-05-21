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
  title: {
    template: "%s | AURA 2.0",
    default: "AURA 2.0 | Explainable Offline Programming Language",
  },
  description: "A premium, production-grade programming language ecosystem featuring an explainable runtime, offline-first compiler, and safe concurrency.",
  openGraph: {
    title: "AURA 2.0 | Explainable Offline Programming Language",
    description: "The complete offline-first toolchain. Includes the compiler, language server, REPL, and standard library in a single dependency-free binary.",
    url: "https://aura-lang.org",
    siteName: "AURA Docs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURA 2.0",
    description: "The complete offline-first toolchain.",
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
