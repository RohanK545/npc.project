// src/app/admin/layout.tsx
import "../../styles/CSS.css";
import "../admin/admin.css";
// import "../../styles/SCSS.scss";
import BootstrapClient from "@/components/BootstrapClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/compiled.min.css" />
      </head>
      <body>
        <main id="main-content">{children}</main>
        <BootstrapClient />
      </body>
    </html>
  );
}
