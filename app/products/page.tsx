import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, Users, Sparkles } from 'lucide-react';
import Section from '@/components/Section';
import { products, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the full Mahvion ecosystem — Vehicle ERP, Medscribe, Insurance Agent System, and Real Estate ERP. One brand, one login, four production-grade SaaS platforms.',
};

export default function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Products"
        title="Four products. One ecosystem."
        subtitle="Each Mahvion product is built to run an entire industry workflow end-to-end. Pick the one you need today — add the others when you're ready."
      />

      <div className="container-x space-y-24 pb-24">
        {products.map((p, i) => {
          const url = site.apps[p.href];
          const reverse = i % 2 === 1;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-2"
            >
              <div className={reverse ? 'lg:order-2' : ''}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${p.color} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm`}
                >
                  {p.tagline}
                </span>
                <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {p.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {p.longDescription}
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Built for
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{p.audience}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm"
                  >
                    Launch {p.name} <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link href="/contact" className="btn-ghost text-sm">
                    Book a demo
                  </Link>
                </div>
              </div>

              <div className={reverse ? 'lg:order-1' : ''}>
                <div className="card">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-900">
                    <Sparkles className="h-4 w-4 text-brand-600" />
                    Key modules
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {p.modules.map((m) => (
                      <li key={m} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What you'll see
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {p.outcomes.map((o) => (
                        <li key={o} className="text-sm font-medium text-slate-800">
                          → {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="bg-grad-soft">
        <Section
          eyebrow="What's next"
          title="More products are joining the ecosystem"
          subtitle="Logistics, hospitality, and construction are on our roadmap — built on the same shared data layer, login, and design system."
        >
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/contact" className="btn-primary">
              Tell us what you'd like to see
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
