import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/Section';
import { products, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Login · Access Apps',
  description: 'Access all Mahvion SaaS applications from one place.',
};

export default function LoginPage() {
  return (
    <Section
      eyebrow="App Access"
      title="Launch your app"
      subtitle="Select the Mahvion product you want to sign in to."
    >
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {products.map((p) => (
          <a
            key={p.slug}
            href={site.apps[p.href as keyof typeof site.apps]}
            className="card group flex items-center justify-between"
          >
            <div>
              <div className={`mb-3 inline-flex h-10 w-10 rounded-xl bg-gradient-to-br ${p.color}`} />
              <p className="text-lg font-bold">{p.name}</p>
              <p className="text-sm text-slate-500">{p.tagline}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
          </a>
        ))}
      </div>
    </Section>
  );
}
