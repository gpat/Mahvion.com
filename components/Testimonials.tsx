'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  { name: 'Sarah K.', role: 'Fleet Director', quote: 'Vehicle ERP cut our paperwork by 70%. The team finally has one source of truth.' },
  { name: 'Dr. Ahmed', role: 'Physician', quote: 'Medscribe saves me 2 hours every day. Documentation used to be a nightmare.' },
  { name: 'Laura M.', role: 'Insurance Broker', quote: 'Commission tracking alone paid for the subscription. The UX is stunning.' },
  { name: 'James P.', role: 'Property Manager', quote: 'Real Estate ERP handles 300 units effortlessly. Support is genuinely world class.' },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="card"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
          <div className="mt-5">
            <p className="font-semibold">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
