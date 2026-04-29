'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const row1 = [
  'GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 2.0 Flash', 'Llama 3.3', 'Mistral Large 2',
  'Grok-2', 'DeepSeek V3', 'Command R+', 'Qwen 2.5 Max', 'Phi-4', 'Cohere Embed',
];
const row2 = [
  'RAG Pipelines', 'AI Agents', 'Vector Search', 'LangChain', 'LlamaIndex',
  'Pinecone', 'Weaviate', 'pgvector', 'Qdrant', 'Chroma DB', 'Semantic Kernel',
];
const row3 = [
  'Whisper ASR', 'DALL·E 3', 'Stable Diffusion XL', 'Computer Vision', 'Medical NLP',
  'OCR & DocAI', 'Fine-tuning', 'Embeddings API', 'Multimodal LLMs', 'Function Calling', 'RLHF',
];

const stats = [
  { value: '4+', label: 'Live Products' },
  { value: '15+', label: 'AI Models' },
  { value: '10k+', label: 'Hours Saved Daily' },
  { value: '99.9%', label: 'Uptime SLA' },
];

function TechTag({ label, variant }: { label: string; variant: 'violet' | 'cyan' | 'blue' }) {
  const cls = {
    violet: 'border-violet-500/30 bg-violet-500/[0.08] text-violet-300',
    cyan:   'border-cyan-500/30   bg-cyan-500/[0.08]   text-cyan-300',
    blue:   'border-blue-500/30   bg-blue-500/[0.08]   text-blue-300',
  }[variant];
  return (
    <span className={`mx-2.5 shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium ${cls}`}>
      {label}
    </span>
  );
}

export default function Hero() {
  const r1 = [...row1, ...row1];
  const r2 = [...row2, ...row2];
  const r3 = [...row3, ...row3];

  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial hero glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(124,58,237,0.28) 0%, transparent 65%)',
        }}
      />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -left-56 top-1/4 h-[520px] w-[520px] rounded-full bg-violet-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-56 top-1/3 h-[440px] w-[440px] rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="container-x relative pb-0 pt-24 sm:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300"
          >
            <Sparkles className="h-4 w-4 animate-pulse-slow" />
            AI-First Product Development Platform
          </motion.span>

          {/* Headline */}
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Build{' '}
            <span className="grad-text">intelligent products</span>
            <br className="hidden sm:block" />
            {' '}at the speed of thought
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Mahvion is an AI-first platform company — designing, building, and shipping
            production-grade SaaS products powered by LLMs, AI agents, RAG, computer vision,
            and every cutting-edge AI technology. For any industry. Any scale.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Build With Us
            </Link>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6 border-t border-violet-900/30 pt-10"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold grad-text">{value}</div>
                <div className="mt-0.5 text-xs uppercase tracking-widest text-slate-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* AI Tech Marquees */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="relative mt-16 space-y-3 overflow-hidden"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-36 bg-gradient-to-r from-[#05080f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-36 bg-gradient-to-l from-[#05080f] to-transparent" />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {r1.map((label, i) => <TechTag key={i} label={label} variant="violet" />)}
        </div>
        <div className="flex animate-marquee-rev" style={{ width: 'max-content' }}>
          {r2.map((label, i) => <TechTag key={i} label={label} variant="cyan" />)}
        </div>
        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {r3.map((label, i) => <TechTag key={i} label={label} variant="blue" />)}
        </div>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#05080f]" />
    </section>
  );
}
