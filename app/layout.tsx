import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — One ecosystem for modern SaaS`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/mahvion-logo.png',
    shortcut: '/mahvion-logo.png',
    apple: '/mahvion-logo.png',
  },
  keywords: [
    'SaaS', 'ERP', 'Vehicle ERP', 'Medical SaaS', 'Medscribe',
    'Insurance CRM', 'Real Estate ERP', 'Mahvion',
  ],
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
