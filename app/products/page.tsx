import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the Mahvion product suite — Vehicle ERP, Insurance Agent System, Real Estate ERP, Lead Generation CRM, and Medscribe (in development).',
};

export default function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Products"
        title="Software built for real businesses."
        subtitle="Each Mahvion product is built around the day-to-day workflow of one industry. Choose a product to see what it does, who it is for, and how to get started."
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
      </Section>

      <div style={{ background: 'linear-gradient(135deg,#0a0d1f 0%,#0f1535 100%)' }}>
        <Section
          eyebrow="What's next"
          title="Need something we haven't built yet?"
          subtitle="We design and build custom software on the same foundations as our products. Tell us about your workflow and we'll tell you honestly whether we can help."
        >
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Tell us what you need</Link>
            <Link href="/services" className="btn-ghost">See our services</Link>
          </div>
        </Section>
      </div>
    </>
  );
}
