import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check, Users, Sparkles, FileCheck, ArrowRight, ShieldAlert, Compass, Server,
  SearchCheck, ClipboardCheck, Wrench, Headphones,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '@/components/Section';
import { services } from '@/lib/site';

const localPages: Record<string, { label: string; href: string }[]> = {
  vapt: [
    { label: 'VAPT in Pune', href: '/services/vapt-services-pune' },
    { label: 'Remote VAPT across India', href: '/services/vapt-services-india' },
  ],
  'it-hardware': [{ label: 'IT hardware & AMC in Pune', href: '/services/it-hardware-amc-pune' }],
};

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mahvion services — VAPT and security testing, IT consulting, and IT hardware and infrastructure. The same engineering team behind the Mahvion product suite.',
};

const iconMap: Record<string, LucideIcon> = { ShieldAlert, Compass, Server };

const process = [
  {
    step: '01',
    icon: SearchCheck,
    title: 'Discover',
    desc: 'A free consultation to understand your systems, goals, and constraints — and agree on what success looks like.',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Scope & quote',
    desc: 'A written scope, timeline, and fixed quotation. No surprises and no work starts until you approve it.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Deliver',
    desc: 'Our engineers do the work with regular check-ins, and hand over clear documentation at the end.',
  },
  {
    step: '04',
    icon: Headphones,
    title: 'Support',
    desc: 'We stay available after delivery — re-tests, follow-up questions, maintenance, and the next phase.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Secure it. Plan it. Equip it."
        subtitle="Beyond our software products, the same Mahvion engineering team helps businesses secure their systems, make better technology decisions, and run dependable IT infrastructure."
      >
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="card group flex items-center gap-4 transition hover:ring-1 hover:ring-violet-500/40"
              >
                <div className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-slate-100 group-hover:text-violet-300">{s.name}</span>
              </a>
            );
          })}
        </div>
      </Section>

      <div className="container-x space-y-28 pb-28">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          const BgIcon = iconMap[s.icon];
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-violet-900/20 p-8 lg:p-12"
              style={{ background: `radial-gradient(ellipse 70% 80% at ${reverse ? '80%' : '20%'} 50%, ${s.glow}, transparent 70%), var(--surface)` }}
            >
              {/* Large watermark icon */}
              {BgIcon && (
                <BgIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute text-white opacity-[0.04]"
                  style={{ width: 340, height: 340, bottom: -40, [reverse ? 'left' : 'right']: -40 }}
                />
              )}

              <div className="relative grid items-start gap-10 lg:grid-cols-2">
                <div className={reverse ? 'lg:order-2' : ''}>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${s.color} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm`}
                  >
                    {s.tagline}
                  </span>
                  <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {s.name}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    {s.longDescription}
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-violet-900/30 bg-white/[0.03] p-4">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Built for</p>
                      <p className="mt-1 text-sm text-slate-300">{s.audience}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.highlights.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="btn-primary text-sm inline-flex items-center gap-1.5"
                    >
                      Request a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                    {(localPages[s.slug] || []).map((l) => (
                      <Link key={l.href} href={l.href} className="btn-ghost text-sm">{l.label}</Link>
                    ))}
                  </div>
                </div>

                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="card">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                      What we cover
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {s.scope.map((m) => (
                        <li key={m} className="flex items-start gap-3 text-sm text-slate-400">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-violet-900/30 pt-5">
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        <FileCheck className="h-3.5 w-3.5" />
                        What you receive
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {s.deliverables.map((o) => (
                          <li key={o} className="text-sm font-medium text-slate-300">&rarr; {o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* How we work */}
      <div style={{ background: 'linear-gradient(135deg, rgba(13,16,33,0.9) 0%, rgba(12,15,30,0.8) 100%)' }}>
        <Section
          eyebrow="How we work"
          title="A clear process, from first call to ongoing support."
          subtitle="Every engagement follows the same four steps, so you always know what happens next and what it will cost."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="card relative overflow-hidden">
                <div className="pointer-events-none absolute -right-3 -top-3 select-none text-8xl font-black leading-none text-violet-500/[0.06]">
                  {step}
                </div>
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-grad-hero text-white shadow-lg shadow-violet-600/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-violet-500">
                    Step {step}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-slate-100">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section
          eyebrow="Get started"
          title="Tell us what you need"
          subtitle="Share a few details about your systems or project and we'll come back with a scope and quotation."
        >
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost">
              Explore our products
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
