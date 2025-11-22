import BootstrapClient from '@/components/BootstrapClient';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ministry of Skill Development and Entrepreneurship',
  description: 'Government of India - Skill Development Initiatives',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Use compiled Bootstrap CSS instead of SCSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <BootstrapClient />
      </body>
    </html>
  )
}