import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Sparkles, Users } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { productIcons, lineArt, glowColor } from '@/components/ProductArt';
import { products, site } from '@/lib/site';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `${site.url}/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const Icon = productIcons[p.icon];
  const LineArt = lineArt[p.slug];
  const others = products.filter((x) => x.slug !== p.slug);
  const inDevelopment = p.status === 'in-development';

  return (
    <>
      <section className="section pb-0">
        <div className="container-x">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-violet-400">
            <ArrowLeft className="h-4 w-4" /> All products
          </Link>

          <article
            className="relative mt-8 overflow-hidden rounded-3xl border border-violet-900/20 p-8 lg:p-12"
            style={{ background: `radial-gradient(ellipse 70% 80% at 20% 50%, ${glowColor[p.slug]}, transparent 70%), var(--surface)` }}
          >
            {Icon && (
              <Icon
                aria-hidden="true"
                className="pointer-events-none absolute text-white opacity-[0.04]"
                style={{ width: 340, height: 340, bottom: -40, right: -40 }}
              />
            )}
            {LineArt && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute opacity-[0.22]"
                style={{ width: 320, height: 210, bottom: 20, right: 20 }}
              >
                <LineArt />
              </div>
            )}

            <div className="relative grid items-start gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${p.color} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm`}>
                    {p.tagline}
                  </span>
                  {inDevelopment && (
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                      In development
                    </span>
                  )}
                </div>
                <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{p.name}</h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-300">{p.description}</p>
                <p className="mt-4 leading-relaxed text-slate-400">{p.longDescription}</p>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-violet-900/30 bg-white/[0.03] p-4">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Built for</p>
                    <p className="mt-1 text-sm text-slate-300">{p.audience}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.highlights.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/contact?product=${p.slug}`} className="btn-primary text-sm inline-flex items-center gap-1.5">
                    {inDevelopment ? 'Request early access' : 'Request a demo'} <ArrowRight className="h-4 w-4" />
                  </Link>
                  {p.slug === 'real-estate' && (
                    <Link href="/real-estate" className="btn-ghost text-sm">Take the full product tour</Link>
                  )}
                </div>
              </div>

              <div className="card">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                  <Sparkles className="h-4 w-4 text-violet-400" />
                  {inDevelopment ? 'Planned capabilities' : 'Key modules'}
                </h2>
                <ul className="mt-5 space-y-3">
                  {p.modules.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-slate-400">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-violet-900/30 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {inDevelopment ? 'What it is designed to do' : 'What you’ll get'}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="text-sm font-medium text-slate-300">&rarr; {o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-2xl font-bold tracking-tight">Other Mahvion products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <ProductCard
                key={o.slug}
                name={o.name}
                tagline={o.tagline}
                description={o.description}
                color={o.color}
                icon={o.icon}
                status={o.status}
                href={`/products/${o.slug}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
