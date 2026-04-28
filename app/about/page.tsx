import type { Metadata } from 'next';
import Section from '@/components/Section';
import { products, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${site.name} — our vision, mission, and the team building production-grade SaaS for entire industries.`,
};

const team = [
  { name: 'Founder & CEO', role: 'Product & Vision' },
  { name: 'CTO', role: 'Engineering & Infra' },
  { name: 'Head of Design', role: 'Brand & UX' },
  { name: 'Head of Sales', role: 'Growth & Partnerships' },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About Us"
        title={`We build software that runs entire industries`}
        subtitle={`${site.name} ships ${products.length} production SaaS platforms today — for auto dealers, clinicians, insurance agents, and real estate teams. One brand, one login, one design system.`}
      />

      <div className="bg-grad-soft">
        <Section eyebrow="Our Mission" title="Empowering businesses through beautiful software">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-bold grad-text">Vision</h3>
              <p className="mt-3 text-slate-600">
                Become the most trusted multi-product SaaS ecosystem — where any traditional business can find a beautifully built tool that fits the way they actually work.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold grad-text">Mission</h3>
              <p className="mt-3 text-slate-600">
                Ship production-grade software that helps real businesses save time, cut costs, and grow sustainably — without the complexity of enterprise legacy tools.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Section eyebrow="Our Story" title="From one app to an ecosystem">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
          <p>
            {site.name} started with one ERP and a simple belief: software should be fast, clean, and respect the humans using it. We watched dealerships, clinics, agencies, and property teams suffer through legacy software that felt like punishment — and decided to ship the opposite.
          </p>
          <p>
            Today {site.name} runs four production SaaS platforms — Vehicle ERP, Medscribe, Insurance Agent System, and Real Estate ERP — under one brand, one login, and one design system. Each product solves an entire industry workflow, not just a slice of it.
          </p>
          <p>
            We're just getting started.
          </p>
        </div>
      </Section>

      <Section eyebrow="Team" title="The people behind the code">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="card text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-grad-hero" />
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
