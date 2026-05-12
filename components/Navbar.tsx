'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const LOGO_STYLE: React.CSSProperties = {
  height: 96,
  width: 'auto',
  display: 'block',
  mixBlendMode: 'screen',
  maskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
  WebkitMaskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
};

const LOGO_STYLE_MOBILE: React.CSSProperties = {
  height: 80,
  width: 'auto',
  display: 'block',
  mixBlendMode: 'screen',
  maskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
  WebkitMaskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
};

const links = [
  { href: '/#platform', label: 'Platform' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-violet-900/30 bg-[#05080f]/90 backdrop-blur-md"
    >
      <nav className="container-x flex h-24 items-center justify-between">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mahvion-logo.png" alt="Mahvion" style={LOGO_STYLE} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-slate-400 transition hover:text-slate-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="btn-primary text-sm px-5 py-2.5">
            Launch App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-violet-900/30 bg-[#05080f] md:hidden">
          <div className="container-x flex flex-col gap-5 py-6">
            <Link href="/" onClick={() => setOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mahvion-logo.png" alt="Mahvion" style={LOGO_STYLE_MOBILE} />
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-300 transition hover:text-violet-400"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/login" className="btn-primary w-fit text-sm">
              Launch App
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
