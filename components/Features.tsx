'use client';
import { motion } from 'framer-motion';
import { Zap, Shield, Layers, Cpu, HeartHandshake, Workflow } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'One ecosystem, one login',
    desc: 'Customers, vehicles, properties, and policies live in a shared data layer — no double entry across products.',
  },
  {
    icon: Cpu,
    title: 'AI where it matters',
    desc: 'Voice-to-note in Medscribe, smart quote drafting in Insurance, and price intelligence in Vehicle ERP.',
  },
  {
    icon: Workflow,
    title: 'Built for real workflows',
    desc: 'Not generic dashboards — every product is shaped around the actual day-to-day of the teams that use it.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SOC2-aligned controls, role-based access, encrypted at rest, and HIPAA-ready for clinical workflows.',
  },
  {
    icon: Zap,
    title: 'Fast on any device',
    desc: 'Edge-rendered pages, sub-second loads, and offline-friendly mobile flows for staff in the field.',
  },
  {
    icon: HeartHandshake,
    title: 'Real human support',
    desc: 'Talk to engineers and product specialists, not chatbots. Onboarding and migration help included.',
  },
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
