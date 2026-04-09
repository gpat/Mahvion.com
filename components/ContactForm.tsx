'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="card mx-auto max-w-2xl space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input required className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input required type="email" className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Subject</label>
        <input className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <textarea required rows={5} className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none" />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        {sent ? 'Message Sent ✓' : 'Send Message'}
      </button>
    </motion.form>
  );
}
