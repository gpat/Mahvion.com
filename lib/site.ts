export const site = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Mahvion',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mahvion.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@mahvion.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9022217871',
  description:
    'Mahvion builds modern SaaS platforms for auto dealers, clinicians, insurance agents, and real estate teams — unified under one ecosystem, one login, one brand.',
  apps: {
    erp: process.env.NEXT_PUBLIC_APP_ERP || 'https://erp.mahvion.com',
    med: process.env.NEXT_PUBLIC_APP_MED || 'https://med.mahvion.com',
    ins: process.env.NEXT_PUBLIC_APP_INS || 'https://ins.mahvion.com',
    real: process.env.NEXT_PUBLIC_APP_REAL || 'https://real.mahvion.com',
  },
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  audience: string;
  modules: string[];
  outcomes: string[];
  color: string;
  icon: string;
  href: keyof typeof site.apps;
};

export const products: Product[] = [
  {
    slug: 'vehicle-erp',
    name: 'Vehicle ERP',
    tagline: 'Run the entire dealership from one system',
    description:
      'Inventory, sales, service, parts, accounting, and CRM for auto dealers and fleet operators — all in one ERP.',
    longDescription:
      'Vehicle ERP replaces the patchwork of spreadsheets, DMS tools, and accounting software most dealerships still run on. Track every vehicle from purchase to delivery, manage service tickets and parts, close sales with finance options, and reconcile the books — without leaving the platform.',
    audience: 'Auto dealerships, used-car lots, fleet operators, multi-brand showrooms, and service centers.',
    modules: [
      'Vehicle inventory with VIN, photos, costing, and aging',
      'Sales pipeline with quotes, financing, and DMV paperwork',
      'Service & repair orders with technician assignment',
      'Parts & accessories inventory with reorder thresholds',
      'Accounting, GST/VAT, and bank reconciliation',
      'Customer CRM, follow-ups, and service reminders',
      'Real-time dashboards for sales, profit, and stock health',
    ],
    outcomes: [
      'Cut paperwork by up to 70%',
      'Close sales 2x faster with built-in financing tools',
      'Eliminate stock leakage with VIN-level tracking',
    ],
    color: 'from-indigo-500 to-blue-600',
    icon: 'Car',
    href: 'erp',
  },
  {
    slug: 'medscribe',
    name: 'Medscribe',
    tagline: 'AI documentation for clinicians',
    description:
      'Dictate naturally — Medscribe transcribes, structures, and files clinical notes, prescriptions, and records. HIPAA-ready.',
    longDescription:
      'Medscribe listens to consultations and turns them into structured SOAP notes, prescriptions, and patient records in seconds. Clinicians stop typing and start practicing again. Built for solo practitioners up to multi-specialty hospitals, with HIPAA-grade audit trails throughout.',
    audience: 'Physicians, specialists, dentists, clinics, and hospital chains.',
    modules: [
      'Real-time voice-to-note with medical vocabulary',
      'Structured SOAP, H&P, and discharge summaries',
      'e-Prescriptions with drug interaction checks',
      'Patient records, history, and visit timeline',
      'Appointments, queue, and tele-consult support',
      'Lab and imaging order linkage',
      'HIPAA-grade audit logs and role-based access',
    ],
    outcomes: [
      'Save 2+ hours of charting every day',
      'See more patients without longer hours',
      'Cleaner records, fewer compliance gaps',
    ],
    color: 'from-emerald-500 to-teal-600',
    icon: 'Stethoscope',
    href: 'med',
  },
  {
    slug: 'insurance',
    name: 'Insurance Agent System',
    tagline: 'Leads to commissions, in one workspace',
    description:
      'A complete CRM for insurance agencies: leads, quotes, policies, renewals, claims, and commission tracking.',
    longDescription:
      'The Insurance Agent System runs the entire agency lifecycle — from the first lead to a paid commission — without spreadsheets or disconnected tools. Agents quote across carriers, issue policies, automate renewals, log claims, and watch commissions accrue in real time.',
    audience: 'Independent agents, brokers, agency owners, and multi-carrier teams.',
    modules: [
      'Lead capture from web forms, calls, and referrals',
      'Multi-carrier quote builder for auto, home, life, health',
      'Policy issuance, endorsements, and document storage',
      'Renewal automation with reminders and pre-fill',
      'Claims intake, status tracking, and customer updates',
      'Commission ledger by policy, agent, and carrier',
      'Customer self-serve portal for documents and payments',
    ],
    outcomes: [
      'Quote 3x faster across multiple carriers',
      'Never miss a renewal again',
      'See exact commission earnings, in real time',
    ],
    color: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck',
    href: 'ins',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate ERP',
    tagline: 'From listing to lease, in one platform',
    description:
      'Listings, leads, contracts, tenants, rent, and maintenance — managed end-to-end for property teams.',
    longDescription:
      'Real Estate ERP handles every step of the property business: list a unit, capture leads, send a contract, onboard a tenant, collect rent, and close maintenance tickets. Built for managers running 10 units or 10,000 — with owner statements and accounting baked in.',
    audience: 'Property managers, developers, brokerages, and rental operators.',
    modules: [
      'Listings with photos, floor plans, and MLS sync',
      'Lead pipeline with showings and follow-ups',
      'Contracts, e-signature, and document vault',
      'Tenant onboarding, KYC, and lease tracking',
      'Online rent collection with auto-reminders',
      'Maintenance tickets routed to vendors',
      'Owner statements, P&L, and tax reports',
    ],
    outcomes: [
      'Close leases faster with e-sign and auto-fill',
      'Cut rent collection time from days to minutes',
      'Give owners transparent, real-time statements',
    ],
    color: 'from-pink-500 to-rose-600',
    icon: 'Building2',
    href: 'real',
  },
];
