'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  {
    name: 'Sarah K.',
    role: 'Fleet Director',
    quote: "Vehicle ERP's AI pricing intelligence cut our deal turnaround by 60%. The whole team finally runs on one source of truth — no more spreadsheet chaos.",
  },
  {
    name: 'Dr. Ahmed',
    role: 'Physician',
    quote: 'Medscribe saves me 2+ hours every day. The AI SOAP notes it generates from my consultation audio are more accurate than anything I could type manually.',
  },
  {
    name: 'Laura M.',
    role: 'Insurance Broker',
    quote: 'The AI quote engine pulls ranked results from 10+ carriers in seconds. Commission tracking alone paid for the subscription within the first month.',
  },
  {
    name: 'James P.',
    role: 'Property Manager',
    quote: 'Real Estate ERP manages 300 units with AI-automated rent collection and maintenance routing. Support is genuinely world class — real engineers, not bots.',
  },
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
          className="card flex flex-col"
        >
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-5 border-t border-violet-900/30 pt-4">
            <p className="font-semibold text-slate-100">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
