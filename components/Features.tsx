'use client';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Layers, Cpu, HeartHandshake } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Blazing Fast', desc: 'Edge-ready architecture with sub-second page loads.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SOC2-aligned, encrypted, and HIPAA-ready where it matters.' },
  { icon: Globe, title: 'Global Scale', desc: 'Multi-region deployment with 99.99% uptime SLAs.' },
  { icon: Layers, title: 'Unified Ecosystem', desc: 'One login, one brand, many powerful products.' },
  { icon: Cpu, title: 'AI Native', desc: 'Automation and insights powered by modern AI models.' },
  { icon: HeartHandshake, title: 'Human Support', desc: '24/7 responsive support from real humans.' },
];

export default function Features() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="card"
        >
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <f.icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
