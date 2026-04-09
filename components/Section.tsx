'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({
  eyebrow, title, subtitle, children, id,
}: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode; id?: string }) {
  return (
    <section id={id} className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="h-title mt-4">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
