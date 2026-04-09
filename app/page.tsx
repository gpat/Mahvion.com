import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import PricingCards from '@/components/PricingCards';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import { products, site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Our Ecosystem"
        title="One company. Many powerful SaaS products."
        subtitle={`${site.name} ships production-grade platforms that run entire industries.`}
        id="products"
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
        </div>
      </Section>

      <Section eyebrow="Why Choose Us" title="Built for scale, crafted for humans">
        <Features />
      </Section>

      <div className="bg-grad-soft">
        <Section eyebrow="Benefits" title="Everything you need. Nothing you don't.">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Save Time', 'Automations replace hours of manual work every day.'],
              ['Save Money', 'One subscription replaces 5+ legacy tools.'],
              ['Grow Faster', 'Insights and automations that accelerate revenue.'],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="text-xl font-bold grad-text">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section eyebrow="Pricing" title="Simple, transparent pricing">
        <PricingCards />
      </Section>

      <Section eyebrow="Testimonials" title="Loved by teams worldwide">
        <Testimonials />
      </Section>

      <Section eyebrow="Contact" title="Let's build something great together">
        <ContactForm />
      </Section>
    </>
  );
}
