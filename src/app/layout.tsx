
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";
import Script from "next/script";
// import "../styles/SCSS.scss";
import "../styles/CSS.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ministry of Skill Development and Entrepreneurship",
  description: "Government of India - Skill Development Initiatives",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Your compiled DBIM/Bootstrap CSS */}
        <link rel="stylesheet" href="/css/compiled.min.css" />
      </head>

      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        <BootstrapClient />

        {/* Your compiled DBIM/Bootstrap JS */}
        <Script src="/js/compiled.bundle.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
