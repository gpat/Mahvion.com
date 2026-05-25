import Link from 'next/link';
import { products, site } from '@/lib/site';

const footerLogoStyle: React.CSSProperties = {
  height: 96,
  width: 'auto',
  display: 'block',
  mixBlendMode: 'screen',
  maskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
  WebkitMaskImage: 'radial-gradient(ellipse 86% 94% at 50% 48%, black 54%, transparent 100%)',
};

const company = [
  { href: '/#platform', label: 'Platform' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Launch App' },
];

const aiTech = [
  'LLM Orchestration', 'AI Agents', 'RAG & Vector Search',
  'Computer Vision', 'Voice & NLP', 'Generative AI',
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-violet-900/30" style={{ background: '#05080f' }}>
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mahvion-logo.png" alt="Mahvion" style={footerLogoStyle} />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">{site.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['LLMs', 'Agents', 'RAG', 'Vision', 'NLP'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-0.5 text-xs font-medium text-violet-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Products</h4>
          <ul className="space-y-2.5 text-sm text-slate-500">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products#${p.slug}`} className="transition hover:text-violet-400">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Company</h4>
          <ul className="space-y-2.5 text-sm text-slate-500">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-violet-400">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">AI Stack</h4>
          <ul className="space-y-2.5 text-sm text-slate-500">
            {aiTech.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1.5 text-sm text-slate-500">
            <a href={`mailto:${site.email}`} className="block transition hover:text-cyan-400">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="block transition hover:text-cyan-400">
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-violet-900/20 py-6 text-center text-sm text-slate-600">
        © {year} {site.name}. All rights reserved. &nbsp;·&nbsp; AI-First Product Development Platform
        <br />
        <span className="text-xs text-slate-700">Mahvion is a brand of Varaha Solutions</span>
      </div>
    </footer>
  );
}
