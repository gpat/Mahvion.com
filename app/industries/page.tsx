import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Stethoscope, ShieldCheck, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Mahvion builds AI-first SaaS products for automotive, healthcare, insurance, and real estate — purpose-built for each industry\'s unique workflows.',
};

const industries = [
  {
    icon: Car,
    color: 'from-indigo-500 to-blue-600',
    ring: 'ring-indigo-500/30',
    glow: 'bg-indigo-600/10',
    label: 'Automotive',
    title: 'Vehicle Dealerships & Fleet',
    problems: [
      'Disconnected spreadsheets and legacy DMS tools',
      'No visibility across branches or stock aging',
      'Manual deal paperwork slows closures',
    ],
    solution: 'Vehicle ERP replaces fragmented tools with a single AI-powered dealership management system — VIN traceability, AI finance workflows, and multi-branch accounting in one platform.',
    stat: '60% faster deal closure',
    href: '/products#vehicle-erp',
    audience: 'Auto dealerships · Used-car lots · Fleet operators · Multi-brand showrooms',
  },
  {
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
    ring: 'ring-emerald-500/30',
    glow: 'bg-emerald-600/10',
    label: 'Healthcare',
    title: 'Clinics, Hospitals & Specialists',
    problems: [
      'Physicians spend 2+ hours daily on documentation',
      'Coding errors and missed ICD-10 entries',
      'HIPAA audit exposure from incomplete access logs',
    ],
    solution: 'Medscribe transcribes consultations into SOAP notes and e-prescriptions in under 3 seconds — with medical NLP, FHIR R4 records, and a tamper-evident HIPAA audit trail.',
    stat: '2+ hours saved per clinician per day',
    href: '/products#medscribe',
    audience: 'Physicians · Specialists · Dentists · Clinic chains · Hospital groups',
  },
  {
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-600',
    ring: 'ring-amber-500/30',
    glow: 'bg-amber-600/10',
    label: 'Insurance',
    title: 'Agents, Brokers & Agencies',
    problems: [
      'Manually comparing quotes across carriers wastes hours',
      'Renewals fall through without systematic follow-up',
      'Commission disputes from opaque ledgers',
    ],
    solution: 'Insurance Agent System connects to 10+ carriers simultaneously, ranks quotes by AI, automates 90/60/30-day renewal sequences, and maintains a fully reconciled commission ledger.',
    stat: '25% higher renewal retention',
    href: '/products#insurance',
    audience: 'Independent agents · Brokers · Agency owners · Multi-carrier teams',
  },
  {
    icon: Building2,
    color: 'from-pink-500 to-rose-600',
    ring: 'ring-pink-500/30',
    glow: 'bg-pink-600/10',
    label: 'Real Estate',
    title: 'Property Managers & Developers',
    problems: [
      'Lease turnarounds take weeks of manual back-and-forth',
      'Rent delinquency from missed reminders',
      'Owner reporting requires a separate accounting team',
    ],
    solution: 'Real Estate ERP manages the full property lifecycle — MLS sync, digital lease execution, AI rent collection via ACH/UPI, AI maintenance triage, and GAAP-compliant owner statements.',
    stat: '40% reduction in rent delinquency',
    href: '/products#real-estate',
    audience: 'Property managers · Developers · REITs · Brokerages · Rental operators',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Section
        eyebrow="Industries"
        title="Purpose-built for your industry"
        subtitle="Generic software forces your team to work around it. Every Mahvion product is designed from the ground up for the workflows, compliance requirements, and data models of a specific industry."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {industries.map(({ icon: Icon, color, ring, glow, label, title, problems, solution, stat, href, audience }) => (
            <div key={label} className={`card relative overflow-hidden ring-1 ${ring}`}>
              <div className={`pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full ${glow} blur-3xl`} />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</span>
                    <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Common pain points</p>
                  <ul className="space-y-1.5">
                    {problems.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-lg border border-violet-900/30 bg-white/[0.03] p-4">
                  <p className="text-sm leading-relaxed text-slate-300">{solution}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">{stat}</span>
                  </div>
                  <Link href={href} className="flex items-center gap-1 text-sm font-medium text-violet-400 transition hover:text-violet-300">
                    See product <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="mt-3 text-xs text-slate-600">{audience}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="section">
        <div className="container-x text-center">
          <span className="eyebrow-cyan">Don't see your industry?</span>
          <h2 className="h-title mt-4">We build custom AI products too.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            The Mahvion AI platform isn&rsquo;t limited to four verticals. If you have a workflow problem in any industry, we can design and ship an AI-powered product for it — typically in weeks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Discuss Your Industry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost">
              Browse Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
