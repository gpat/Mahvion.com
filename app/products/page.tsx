import type { Metadata } from 'next';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import { products, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the full Mahvion SaaS ecosystem — Vehicle ERP, Medscribe, Insurance, and Real Estate.',
};

export default function ProductsPage() {
  return (
    <Section
      eyebrow="Products"
      title="All Mahvion SaaS products"
      subtitle="Each product is battle-tested and production-grade. Future apps will join the same ecosystem."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard
            key={p.slug}
            name={p.name}
            tagline={p.tagline}
            description={p.description}
            color={p.color}
            icon={p.icon}
            href={site.apps[p.href as keyof typeof site.apps]}
            index={i}
          />
        ))}
        <div className="card flex flex-col items-center justify-center border-dashed text-center">
          <div className="mb-3 h-12 w-12 rounded-xl bg-grad-soft" />
          <h3 className="font-bold">Future SaaS Apps</h3>
          <p className="mt-2 text-sm text-slate-600">New products are in the pipeline. Stay tuned.</p>
        </div>
      </div>
    </Section>
  );
}
