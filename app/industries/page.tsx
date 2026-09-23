import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Stethoscope, ShieldCheck, Building2, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Mahvion builds software for automotive, healthcare, insurance, real estate, and sales teams — purpose-built for each industry\'s workflows.',
};

const industries = [
  {
    icon: Car,
    color: 'from-indigo-500 to-blue-600',
    ring: 'ring-indigo-500/30',
    glow: 'bg-indigo-600/10',
    label: 'Automotive',
    title: 'Vehicle Traders & Dealers',
    problems: [
      'Purchases, stock, and sales tracked across separate spreadsheets',
      'No clear view of which vehicles are in the godown, booked, or sold',
      'Profit and pending balances worked out by hand',
    ],
    solution: 'Vehicle ERP tracks every vehicle from purchase to godown to booking to sale — with documents, transport, profit, and live dashboards in one system, and role-based access for each team member.',
    stat: 'Every vehicle, from purchase to sale',
    href: '/products/vehicle-erp',
    audience: 'Vehicle traders · Multi-city dealers · Used-vehicle businesses',
  },
  {
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
    ring: 'ring-emerald-500/30',
    glow: 'bg-emerald-600/10',
    label: 'Healthcare',
    title: 'Clinics & Independent Doctors',
    problems: [
      'Clinicians lose hours every day to typing notes',
      'Notes are inconsistent and incomplete when written in a rush',
      'Patient history is scattered across paper and files',
    ],
    solution: 'Medscribe, currently in development, will turn consultations into structured clinical notes and draft prescriptions for the clinician to review — with visit history and an access audit log.',
    stat: 'In development — early access open',
    href: '/products/medscribe',
    audience: 'Independent doctors · Specialists · Dental practices · Clinics',
  },
  {
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-600',
    ring: 'ring-amber-500/30',
    glow: 'bg-amber-600/10',
    label: 'Insurance',
    title: 'Insurance & Loan Agents',
    problems: [
      'Renewals missed because due dates live in diaries and spreadsheets',
      'No single view of a client\'s family, policies, and claims',
      'No time to greet every client on birthdays and festivals',
    ],
    solution: 'The Insurance Agent System keeps every client, family member, policy, claim, lead, and loan in one place — and automatically sends birthday, anniversary, festival, and renewal emails every morning.',
    stat: 'No renewal or birthday missed',
    href: '/products/insurance',
    audience: 'Insurance agents · LIC advisors · Loan agents · Channel partners',
  },
  {
    icon: Building2,
    color: 'from-pink-500 to-rose-600',
    ring: 'ring-pink-500/30',
    glow: 'bg-pink-600/10',
    label: 'Real Estate',
    title: 'Builders & Developers',
    problems: [
      'Unit availability and bookings tracked separately for each project',
      'Customer payments and dues reconciled by hand',
      'Expenses paid out without a clear approval trail',
    ],
    solution: 'Real Estate ERP manages projects, units, customers, bookings, payments, expenses with approvals, tenders, and reports in one system — from first enquiry to handover.',
    stat: 'Every unit, payment, and expense tracked',
    href: '/products/real-estate',
    audience: 'Builders · Developers · Construction companies · Real estate firms',
  },
  {
    icon: Target,
    color: 'from-sky-500 to-cyan-600',
    ring: 'ring-sky-500/30',
    glow: 'bg-sky-600/10',
    label: 'Sales & Marketing',
    title: 'Sales Teams & Lead-driven Businesses',
    problems: [
      'Ad leads sit in Facebook and WhatsApp until someone copies them over',
      'Slow first responses let hot leads go cold',
      'No clear view of who is following up on which lead',
    ],
    solution: 'Lead Generation CRM captures every Facebook and WhatsApp lead automatically, replies instantly with an AI bot, auto-assigns it to a salesperson, and tracks it through the pipeline to a closed deal.',
    stat: 'Every lead answered in seconds',
    href: '/products/lead-crm',
    audience: 'Sales teams · Marketing agencies · Brokers · Consultants · Paid-ad advertisers',
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
                    View product <ArrowRight className="h-3.5 w-3.5" />
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
            The Mahvion AI platform isn&rsquo;t limited to five verticals. If you have a workflow problem in any industry, we can design and ship an AI-powered product for it — typically in weeks.
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
