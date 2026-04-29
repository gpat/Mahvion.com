'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 290,
    description: 'For small teams starting out.',
    features: ['1 SaaS App', 'Up to 5 users', 'Email support', 'Basic analytics'],
  },
  {
    name: 'Business',
    monthly: 99,
    yearly: 990,
    description: 'For growing businesses.',
    features: ['3 SaaS Apps', 'Up to 25 users', 'Priority support', 'Advanced analytics', 'Custom domain'],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: 299,
    yearly: 2990,
    description: 'For large organizations.',
    features: ['All SaaS Apps', 'Unlimited users', '24/7 dedicated support', 'SLA + SSO', 'On-prem option'],
  },
];

export default function PricingCards() {
  const [yearly, setYearly] = useState(false);
  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-full border border-violet-900/40 bg-white/5 p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${!yearly ? 'bg-grad-hero text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >Monthly</button>
          <button
            onClick={() => setYearly(true)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${yearly ? 'bg-grad-hero text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >Yearly <span className="ml-1 text-xs opacity-80">save 20%</span></button>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`card relative ${p.popular ? 'ring-2 ring-violet-500' : ''}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-grad-hero px-4 py-1 text-xs font-semibold uppercase text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-100">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{p.description}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-100">${yearly ? p.yearly : p.monthly}</span>
              <span className="text-slate-400">/{yearly ? 'yr' : 'mo'}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" /> {f}
                </li>
              ))}
            </ul>
            <a href="/contact" className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${p.popular ? 'bg-grad-hero text-white shadow-lg shadow-violet-600/30' : 'border border-violet-900/40 text-slate-300 hover:border-violet-500/50 hover:text-slate-100'}`}>
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
