import type { Metadata } from 'next';
import { MessageSquare, Wrench, Handshake } from 'lucide-react';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Mahvion — Engineering Company Behind 5 Industry Platforms',
  description: `${site.name} is a product engineering company building production-grade SaaS for auto dealerships, clinical practice, insurance agencies, and real estate — on a single unified platform.`,
};

const stats = [
  { value: '5', label: 'SaaS Platforms' },
  { value: '4', label: 'Live Today' },
  { value: '5', label: 'Industries' },
  { value: '3', label: 'Service Lines' },
  { value: 'RBAC', label: 'Access Control' },
  { value: 'TLS', label: 'Encrypted in Transit' },
];

const techStack = [
  {
    category: 'Application Layer',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js / Express', 'Python / Flask'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'Prisma ORM', 'Drizzle ORM', 'Neo4j Graph Database', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'AI & ML',
    items: ['LLM Integration', 'AI Lead Auto-Reply', 'AI Content Generation', 'AI Research Agent', 'Speech-to-Text (Medscribe)'],
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Docker & Docker Compose', 'Nginx Reverse Proxy', "Let's Encrypt TLS", 'PM2 Process Manager', 'Automated DB Migrations', 'Scheduled Jobs & Cron'],
  },
  {
    category: 'Security & Compliance',
    items: ['HTTPS / TLS Everywhere', 'JWT Authentication', 'Role-based Access Control', 'HttpOnly Session Cookies', 'Tenant Data Isolation', 'Rate Limiting'],
  },
  {
    category: 'Integrations & APIs',
    items: ['REST APIs', 'Meta Lead Ads Webhooks', 'WhatsApp Business API', 'Firebase Cloud Messaging', 'SMTP Email', 'CSV Import / Export'],
  },
];

const principles = [
  {
    title: 'Architecture for scale, not demos',
    body: 'Our platforms are designed as multi-tenant systems from the start, with each customer\'s data kept separate. We design for growth before we onboard the first user. No prototypes shipped as production.',
  },
  {
    title: 'Security as a first principle',
    body: 'Security is not a feature added at the end of a sprint. Encryption, access control, and audit trails are architectural requirements on day zero — across every product.',
  },
  {
    title: 'AI integrated, not bolted on',
    body: 'Our AI features — instant replies to new leads, content generation, and research assistance — are built into the core workflow. They remove keystrokes, not just add features.',
  },
  {
    title: 'One brand, one standard',
    body: 'Every product follows the same Mahvion design language, security baseline, and engineering practices — so moving from one Mahvion product to another feels familiar.',
  },
  {
    title: 'Reliability is an engineering priority',
    body: 'We monitor our services in production, log what matters, and treat performance and availability as engineering responsibilities — not afterthoughts.',
  },
  {
    title: 'Continuous delivery, not big bang releases',
    body: 'Short release cycles and automated deployments mean customers see improvements continuously, not in one risky release a year.',
  },
];

const founderLed = [
  {
    icon: MessageSquare,
    title: 'You talk to the people building it',
    body: 'No account managers relaying messages. Your questions, feedback, and feature requests go straight to the people who design and write the software.',
  },
  {
    icon: Wrench,
    title: 'Hands-on from first call to go-live',
    body: 'The same team scopes your requirement, builds or configures the solution, and supports you after launch — so nothing gets lost in hand-offs.',
  },
  {
    icon: Handshake,
    title: 'Built alongside real customers',
    body: 'Every Mahvion product started with a real business and its real workflow. We keep building that way — shipping improvements based on what customers actually use.',
  },
];

const values = [
  { label: 'Craft over convenience', body: 'We do not ship fast at the cost of correctness. Every module is tested, reviewed, and documented before it touches a production user.' },
  { label: 'Transparent by default', body: 'We tell customers what changed, what went wrong, and what is coming next. We do not hide incidents behind marketing language.' },
  { label: 'Deep before broad', body: 'Each product solves an entire industry workflow before we expand to the next. Depth over surface area, always.' },
  { label: 'Respect the operator', body: 'Our users are vehicle traders, insurance agents, builders, and sales teams — not developers. Software must earn their trust every single session.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section
        eyebrow="About Mahvion"
        title="The engineering company behind 5 industry operating systems"
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
            We started with Vehicle ERP, built around how vehicle traders actually operate — not how software vendors assumed they did. Purchases from dealers in different cities, godown stock, bookings, sales, transport, and profit all moved out of spreadsheets and into one system, with each team member seeing only what their role needs.
          </p>
          <p>
            From there we extended the same engineering philosophy — deep domain knowledge, production-first architecture, and genuine respect for the end user — to insurance agency management, real estate development, and lead generation for sales teams — with clinical documentation (Medscribe) now in development. Five products. One engineering standard. One design system.
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
          Every product in the ecosystem is built on the same core platform — a shared infrastructure layer that delivers consistent performance, security, and developer velocity across all five verticals.
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

      {/* Founder-led */}
      <Section
        eyebrow="How we work"
        title="Founder-led, and proud of it."
        subtitle="Mahvion is a focused, founder-led team. That means direct access, fast decisions, and real accountability for everything we ship."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {founderLed.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card flex flex-col gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-grad-hero text-white shadow-lg shadow-violet-600/25">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-semibold text-slate-100">{title}</p>
              <p className="text-sm leading-relaxed text-slate-400">{body}</p>
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
