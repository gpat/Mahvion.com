import Link from 'next/link';
import { Bot, Code2, Rocket, ArrowRight, Zap, Shield, HeartHandshake, Car, Stethoscope, ShieldCheck, Building2, Target, ShieldAlert, Compass, Server } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import { products, services } from '@/lib/site';

const steps = [
  {
    step: '01',
    icon: Bot,
    title: 'Define Your Product',
    desc: 'We map your industry workflows, identify automation opportunities, and design the AI-first data model and architecture that powers your product.',
  },
  {
    step: '02',
    icon: Code2,
    title: 'Build with AI',
    desc: 'Our platform assembles LLMs, AI agents, RAG pipelines, and domain-specific AI into a production-grade SaaS — in weeks, not months.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Ship & Scale',
    desc: 'Deploy with role-based access, encrypted connections, and production monitoring — on infrastructure that grows with your usage.',
  },
];

const serviceIcons: Record<string, typeof Zap> = { ShieldAlert, Compass, Server };

const advantages = [
  {
    icon: Zap,
    title: 'Velocity by design',
    desc: 'AI-generated scaffolding, automated testing, and pre-built industry modules cut time-to-production from months to weeks.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Role-based access control, HTTPS everywhere, secure session handling, and isolated data for every customer workspace.',
  },
  {
    icon: HeartHandshake,
    title: 'Real human support',
    desc: 'Talk to engineers and AI product specialists — not chatbots. Onboarding, migration, and fine-tuning help included.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* AI Platform Capabilities */}
      <Section
        eyebrow="The AI Platform"
        title="Every AI technology. One unified platform."
        subtitle="We integrate the full AI stack — from foundation models to agentic workflows — so every product we ship is intelligent by default."
        id="platform"
      >
        <Features />
      </Section>

      {/* Products */}
      <div style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface-2) 40%, var(--bg) 100%)' }}>
        <Section
          eyebrow="Built With Mahvion AI"
          title="Products we have built."
          subtitle="Each product is built around the day-to-day workflow of one industry. Choose one to see what it does."
          id="products"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard
                key={p.slug}
                name={p.name}
                tagline={p.tagline}
                description={p.description}
                color={p.color}
                icon={p.icon}
                status={p.status}
                href={`/products/${p.slug}`}
                index={i}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-ghost text-sm">
              See full product details →
            </Link>
          </div>
        </Section>
      </div>

      {/* How it Works */}
      <Section
        eyebrow="How it Works"
        title="From idea to intelligent product, fast."
        subtitle="Our AI-first development process collapses the gap between vision and production."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="card relative overflow-hidden group">
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

      {/* Advantages */}
      <div style={{ background: 'linear-gradient(135deg, rgba(13,16,33,0.9) 0%, rgba(12,15,30,0.8) 100%)' }}>
        <Section eyebrow="Why Mahvion" title="Built for scale, crafted for humans.">
          <div className="grid gap-6 md:grid-cols-3">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-cyan flex gap-5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section
        eyebrow="Services"
        title="Beyond software."
        subtitle="The same engineering team behind our products helps you secure your systems, plan your technology, and run dependable IT infrastructure."
        id="services"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="card group relative flex flex-col overflow-hidden transition hover:ring-1 hover:ring-violet-500/40"
              >
                <div className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
                <div className="relative flex flex-1 flex-col">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-100">{s.name}</h3>
                  <p className="mt-1 text-sm font-medium text-violet-400">{s.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                  <span className="mt-6 flex items-center gap-1 border-t border-violet-900/30 pt-4 text-sm font-semibold text-slate-300 group-hover:text-violet-400">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Industries */}
      <Section
        eyebrow="Industries"
        title="AI built for your industry."
        subtitle="Every Mahvion product is designed from the ground up for the workflows and compliance requirements of a specific vertical."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Car, color: 'from-indigo-500 to-blue-600', label: 'Automotive', stat: 'Purchases, stock & sales in one place', href: '/products/vehicle-erp' },
            { icon: Stethoscope, color: 'from-emerald-500 to-teal-600', label: 'Healthcare', stat: 'AI clinical notes — in development', href: '/products/medscribe' },
            { icon: ShieldCheck, color: 'from-amber-500 to-orange-600', label: 'Insurance', stat: 'Automated renewal reminders', href: '/products/insurance' },
            { icon: Building2, color: 'from-pink-500 to-rose-600', label: 'Real Estate', stat: 'Projects, units & payments together', href: '/products/real-estate' },
            { icon: Target, color: 'from-sky-500 to-cyan-600', label: 'Sales & Marketing', stat: 'Instant AI reply to every lead', href: '/products/lead-crm' },
          ].map(({ icon: Icon, color, label, stat, href }) => (
            <Link key={label} href={href} className="card group flex flex-col items-center gap-4 text-center transition hover:ring-1 hover:ring-violet-500/40">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="font-semibold text-slate-100">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{stat}</p>
              </div>
              <span className="mt-auto flex items-center gap-1 text-xs font-medium text-violet-400 opacity-0 transition group-hover:opacity-100">
                View product <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/industries" className="btn-ghost text-sm">
            Explore all industries →
          </Link>
        </div>
      </Section>


      {/* CTA banner */}
      <section className="section relative overflow-hidden">
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(8,145,178,0.12) 100%)' }}
        />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[80px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-cyan-600/12 blur-[80px]" />

        <div className="container-x relative text-center">
          <span className="eyebrow-cyan">Ready to Build?</span>
          <h2 className="h-title mt-4">
            Your next product, powered by AI.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Whether you want to use one of our existing platforms or build something entirely new —
            the Mahvion AI stack is ready to power it. Let&rsquo;s ship together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Building <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-ghost">
              Browse Products
            </Link>
            <Link href="/services" className="btn-ghost">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Section eyebrow="Contact" title="Let's build something great together.">
        <ContactForm />
      </Section>
    </>
  );
}
