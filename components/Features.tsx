'use client';
import { motion } from 'framer-motion';
import { Brain, Network, Database, Mic, Eye, Bot } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Multi-LLM Orchestration',
    desc: 'Route across GPT-4o, Claude 3.5, Gemini 2.0, Llama 3.3, and 15+ models — intelligently matched by task type, cost, and latency requirements.',
    tag: 'LLMs',
    gradient: 'from-violet-500 to-purple-600',
    tagCls: 'text-violet-400 bg-violet-500/10 ring-violet-500/20',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    icon: Network,
    title: 'AI Agents & Automation',
    desc: 'Autonomous multi-agent systems with tool use, function calling, long-term memory, and orchestration via LangChain and LlamaIndex.',
    tag: 'Agents',
    gradient: 'from-cyan-500 to-blue-600',
    tagCls: 'text-cyan-400 bg-cyan-500/10 ring-cyan-500/20',
    glow: 'group-hover:shadow-cyan-500/20',
  },
  {
    icon: Database,
    title: 'RAG & Vector Search',
    desc: 'Retrieval-augmented generation backed by Pinecone, Weaviate, and pgvector — for accurate, grounded, low-hallucination AI at scale.',
    tag: 'RAG',
    gradient: 'from-indigo-500 to-violet-600',
    tagCls: 'text-indigo-400 bg-indigo-500/10 ring-indigo-500/20',
    glow: 'group-hover:shadow-indigo-500/20',
  },
  {
    icon: Mic,
    title: 'Voice & Medical NLP',
    desc: 'Real-time transcription via Whisper with domain-trained NLP models, speaker diarization, and speech-to-structured-data pipelines.',
    tag: 'Speech',
    gradient: 'from-emerald-500 to-teal-600',
    tagCls: 'text-emerald-400 bg-emerald-500/10 ring-emerald-500/20',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    icon: Eye,
    title: 'Computer Vision & OCR',
    desc: 'Document intelligence, image classification, object detection, and visual data extraction pipelines for automating paper-heavy workflows.',
    tag: 'Vision',
    gradient: 'from-amber-500 to-orange-600',
    tagCls: 'text-amber-400 bg-amber-500/10 ring-amber-500/20',
    glow: 'group-hover:shadow-amber-500/20',
  },
  {
    icon: Bot,
    title: 'Generative & Multimodal AI',
    desc: 'Image and content generation with DALL·E 3, Stable Diffusion, and multimodal LLMs — powering rich, dynamic AI-native product experiences.',
    tag: 'GenAI',
    gradient: 'from-pink-500 to-rose-600',
    tagCls: 'text-pink-400 bg-pink-500/10 ring-pink-500/20',
    glow: 'group-hover:shadow-pink-500/20',
  },
];

export default function Features() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((cap, i) => (
        <motion.div
          key={cap.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className={`card group relative overflow-hidden transition-shadow duration-300 ${cap.glow}`}
        >
          {/* Hover gradient overlay */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${cap.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]`}
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div
                className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cap.gradient} text-white shadow-lg`}
              >
                <cap.icon className="h-5 w-5" />
              </div>
              <span className={`mt-1 shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${cap.tagCls}`}>
                {cap.tag}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-100">{cap.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{cap.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
