'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Car, Stethoscope, ShieldCheck, Building2, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Car, Stethoscope, ShieldCheck, Building2 };

export default function ProductCard({
  name, tagline, description, color, icon, href, index = 0,
}: {
  name: string; tagline: string; description: string; color: string; icon: string; href: string; index?: number;
}) {
  const Icon = iconMap[icon] || Car;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group card relative overflow-hidden"
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-10 blur-2xl transition group-hover:opacity-20`} />
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-600">{tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-900">
        Visit app <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
}
