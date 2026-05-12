import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Users, Sparkles, Car, Stethoscope, ShieldCheck, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '@/components/Section';
import { products } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the full Mahvion ecosystem — Vehicle ERP, Medscribe, Insurance Agent System, and Real Estate ERP. One brand, one login, four production-grade SaaS platforms.',
};

const iconMap: Record<string, LucideIcon> = { Car, Stethoscope, ShieldCheck, Building2 };

/* Industry-specific SVG line art for each product */
function VehicleLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Road perspective lines */}
      <line x1="200" y1="260" x2="50"  y2="80"  stroke="white" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5"/>
      <line x1="200" y1="260" x2="350" y2="80"  stroke="white" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5"/>
      <line x1="200" y1="260" x2="200" y2="60"  stroke="white" strokeWidth="1"   strokeDasharray="10 8" opacity="0.35"/>
      {/* Speedometer arcs */}
      <path d="M 200 180 m -90 0 a 90 90 0 0 1 180 0" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
      <path d="M 200 180 m -60 0 a 60 60 0 0 1 120 0" stroke="white" strokeWidth="1" opacity="0.2" fill="none"/>
      {/* VIN grid */}
      {[0,1,2,3].map(r => [0,1,2,3,4,5].map(c => (
        <rect key={`${r}-${c}`} x={10+c*65} y={10+r*30} width="55" height="22" rx="3"
          stroke="white" strokeWidth="0.5" opacity="0.12" fill="none"/>
      )))}
    </svg>
  );
}

function MedscribeLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* ECG heartbeat line */}
      <polyline
        points="0,130 60,130 80,130 95,60 110,200 125,130 145,130 165,100 185,160 200,130 400,130"
        stroke="white" strokeWidth="2" opacity="0.45" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Medical cross */}
      <rect x="178" y="40"  width="44" height="14" rx="7" fill="white" opacity="0.12"/>
      <rect x="192" y="26"  width="14" height="44" rx="7" fill="white" opacity="0.12"/>
      {/* Horizontal ruled lines (note lines) */}
      {[170,188,206,224,242].map(y => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="white" strokeWidth="0.5" opacity="0.12"/>
      ))}
      {/* Waveform dots */}
      {[60,95,110,125,145,165,185,200].map((x, i) => (
        <circle key={i} cx={x} cy={i % 2 === 0 ? 130 : (i < 4 ? 60 : 100)} r="3" fill="white" opacity="0.3"/>
      ))}
    </svg>
  );
}

function InsuranceLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Shield outline */}
      <path d="M200 20 L330 70 L330 160 Q330 230 200 260 Q70 230 70 160 L70 70 Z"
        stroke="white" strokeWidth="1.5" opacity="0.18" fill="none"/>
      <path d="M200 45 L305 85 L305 158 Q305 215 200 238 Q95 215 95 158 L95 85 Z"
        stroke="white" strokeWidth="1" opacity="0.1" fill="none"/>
      {/* Network nodes */}
      {[[200,130],[120,90],[280,90],[100,180],[300,180],[200,220]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="white" opacity="0.2"/>
      ))}
      {/* Network lines */}
      {[[200,130,120,90],[200,130,280,90],[200,130,100,180],[200,130,300,180],[200,130,200,220]].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" opacity="0.15" strokeDasharray="4 3"/>
      ))}
      {/* Check mark */}
      <polyline points="165,130 190,155 240,105" stroke="white" strokeWidth="3" opacity="0.3"
        fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RealEstateLines() {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Blueprint grid */}
      {[0,1,2,3,4,5,6,7,8].map(c => (
        <line key={`v${c}`} x1={c*50} y1="0" x2={c*50} y2="260" stroke="white" strokeWidth="0.4" opacity="0.1"/>
      ))}
      {[0,1,2,3,4,5].map(r => (
        <line key={`h${r}`} x1="0" y1={r*52} x2="400" y2={r*52} stroke="white" strokeWidth="0.4" opacity="0.1"/>
      ))}
      {/* Building silhouette */}
      <rect x="130" y="60"  width="140" height="180" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none"/>
      <rect x="155" y="30"  width="90"  height="50"  stroke="white" strokeWidth="1"   opacity="0.2"  fill="none"/>
      <rect x="175" y="10"  width="50"  height="30"  stroke="white" strokeWidth="1"   opacity="0.15" fill="none"/>
      {/* Windows grid */}
      {[0,1,2,3].map(r => [0,1,2].map(c => (
        <rect key={`w${r}${c}`} x={145+c*38} y={80+r*40} width="22" height="22" rx="2"
          stroke="white" strokeWidth="0.8" opacity="0.18" fill="none"/>
      )))}
      {/* Door */}
      <rect x="183" y="198" width="34" height="42" rx="2" stroke="white" strokeWidth="1" opacity="0.25" fill="none"/>
    </svg>
  );
}

