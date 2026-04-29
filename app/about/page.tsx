import type { Metadata } from 'next';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Mahvion — Engineering Company Behind 4 Industry Platforms',
  description: `${site.name} is a product engineering company building production-grade SaaS for auto dealerships, clinical practice, insurance agencies, and real estate — on a single unified platform.`,
};

const stats = [
  { value: '4', label: 'Production SaaS Platforms' },
  { value: '4', label: 'Industries in Production' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'Median API Latency' },
  { value: '2-week', label: 'Release Cadence' },
  { value: 'SOC 2', label: 'Security Alignment' },
];

const techStack = [
  {
    category: 'Application Layer',
    items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript 5', 'Tailwind CSS', 'Framer Motion', 'tRPC'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL 16', 'Prisma ORM', 'Redis (Upstash)', 'S3-compatible Object Storage', 'Full-text Search (pg_trgm)'],
  },
  {
    category: 'AI & ML',
    items: ['Domain-trained Medical NLP', 'OpenAI Whisper (STT)', 'LLM-assisted Document Generation', 'Price Intelligence Engine', 'Lapse Risk Scoring Model'],
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Vercel Edge Network', 'Docker + GitHub Actions CI/CD', 'Zero-downtime Blue/Green Deploys', 'Automated DB Migrations', 'Sentry Error Monitoring', 'Vercel Analytics'],
  },
  {
    category: 'Security & Compliance',
    items: ['AES-256 Encryption at Rest', 'TLS 1.3 in Transit', 'JWT + Refresh Token Rotation', 'RBAC with Field-level Permissions', 'HIPAA BAA', 'SOC 2 Type II Controls'],
  },
  {
    category: 'Integrations & APIs',
    items: ['REST API + OpenAPI 3.1 Spec', 'Webhooks with HMAC Signatures', 'WebRTC (Tele-consult)', 'Razorpay / Stripe Payments', 'Twilio SMS / Voice', 'MLS / IDX Feed Sync'],
  },
];

const principles = [
  {
    title: 'Architecture for scale, not demos',
    body: 'Every product is built on a shared multi-tenant data model with row-level security. We design for 10,000 users before we onboard 10. No prototypes shipped as production.',
  },
  {
    title: 'Security as a first principle',
    body: 'Security is not a feature added at the end of a sprint. Encryption, access control, and audit trails are architectural requirements on day zero — across every product.',
  },
  {
    title: 'AI integrated, not bolted on',
    body: 'Our AI capabilities — medical transcription, quote generation, lapse prediction — are embedded into the core workflow. They eliminate keystrokes, not just time.',
  },
  {
    title: 'One platform, zero re-login',
    body: 'All four products share a unified identity layer. Customers, vehicles, properties, and clinical records sit on a shared data substrate — no cross-product duplication.',
  },
  {
    title: 'Observability at every layer',
    body: 'From edge latency to database query times, every service is instrumented. P95 latency, error budgets, and uptime are tracked as engineering KPIs, not afterthoughts.',
  },
  {
    title: 'Continuous delivery, not big bang releases',
    body: 'Two-week sprint cycles with automated CI/CD mean customers see improvements continuously. Feature flags let us ship safely to 1% before rolling out to all.',
  },
];

const team = [
  {
    title: 'Founder & CEO',
    focus: 'Product Strategy · Domain Expertise · Partnerships',
    detail: 'Drives the product vision and go-to-market across all four verticals. Deep domain knowledge in automotive operations, clinical workflow, and insurance lifecycle.',
  },
  {
    title: 'CTO',
    focus: 'Platform Architecture · Engineering Culture · Infra',
    detail: 'Owns the technical roadmap and multi-product architecture. Ensures every team ships against a consistent quality bar — from schema design to edge deployment.',
  },
  {
    title: 'Head of Design',
    focus: 'Design System · UX Research · Brand Identity',
    detail: 'Maintains the unified Mahvion design system shared across all four products. Owns usability research, interaction patterns, and the accessibility standard.',
  },
  {
    title: 'Head of Engineering',
    focus: 'Delivery · Code Quality · On-call Reliability',
    detail: 'Leads sprint planning, code review culture, and incident response. Holds the team accountable to CI/CD hygiene, test coverage thresholds, and SLA commitments.',
  },
  {
    title: 'Lead — AI & Data',
    focus: 'NLP Models · Analytics · Recommendation Engines',
    detail: 'Builds and maintains the domain-trained NLP models, lapse risk scoring, and price intelligence engine that power AI-native features across the ecosystem.',
  },
  {
    title: 'Head of Customer Success',
    focus: 'Onboarding · Retention · Feedback Loops',
    detail: 'Runs structured onboarding programs, monitors product adoption metrics, and converts customer feedback directly into prioritized engineering tickets.',
  },
];

