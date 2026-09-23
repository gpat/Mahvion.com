import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Car, Building2, Target, ShieldAlert, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { landingPages, landingHref, type LandingPage } from '@/lib/landing';
import { site } from '@/lib/site';

const icons: Record<LandingPage['icon'], LucideIcon> = { ShieldCheck, Car, Building2, Target, ShieldAlert, Server };

export function landingParams(section: LandingPage['section']) {
  return landingPages.filter((p) => p.section === section).map((p) => ({ slug: p.slug }));
}

export function findLanding(section: LandingPage['section'], slug: string) {
  return landingPages.find((p) => p.section === section && p.slug === slug);
}

export function landingMetadata(p: LandingPage): Metadata {
  const url = `${site.url}${landingHref(p)}`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url, type: 'website' },
  };
}

export default function LandingView({ page: p }: { page: LandingPage }) {
  const Icon = icons[p.icon];
  const related = p.related.map((s) => landingPages.find((x) => x.slug === s)).filter(Boolean) as LandingPage[];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="section pb-12">
        <div className="container-x">
          <Link
            href={p.section === 'services' ? '/services' : '/products'}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-violet-400"
          >
            <ArrowLeft className="h-4 w-4" /> {p.section === 'services' ? 'All services' : 'All products'}
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-lg`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="eyebrow">{p.eyebrow}</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{p.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">{p.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={p.cta.href} className="btn-primary inline-flex items-center gap-1.5">
                {p.cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-sm text-slate-500">{p.cta.note}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="pb-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {p.pains.map((x) => (
            <div key={x.title} className="card">
              <h2 className="text-base font-semibold text-slate-100">{x.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{x.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <div style={{ background: 'linear-gradient(135deg, rgba(13,16,33,0.9) 0%, rgba(12,15,30,0.8) 100%)' }}>
        <section className="section">
          <div className="container-x">
            <h2 className="h-title max-w-2xl">{p.featuresTitle}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <h3 className="font-semibold text-slate-100">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={p.detailLink.href} className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300">
              {p.detailLink.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>

      {/* Steps */}
      <section className="section">
        <div className="container-x">
          <h2 className="h-title max-w-2xl">{p.stepsTitle}</h2>
          <div className={`mt-10 grid gap-6 md:grid-cols-2 ${p.steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {p.steps.map((s, i) => (
              <div key={s.title} className="card relative overflow-hidden">
                <div className="pointer-events-none absolute -right-2 -top-3 select-none text-7xl font-black leading-none text-violet-500/[0.07]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-widest text-violet-500">Step {i + 1}</div>
                  <h3 className="mt-1 text-lg font-bold text-slate-100">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0">
        <div className="container-x max-w-3xl">
          <h2 className="h-title">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-violet-900/30 border-y border-violet-900/30">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100">
                  {f.q}
                  <span className="text-violet-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + related */}
      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <section className="section">
          <div className="container-x text-center">
            <h2 className="h-title">Ready to talk?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">{p.cta.note}</p>
            <Link href={p.cta.href} className="btn-primary mt-8 inline-flex items-center gap-1.5">
              {p.cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {related.length > 0 && (
              <div className="mx-auto mt-14 max-w-3xl border-t border-violet-900/30 pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">You may also be interested in</p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={landingHref(r)} className="btn-ghost text-sm">
                      {r.eyebrow}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