const lineArt: Record<string, React.ComponentType> = {
  'vehicle-erp': VehicleLines,
  'medscribe': MedscribeLines,
  'insurance': InsuranceLines,
  'real-estate': RealEstateLines,
};

/* Gradient accent colors per product for the article background glow */
const glowColor: Record<string, string> = {
  'vehicle-erp':  'rgba(99,102,241,0.12)',
  'medscribe':    'rgba(16,185,129,0.10)',
  'insurance':    'rgba(245,158,11,0.10)',
  'real-estate':  'rgba(236,72,153,0.10)',
};

export default function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Products"
        title="Four products. One ecosystem."
        subtitle="Each Mahvion product is built to run an entire industry workflow end-to-end. Pick the one you need today — add the others when you're ready."
      />

      <div className="container-x space-y-28 pb-28">
        {products.map((p, i) => {
          const reverse = i % 2 === 1;
          const BgIcon = iconMap[p.icon];
          const LineArt = lineArt[p.slug];
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-violet-900/20 p-8 lg:p-12"
              style={{ background: `radial-gradient(ellipse 70% 80% at ${reverse ? '80%' : '20%'} 50%, ${glowColor[p.slug]}, transparent 70%), var(--surface)` }}
            >
              {/* Large watermark icon */}
              {BgIcon && (
                <BgIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute text-white opacity-[0.04]"
                  style={{ width: 340, height: 340, bottom: -40, [reverse ? 'left' : 'right']: -40 }}
                />
              )}

              {/* Industry line-art illustration */}
              {LineArt && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute opacity-[0.22]"
                  style={{ width: 320, height: 210, bottom: 20, [reverse ? 'left' : 'right']: 20 }}
                >
                  <LineArt />
                </div>
              )}

              <div className={`relative grid items-start gap-10 lg:grid-cols-2`}>
                <div className={reverse ? 'lg:order-2' : ''}>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${p.color} px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm`}
                  >
                    {p.tagline}
                  </span>
                  <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    {p.longDescription}
                  </p>

                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-violet-900/30 bg-white/[0.03] p-4">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Built for</p>
                      <p className="mt-1 text-sm text-slate-300">{p.audience}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.techStack.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-primary text-sm">Book a demo</Link>
                  </div>
                </div>

                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="card">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-200">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                      Key modules
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {p.modules.map((m) => (
                        <li key={m} className="flex items-start gap-3 text-sm text-slate-400">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-violet-900/30 pt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">What you&apos;ll see</h4>
                      <ul className="mt-3 space-y-2">
                        {p.outcomes.map((o) => (
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

      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section
          eyebrow="What&apos;s next"
          title="More products are joining the ecosystem"
          subtitle="Logistics, hospitality, and construction are on our roadmap — built on the same shared data layer, login, and design system."
        >
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/contact" className="btn-primary">Tell us what you&apos;d like to see</Link>
          </div>
        </Section>
      </div>
    </>
  );
}
