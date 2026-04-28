'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Car, Stethoscope, ShieldCheck, Building2, type LucideIcon } from 'lucide-react';
import { products, site } from '@/lib/site';

const iconMap: Record<string, LucideIcon> = { Car, Stethoscope, ShieldCheck, Building2 };

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
            <Sparkles className="h-4 w-4" /> One ecosystem · Four production SaaS platforms
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Software that runs <span className="grad-text">entire industries</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl">
            {site.name} ships ERPs and clinical tools for auto dealers, clinicians, insurance agents, and real estate teams — unified under one login, one brand, one beautiful design system.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">Book a demo</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {products.map((p, i) => {
            const Icon = iconMap[p.icon] || Sparkles;
            return (
              <Link
                key={p.slug}
                href={`/products#${p.slug}`}
                className="card animate-float text-center transition hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div
                  className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-md`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold">{p.name}</p>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
