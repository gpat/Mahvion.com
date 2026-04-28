import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the ${site.name} team.`,
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="We'd love to hear from you"
      subtitle="Questions about pricing, demos, integrations, or partnerships? Reach out."
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="card flex items-start gap-4">
            <Mail className="h-6 w-6 text-brand-600" />
            <div>
              <p className="font-semibold">Email</p>
              <a href={`mailto:${site.email}`} className="text-sm text-slate-600 hover:text-brand-600">
                {site.email}
              </a>
            </div>
          </div>
          <div className="card flex items-start gap-4">
            <Phone className="h-6 w-6 text-brand-600" />
            <div>
              <p className="font-semibold">Phone</p>
              <a
                href={`tel:${site.phone.replace(/\s+/g, '')}`}
                className="text-sm text-slate-600 hover:text-brand-600"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div className="card flex items-start gap-4">
            <MapPin className="h-6 w-6 text-brand-600" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-sm text-slate-600">Global · Remote First</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
