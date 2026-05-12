import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Users2,
  CalendarCheck,
  CreditCard,
  BarChart3,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Building2,
  ChevronRight,
  FileSpreadsheet,
  MessageSquare,
  EyeOff,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate ERP · Mahvion',
  description:
    'Track leads, bookings, and payments in one place. Built for real estate developers and builders in UAE, Australia, and India.',
};

/* ─── data ─────────────────────────────────────────────────────────────── */

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Buried in spreadsheets',
    body: 'Lead lists spread across dozens of Excel files with no single source of truth.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp chaos',
    body: 'Booking updates and payment confirmations lost in group chats with channel partners.',
  },
  {
    icon: EyeOff,
    title: 'Zero booking visibility',
    body: 'No real-time view of which units are sold, reserved, or available across projects.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue is a black box',
    body: 'Inward and outward payments manually reconciled at month-end — errors guaranteed.',
  },
];

const features = [
  {
    icon: Users2,
    title: 'Lead & Channel Partner Management',
    body: 'Capture, assign, and track every lead from your channel partners in one pipeline. Set commissions, track conversions, and keep partners accountable.',
    tag: 'CRM',
  },
  {
    icon: CalendarCheck,
    title: 'Booking & Unit Tracker',
    body: 'Real-time unit availability across all your projects. Raise bookings, attach documents, and move units from reserved to sold in a click.',
    tag: 'Operations',
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking (In & Out)',
    body: 'Log every inward collection and outward disbursement. Auto-reconcile against booking milestones and generate payment receipts instantly.',
    tag: 'Finance',
  },
  {
    icon: BarChart3,
    title: 'Revenue Dashboard',
    body: 'Live view of total bookings, collections, pending dues, and channel partner payouts — all on one screen, updated in real time.',
    tag: 'Analytics',
  },
  {
    icon: Sparkles,
    title: 'AI Follow-Up Suggestions',
    body: 'Mahvion AI surfaces the right follow-up action for each lead based on engagement history, booking stage, and payment status.',
    tag: 'AI',
  },
];

const steps = [
  { label: 'Lead Captured', desc: 'Via portal, walk-in, or partner' },
  { label: 'Unit Booked', desc: 'Agreement raised, docs signed' },
  { label: 'Payment Collected', desc: 'Milestones tracked automatically' },
  { label: 'Revenue Recognised', desc: 'Dashboard updates instantly' },
];

const metrics = [
  { value: '3×', label: 'Faster lead-to-booking conversion' },
  { value: '100%', label: 'Payment visibility across projects' },
  { value: '0', label: 'Spreadsheets needed' },
];

/* ─── sub-components ────────────────────────────────────────────────────── */

function SkyEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
      {children}
    </span>
  );
}

function GridBg() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="re-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#re-grid)" />
    </svg>
  );
}

