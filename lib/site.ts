export const site = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Mahvion',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mahvion.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@mahvion.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (000) 000-0000',
  description:
    'Mahvion builds modern SaaS platforms for vehicles, healthcare, insurance, and real estate — unified under one ecosystem.',
  apps: {
    erp: process.env.NEXT_PUBLIC_APP_ERP || 'https://erp.mahvion.com',
    med: process.env.NEXT_PUBLIC_APP_MED || 'https://med.mahvion.com',
    ins: process.env.NEXT_PUBLIC_APP_INS || 'https://ins.mahvion.com',
    real: process.env.NEXT_PUBLIC_APP_REAL || 'https://real.mahvion.com',
  },
};

export const products = [
  {
    slug: 'vehicle-erp',
    name: 'Vehicle ERP',
    tagline: 'Complete fleet & dealership management',
    description:
      'Manage inventory, sales, service, parts, accounting, and customers for dealerships and fleets in one unified ERP.',
    color: 'from-indigo-500 to-blue-600',
    icon: 'Car',
    href: 'erp',
  },
  {
    slug: 'medscribe',
    name: 'Medscribe',
    tagline: 'AI-powered medical documentation',
    description:
      'Clinicians dictate, Medscribe transcribes and structures notes, prescriptions, and patient records — HIPAA ready.',
    color: 'from-emerald-500 to-teal-600',
    icon: 'Stethoscope',
    href: 'med',
  },
  {
    slug: 'insurance',
    name: 'Insurance Agent System',
    tagline: 'Policies, claims & commissions in one place',
    description:
      'Full CRM for insurance agents: leads, quotes, policies, renewals, claims, and commission tracking.',
    color: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck',
    href: 'ins',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate ERP',
    tagline: 'Listings, tenants, and deals — unified',
    description:
      'Manage listings, leads, tenants, contracts, payments, and maintenance from one powerful real estate platform.',
    color: 'from-pink-500 to-rose-600',
    icon: 'Building2',
    href: 'real',
  },
];
