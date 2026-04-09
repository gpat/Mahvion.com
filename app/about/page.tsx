import type { Metadata } from 'next';
import Section from '@/components/Section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${site.name} — our vision, mission, team, and story.`,
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
        title={`We're building the next generation of SaaS at ${site.name}`}
        subtitle="One brand. Multiple products. Built for teams that want to move fast without breaking things."
      />

      <div className="bg-grad-soft">
        <Section eyebrow="Our Mission" title="Empowering businesses through beautiful software">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-bold grad-text">Vision</h3>
              <p className="mt-3 text-slate-600">To become the world's most trusted multi-product SaaS ecosystem — where every business finds the right tool, beautifully designed.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold grad-text">Mission</h3>
              <p className="mt-3 text-slate-600">We ship production-grade software that helps real businesses save time, cut costs, and grow sustainably.</p>
            </div>
          </div>
        </Section>
      </div>

      <Section eyebrow="Our Story" title="From one app to an ecosystem">
        <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">
          {site.name} started with a single product and a simple belief: software should be fast, clean, and respect the humans using it. Today we ship multiple SaaS platforms across industries — all under one brand, one login, one vision.
        </p>
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
