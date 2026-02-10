// import BootstrapClient from "@/components/BootstrapClient";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import type { Metadata } from "next";
// import { ReactNode } from "react";
// import "./globals.scss";
// // import "../styles/SCSS.scss";
// // import "../styles/CSS.css";
// import Script from "next/script";

// // import "../styles/compiled.min.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
// import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons

// export const metadata: Metadata = {
//   title: "Ministry of Skill Development and Entrepreneurship",
//   description: "Government of India - Skill Development Initiatives",
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="stylesheet" href="/css/compiled.bundle.min.css" />

//         {/* Use compiled Bootstrap CSS instead of SCSS */}
//         {/* <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//         /> */}
//         {/* <link rel="stylesheet" href="./src/styles/compiled.min.css"></link> */}
//       </head>
//       <body>
//         <Header />
//         <main id="main-content">{children}</main>
//         <Footer />
//         <BootstrapClient />
//         <Script src="/js/compiled.bundle.min.js" strategy="beforeInteractive" />
//       </body>
//     </html>
//   );
// }

import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.scss";
import Script from "next/script";
import "../../styles/CSS.css";
import Link from "next/link";
import BackToTop from "@/components/Footer/BackToTop";

export const metadata: Metadata = {
  title: "Ministry of Skill Development and Entrepreneurship",
  description: "Government of India - Skill Development Initiatives",
  icons: {
    icon: "/vercel.png",
  },
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
        <BackToTop />

        {/* Your compiled DBIM/Bootstrap JS */}
        <Script src="/js/compiled.bundle.min.js" strategy="beforeInteractive" />
        <script async src="https://www.instagram.com/embed.js"></script>
      </body>
    </html>
  );
}
