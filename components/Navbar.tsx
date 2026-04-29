'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';

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
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-grad-hero shadow-lg shadow-violet-600/30">
            <Cpu className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">{site.name}</span>
          <span className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400 sm:inline-block">
            AI Platform
          </span>
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