function HeroDashboard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0a1628] shadow-2xl shadow-sky-900/30">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0c1a2e] px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500">
          app.mahvion.com/real-estate/dashboard
        </span>
      </div>

      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="col-span-2 hidden border-r border-white/[0.05] bg-[#091525] p-4 md:block">
          {['Dashboard', 'Leads', 'Units', 'Payments', 'Partners', 'Reports'].map((item, i) => (
            <div
              key={item}
              className={`mb-1.5 rounded-lg px-3 py-2 text-xs font-medium ${
                i === 0
                  ? 'bg-sky-500/15 text-sky-400'
                  : 'text-slate-600 hover:text-slate-400'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="col-span-12 p-5 md:col-span-10">
          {/* KPI row */}
          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Active Leads', value: '1,284', delta: '+12%', color: 'text-sky-400' },
              { label: 'Units Booked', value: '347', delta: '+8%', color: 'text-emerald-400' },
              { label: 'Collections', value: '₹42.6 Cr', delta: '+19%', color: 'text-violet-400' },
              { label: 'Pending Dues', value: '₹8.1 Cr', delta: '-3%', color: 'text-amber-400' },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                  {kpi.label}
                </p>
                <p className={`mt-1 text-lg font-bold ${kpi.color}`}>{kpi.value}</p>
                <p className="text-[10px] text-slate-600">{kpi.delta} this month</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* Collections chart */}
            <div className="col-span-2 h-28 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                Monthly Collections (₹ Cr)
              </p>
              <div className="flex h-16 items-end gap-1.5">
                {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-600/60 to-sky-400/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Unit status */}
            <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                Unit Status
              </p>
              <div className="space-y-1.5">
                {[
                  { label: 'Available', count: 42, color: 'bg-emerald-500/60' },
                  { label: 'Reserved', count: 18, color: 'bg-amber-500/60' },
                  { label: 'Sold', count: 94, color: 'bg-sky-500/60' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${s.color}`} />
                      <span className="text-slate-500">{s.label}</span>
                    </div>
                    <span className="font-semibold text-slate-400">{s.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadPipelineScreen() {
  const stages = [
    {
      label: 'New',
      color: 'border-slate-700/60',
      leads: [
        { name: 'Arun Sharma', src: 'UAE', unit: 'Tower B · 3BHK' },
        { name: 'Priya Mehta', src: 'India', unit: 'Villa 12' },
      ],
    },
    {
      label: 'Site Visit',
      color: 'border-sky-500/30',
      leads: [
        { name: 'James O.', src: 'Australia', unit: 'Apt 4A' },
        { name: 'Ravi Kumar', src: 'India', unit: 'Tower C · 2BHK' },
      ],
    },
    {
      label: 'Negotiation',
      color: 'border-violet-500/30',
      leads: [{ name: 'Sara Al M.', src: 'UAE', unit: 'Penthouse 1' }],
    },
    {
      label: 'Booked',
      color: 'border-emerald-500/30',
      leads: [
        { name: 'Chen Wei', src: 'Australia', unit: 'Apt 7B' },
        { name: 'Meera S.', src: 'India', unit: 'Villa 4' },
      ],
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0a1628]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0c1a2e] px-4 py-2.5">
        <span className="text-[11px] font-semibold text-sky-400">Lead Pipeline</span>
        <span className="ml-auto rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-400">
          Live
        </span>
      </div>
      <div className="grid grid-cols-4 gap-0 divide-x divide-white/[0.04] p-0">
        {stages.map((stage) => (
          <div key={stage.label} className="p-3">
            <p
              className={`mb-2 rounded border px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400 ${stage.color}`}
            >
              {stage.label}
            </p>
            <div className="space-y-2">
              {stage.leads.map((lead) => (
                <div
                  key={lead.name}
                  className="rounded-lg border border-white/[0.05] bg-white/[0.03] p-2"
                >
                  <p className="text-[10px] font-semibold text-slate-300">{lead.name}</p>
                  <p className="text-[9px] text-slate-600">
                    {lead.src} · {lead.unit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UnitGridScreen() {
  const towers = [
    { name: 'Tower A', floors: 8, unitsPerFloor: 4 },
    { name: 'Tower B', floors: 8, unitsPerFloor: 4 },
  ];

  const unitStatus = (towerIdx: number, floor: number, unit: number): string => {
    const seed = towerIdx * 100 + floor * 10 + unit;
    if (seed % 5 === 0) return 'reserved';
    if (seed % 3 === 0) return 'sold';
    return 'available';
  };

  const colorMap: Record<string, string> = {
    available: 'bg-emerald-500/40 border-emerald-500/30',
    reserved: 'bg-amber-500/40 border-amber-500/30',
    sold: 'bg-sky-500/40 border-sky-500/30',
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0a1628]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#0c1a2e] px-4 py-2.5">
        <span className="text-[11px] font-semibold text-sky-400">Unit Availability · Project Aura</span>
        <div className="ml-auto flex items-center gap-3 text-[9px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-emerald-500/60" /> Available
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-amber-500/60" /> Reserved
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-sky-500/60" /> Sold
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-white/[0.04] p-3 gap-0">
        {towers.map((tower, tIdx) => (
          <div key={tower.name} className="px-2">
            <p className="mb-2 text-[10px] font-semibold text-slate-400">{tower.name}</p>
            <div className="space-y-1">
              {Array.from({ length: tower.floors }, (_, f) => (
                <div key={f} className="flex items-center gap-1">
                  <span className="w-4 text-right text-[8px] text-slate-700">{tower.floors - f}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: tower.unitsPerFloor }, (_, u) => {
                      const status = unitStatus(tIdx, f, u);
                      return (
                        <div
                          key={u}
                          className={`h-4 w-7 rounded-sm border text-[7px] flex items-center justify-center font-medium ${colorMap[status]}`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentTrackerScreen() {
  const records = [
    { booking: 'B-2041 · Sara Al M.', milestone: 'Token', amount: '₹5 L', due: 'Apr 1', status: 'paid' },
    { booking: 'B-2041 · Sara Al M.', milestone: '10% on Agreement', amount: '₹18 L', due: 'Apr 15', status: 'paid' },
    { booking: 'B-2041 · Sara Al M.', milestone: '20% on Foundation', amount: '₹36 L', due: 'Jun 30', status: 'pending' },
    { booking: 'B-1987 · Meera S.', milestone: 'Token', amount: '₹3 L', due: 'Mar 20', status: 'paid' },
    { booking: 'B-1987 · Meera S.', milestone: '10% on Agreement', amount: '₹12 L', due: 'Apr 10', status: 'overdue' },
  ];

  const badgeMap: Record<string, string> = {
    paid: 'bg-emerald-500/10 text-emerald-400',
    pending: 'bg-sky-500/10 text-sky-400',
    overdue: 'bg-red-500/10 text-red-400',
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0a1628]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0c1a2e] px-4 py-2.5">
        <span className="text-[11px] font-semibold text-sky-400">Payment Milestones</span>
        <span className="ml-auto rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] text-red-400">
          1 Overdue
        </span>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-2 pb-2 text-[9px] font-semibold uppercase tracking-wider text-slate-600">
          <span className="col-span-2">Booking · Milestone</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        <div className="space-y-1.5">
          {records.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] px-2 py-1.5 text-[10px]"
            >
              <div className="col-span-2">
                <p className="font-medium text-slate-300 truncate">{r.booking}</p>
                <p className="text-[9px] text-slate-600">{r.milestone} · Due {r.due}</p>
              </div>
              <span className="self-center font-semibold text-slate-300">{r.amount}</span>
              <span
                className={`self-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold capitalize w-fit ${badgeMap[r.status]}`}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────── */

export default function RealEstatePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(6,182,212,0.12) 0%, transparent 60%), #05080f',
          }}
        />
        <GridBg />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl"
        />

        <div className="container-x relative text-center">
          <SkyEyebrow>Real Estate ERP · UAE · Australia · India</SkyEyebrow>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            From first lead to final{' '}
            <span className="grad-text-cyan">payment</span>
            {' '}—{' '}
            <br className="hidden sm:block" />
            one platform for builders
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Mahvion replaces the spreadsheets, WhatsApp groups, and disconnected tools your
            team uses today. Manage leads, channel partners, unit bookings, and payment
            collections in one real-time system.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-cyan text-base px-8 py-3.5">
              Book a Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#how-it-works" className="btn-ghost text-base">
              See how it works
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {['No credit card required', '15-min setup demo', 'Trusted by builders across 3 countries'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sky-500/70" />
                {t}
              </span>
            ))}
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl"
            />
            <div className="relative">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS BAR ──────────────────────────────────────────────── */}
      <div className="border-y border-sky-900/30 bg-[#060d1a]">
        <div className="container-x grid grid-cols-1 divide-y divide-sky-900/20 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((m) => (
            <div key={m.label} className="py-6 text-center sm:py-0">
              <p className="text-4xl font-extrabold grad-text-cyan">{m.value}</p>
              <p className="mt-1 text-sm text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. PROBLEM ──────────────────────────────────────────────────── */}
      <section className="section container-x">
        <div className="text-center">
          <SkyEyebrow>The Problem</SkyEyebrow>
          <h2 className="mt-5 h-title">
            Most builders still run on{' '}
            <span className="text-red-400">Excel + WhatsApp</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            It works until it doesn&apos;t. The moment you&apos;re managing multiple projects,
            dozens of channel partners, and hundreds of bookings — things fall apart.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-red-900/20 bg-red-950/10 p-6 transition-all duration-300 hover:border-red-700/30 hover:shadow-lg hover:shadow-red-900/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                  <Icon className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-200">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-amber-900/20 bg-amber-950/10 p-5 sm:items-center">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400 sm:mt-0" />
          <p className="text-sm text-slate-400">
            <span className="font-semibold text-amber-400">The real cost: </span>
            Missed follow-ups, double-booked units, delayed collections, and channel partners
            who lose trust — all because your data lives in 12 different places.
          </p>
        </div>
      </section>

      {/* ── 4. SOLUTION ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 70%), var(--surface)',
        }}
      >
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SkyEyebrow>The Solution</SkyEyebrow>
              <h2 className="mt-5 h-title">
                Track leads, bookings, and payments{' '}
                <span className="grad-text-cyan">in one place</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Mahvion is purpose-built for real estate builders. It gives your sales team,
                channel partners, accounts team, and management a single shared view of every
                project — live, accurate, and without the back-and-forth.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'One dashboard per project — units, bookings, collections',
                  'Channel partners log leads directly — you see everything',
                  'Payment milestones auto-tracked against each booking',
                  'AI surfaces the next best action for each lead',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact" className="btn-cyan">
                  See Mahvion in action <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Before / After */}
            <div className="grid gap-4">
              <div className="card-cyan">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-red-400">
                  Before Mahvion
                </p>
                <div className="space-y-3">
                  {[
                    'Lead in WhatsApp → maybe enters Excel',
                    'Booking confirmed via email → manually updated',
                    'Payment received → accounts team notified 3 days later',
                    'Unit status? Ask 4 different people',
                  ].map((row) => (
                    <div key={row} className="flex items-start gap-2.5 text-sm text-slate-500">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-red-700/40 text-center text-[10px] leading-[14px] text-red-500">
                        ✕
                      </span>
                      {row}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-cyan" style={{ borderColor: 'rgba(14,165,233,0.3)' }}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  After Mahvion
                </p>
                <div className="space-y-3">
                  {[
                    'Lead captured → auto-assigned, tracked in pipeline',
                    'Booking raised → agreement generated, unit locked',
                    'Payment logged → receipt sent, dashboard updated',
                    'Unit status? One glance at the project board',
                  ].map((row) => (
                    <div key={row} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                      {row}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FEATURES ─────────────────────────────────────────────────── */}
      <section className="section container-x">
        <div className="text-center">
          <SkyEyebrow>Features</SkyEyebrow>
          <h2 className="mt-5 h-title">
            Everything your team needs,{' '}
            <span className="grad-text-cyan">nothing they don&apos;t</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Five core modules, designed to work together — so data flows from lead capture
            all the way through to revenue recognition without manual effort.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`card-cyan group relative overflow-hidden ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(14,165,233,0.1) 0%, transparent 70%)',
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/20">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                    <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-400">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-semibold text-slate-100">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="section scroll-mt-20"
        style={{ background: 'var(--surface-2)' }}
      >
        <div className="container-x">
          <div className="text-center">
            <SkyEyebrow>How it works</SkyEyebrow>
            <h2 className="mt-5 h-title">
              Lead to revenue in{' '}
              <span className="grad-text-cyan">four steps</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Mahvion guides your deal from the very first touch to final payment
              recognition — with zero data re-entry between steps.
            </p>
          </div>

          <div className="mt-14 grid gap-0 sm:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.label} className="group relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[calc(50%+36px)] top-[22px] hidden h-px w-[calc(100%-72px)] bg-gradient-to-r from-sky-500/40 to-sky-500/10 sm:block"
                  />
                )}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 text-sm font-bold text-sky-400 transition-all duration-300 group-hover:border-sky-400/70 group-hover:bg-sky-500/20 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                  {i + 1}
                </div>
                <div className="mt-4 px-3">
                  <p className="font-semibold text-slate-100">{step.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-4 h-5 w-5 rotate-90 text-sky-500/30 sm:hidden"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {[
              { title: 'Capture', items: ['Web portal', 'Walk-in entry', 'Partner portal', 'CSV import'] },
              { title: 'Book', items: ['Unit selection', 'Agreement gen', 'Document upload', 'Unit lock'] },
              { title: 'Collect', items: ['Milestone alerts', 'Payment log', 'Receipt issue', 'Reconciliation'] },
              { title: 'Report', items: ['Live dashboard', 'Partner payout', 'Revenue report', 'AI insights'] },
            ].map((col) => (
              <div key={col.title} className="rounded-xl border border-sky-900/20 bg-white/[0.02] p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {col.title}
                </p>
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 py-1 text-xs text-slate-500">
                    <span className="h-1 w-1 rounded-full bg-sky-500/50" />
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRODUCT SCREENS ──────────────────────────────────────────── */}
      <section className="section container-x">
        <div className="text-center">
          <SkyEyebrow>Product</SkyEyebrow>
          <h2 className="mt-5 h-title">
            Three views,{' '}
            <span className="grad-text-cyan">one truth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Your sales, ops, and finance teams each get the exact view they need — all pulling
            from the same live data.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-semibold text-slate-300">Lead Pipeline</p>
            <p className="mb-4 text-xs text-slate-500">
              Track every lead from first contact to booking across all channel partners.
            </p>
            <LeadPipelineScreen />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-slate-300">Unit Availability</p>
            <p className="mb-4 text-xs text-slate-500">
              Real-time floorplan view of every unit — available, reserved, or sold — per tower.
            </p>
            <UnitGridScreen />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-slate-300">Payment Milestones</p>
            <p className="mb-4 text-xs text-slate-500">
              All collections and outstanding dues in one ledger, with overdue alerts built in.
            </p>
            <PaymentTrackerScreen />
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(14,165,233,0.18) 0%, rgba(6,182,212,0.08) 40%, transparent 70%), linear-gradient(135deg, #060d1a 0%, #0c1a2e 100%)',
              border: '1px solid rgba(14,165,233,0.2)',
            }}
          >
            <GridBg />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"
            />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-500/30">
                <Building2 className="h-8 w-8 text-sky-400" />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Book a demo in{' '}
                <span className="grad-text-cyan">15 minutes</span>
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-lg text-slate-400">
                We&apos;ll walk you through the exact setup for your project — leads,
                channel partners, bookings, and payments. No slide decks. Just your
                workflow, live in Mahvion.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-cyan text-base px-10 py-4">
                  Book My Free Demo <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                {['No long-term contract', 'Live demo on your data', 'Onboarding included'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="neon-dot" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
