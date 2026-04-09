'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grad-soft">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-grad-hero opacity-20 blur-3xl" />
      <div className="container-x relative py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" /> One ecosystem · Multiple SaaS apps
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Powering modern <span className="grad-text">businesses</span> with intelligent SaaS
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            {site.name} builds production-grade platforms for vehicles, healthcare, insurance, and real estate — unified under one beautiful brand.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">Talk to Sales</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {['Vehicle ERP', 'Medscribe', 'Insurance', 'Real Estate'].map((n, i) => (
            <div key={n} className="card animate-float text-center" style={{ animationDelay: `${i * 0.4}s` }}>
              <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-grad-hero" />
              <p className="text-sm font-semibold">{n}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