const values = [
  { label: 'Craft over convenience', body: 'We do not ship fast at the cost of correctness. Every module is tested, reviewed, and documented before it touches a production user.' },
  { label: 'Transparent by default', body: 'Customers see our uptime history, changelog, and roadmap. We do not hide incidents behind marketing language.' },
  { label: 'Deep before broad', body: 'Each product solves an entire industry workflow before we expand to the next. Depth over surface area, always.' },
  { label: 'Respect the operator', body: 'Our users are dealership managers, doctors, and property owners — not developers. Software must earn their trust every single session.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section
        eyebrow="About Mahvion"
        title="The engineering company behind 4 industry operating systems"
        subtitle={`${site.name} is a product engineering company building production-grade, AI-native SaaS for the industries that keep the physical economy moving — automotive, healthcare, insurance, and real estate.`}
      />

      {/* Stats strip */}
      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <div className="container-x py-14">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl font-extrabold grad-text">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Story */}
      <Section eyebrow="Our Story" title="From one ERP to a cross-industry platform">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-400">
          <p>
            {site.name} was founded on a direct observation: the industries that run the physical economy — auto dealerships, medical clinics, insurance agencies, property firms — are still operating on software built in the 2000s. Legacy desktop tools, disconnected spreadsheets, and generic CRMs that were never designed for their workflows.
          </p>
          <p>
            We started with Vehicle ERP, a full dealer management system designed around how dealerships actually operate — not how software vendors assumed they did. We built VIN-level traceability, integrated finance structuring, and real-time parts management before we shipped version one. The signal from the market was immediate.
          </p>
          <p>
            From there we extended the same engineering philosophy — deep domain knowledge, production-first architecture, and genuine respect for the end user — to clinical documentation (Medscribe), insurance agency management, and real estate operations. Four products. One shared identity layer. One design system. One login.
          </p>
          <p>
            Today {site.name} is not building dashboards. We are building the operating systems for entire industries — and we are just getting started.
          </p>
        </div>
      </Section>

      {/* Mission + Vision */}
      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section eyebrow="Mission & Vision" title="What we are building toward">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">Vision</p>
              <h3 className="mt-3 text-xl font-bold text-slate-100">
                The most trusted multi-vertical SaaS ecosystem for traditional industries
              </h3>
              <p className="mt-3 text-slate-400">
                A world where every auto dealer, clinician, insurance agent, and property manager has access to software as powerful and polished as what the Fortune 500 uses — purpose-built for the way their business actually runs.
              </p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Mission</p>
              <h3 className="mt-3 text-xl font-bold text-slate-100">
                Ship production-grade, AI-native software that eliminates operational friction
              </h3>
              <p className="mt-3 text-slate-400">
                We replace fragmented legacy toolchains with integrated platforms that reduce manual work, surface intelligence, and scale with the business — without the complexity or cost of enterprise vendors.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Tech Stack */}
      <Section eyebrow="Technology" title="Built on a modern, battle-tested stack">
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-400">
          Every product in the ecosystem is built on the same core platform — a shared infrastructure layer that delivers consistent performance, security, and developer velocity across all four verticals.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((layer) => (
            <div key={layer.category} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">{layer.category}</p>
              <ul className="mt-4 space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Engineering Principles */}
      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section eyebrow="Engineering Culture" title="How we build">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Team */}
      <Section eyebrow="Leadership" title="The team behind the platform">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.title} className="card flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-grad-hero" />
                <div>
                  <p className="font-semibold text-slate-100">{m.title}</p>
                  <p className="text-xs text-violet-400">{m.focus}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section eyebrow="Company Values" title="What we stand for">
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.label} className="card">
                <h3 className="text-lg font-bold grad-text">{v.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
