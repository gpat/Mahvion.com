'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="card mx-auto max-w-2xl space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-300">Name</label>
          <input name="name" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-violet-900/40 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-300">Email</label>
          <input name="email" required type="email" value={form.email} onChange={handleChange} className="w-full rounded-lg border border-violet-900/40 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-300">Subject</label>
        <input name="subject" value={form.subject} onChange={handleChange} className="w-full rounded-lg border border-violet-900/40 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-300">Message</label>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange} className="w-full rounded-lg border border-violet-900/40 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30" />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
      )}
      <button type="submit" disabled={status === 'sending' || status === 'sent'} className="btn-primary w-full justify-center disabled:opacity-70">
        {status === 'sent' ? 'Message Sent ✓' : status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </motion.form>
  );
}
