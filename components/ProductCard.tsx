'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Car, Stethoscope, ShieldCheck, Building2, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Car, Stethoscope, ShieldCheck, Building2 };

export default function ProductCard({
  name, tagline, description, color, icon, href, learnMore, index = 0,
}: {
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: string;
  href?: string;
  learnMore?: string;
  index?: number;
}) {
  const Icon = iconMap[icon] || Car;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group card relative flex flex-col overflow-hidden"
    >
      {/* Large gradient blob */}
      <div className={`absolute -right-8 -top-8 h-52 w-52 rounded-full bg-gradient-to-br ${color} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-25`} />

      {/* Giant watermark icon */}
      <Icon
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 -right-5 h-44 w-44 text-white opacity-[0.055] transition-opacity duration-500 group-hover:opacity-[0.09]"
      />

      {/* Subtle dot pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={`dots-${icon}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${icon})`} />
      </svg>

      <div className="relative">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-bold">{name}</h3>
        <p className="mt-1 text-sm font-medium text-violet-400">{tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
        {learnMore && (
          <div className="mt-6 border-t border-violet-900/30 pt-4 text-sm font-semibold">
            <Link href={learnMore} className="text-slate-300 hover:text-violet-400">
              Learn more
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
