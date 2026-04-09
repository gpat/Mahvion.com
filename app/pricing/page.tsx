import type { Metadata } from 'next';
import Section from '@/components/Section';
import PricingCards from '@/components/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent monthly and yearly pricing for every Mahvion SaaS product.',
};

export default function PricingPage() {
  return (
    <Section
      eyebrow="Pricing"
      title="Plans that scale with you"
      subtitle="Choose monthly or yearly billing. Cancel anytime."
    >
      <PricingCards />
    </Section>
  );
}
