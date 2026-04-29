export const site = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Mahvion',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mahvion.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@mahvion.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 9022217871',
  description:
    'Mahvion is an AI-first product development platform — designing, building, and shipping production-grade SaaS products powered by LLMs, AI agents, RAG, computer vision, and the full AI technology stack.',
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
  techStack: string[];
  color: string;
  icon: string;
  href: keyof typeof site.apps;
};

export const products: Product[] = [
  {
    slug: 'vehicle-erp',
    name: 'Vehicle ERP',
    tagline: 'AI-powered dealership management platform',
    description:
      'A production-grade DMS replacing disconnected spreadsheets and legacy software — with AI price intelligence, VIN-level traceability, and automated deal workflows across inventory, sales, service, and accounting.',
    longDescription:
      'Vehicle ERP is a multi-branch dealer management system built on a unified AI-powered data model. Every vehicle is tracked from procurement to delivery with a VIN-linked audit trail. The AI sales engine supports finance structuring, insurance linkage, and digitally signed deal packages. Service management runs technician scheduling, job card creation, and real-time parts consumption — with automated reorder triggers. A built-in double-entry accounting module handles GST/VAT posting, bank reconciliation, and multi-branch P&L consolidation without any third-party accounting tool.',
    audience: 'Auto dealerships, used-car lots, fleet operators, multi-brand showrooms, and service centers.',
    modules: [
      'VIN-linked inventory with barcode scanning, costing, photos, and aging alerts',
      'AI sales pipeline: quotes, EMI/finance calculator, insurance upsell, and digital deal signing',
      'Service & job cards with technician assignment, labor billing, and SLA tracking',
      'Parts bin management with location mapping, reorder rules, and supplier POs',
      'Double-entry accounting: GST/VAT, journal entries, and bank reconciliation',
      'Multi-branch CRM with customer 360°, follow-up queues, and AMC reminders',
      'AI executive dashboards: gross profit per unit, stock turn ratio, and service recovery rate',
    ],
    outcomes: [
      'Reduce deal closure time by 60% with AI-assisted finance & signing workflows',
      'Eliminate stock shrinkage with VIN-level traceability across branches',
      'Consolidate 5+ legacy tools into one auditable AI system of record',
    ],
    techStack: ['LLM Analytics', 'REST API', 'Webhooks', 'Multi-branch', 'GST / VAT', 'Role-based Access'],
    color: 'from-indigo-500 to-blue-600',
    icon: 'Car',
    href: 'erp',
  },
  {
    slug: 'medscribe',
    name: 'Medscribe',
    tagline: 'AI-powered clinical documentation engine',
    description:
      'Real-time speech-to-structured-note with a medical NLP layer — transcribes consultations into SOAP notes, e-prescriptions, and FHIR-compatible records in under 3 seconds.',
    longDescription:
      'Medscribe is a clinical documentation platform powered by a domain-trained medical NLP model. It transcribes live consultations via WebRTC audio and maps speech to structured clinical schemas — SOAP, H&P, discharge summaries — with ICD-10 and SNOMED CT coding suggestions inline. e-Prescriptions are validated against a drug-interaction database before signing. Patient records are stored in a FHIR R4-compatible data model, enabling seamless lab, imaging, and pharmacy integrations. Every read and write action is captured in an immutable HIPAA-grade audit log with user, timestamp, and IP.',
    audience: 'Physicians, specialists, dentists, clinics, and hospital chains.',
    modules: [
      'Medical NLP transcription with <3s latency and 97%+ specialty vocabulary accuracy',
      'Structured output: SOAP, H&P, discharge, and referral letter templates',
      'e-Prescriptions with drug-interaction validation and pharmacy routing',
      'FHIR R4 patient records with longitudinal visit timeline and attachments',
      'Appointment scheduler with queue management and WebRTC tele-consult',
      'Lab and imaging order management with result ingestion and delta flagging',
      'Immutable HIPAA audit log, BAA support, and field-level encryption at rest',
    ],
    outcomes: [
      'Reclaim 2+ hours of charting daily per clinician',
      'Reduce documentation errors with AI-assisted ICD-10 coding',
      'Pass HIPAA audits with a complete, tamper-evident access log',
    ],
    techStack: ['Whisper ASR', 'Medical NLP', 'HIPAA BAA', 'FHIR R4', 'ICD-10 / SNOMED CT', 'AES-256'],
    color: 'from-emerald-500 to-teal-600',
    icon: 'Stethoscope',
    href: 'med',
  },
  {
    slug: 'insurance',
    name: 'Insurance Agent System',
    tagline: 'AI-driven agency management platform',
    description:
      'A carrier-agnostic CRM and policy administration system with AI-powered quote ranking, automated renewals, claims tracking, and real-time commission accounting.',
    longDescription:
      'The Insurance Agent System is a full-lifecycle agency platform. The AI quoting engine connects to multiple carrier APIs simultaneously and returns ranked, comparable quotes in seconds. ACORD-compliant forms are auto-populated from CRM data, eliminating rekeying. Policy events — endorsements, cancellations, reinstatements — trigger automatic document generation and carrier notification. The renewal engine uses AI to calculate lapse risk scores and fires a multi-touch communication sequence 90, 60, and 30 days out. Every commission payment, split rule, and chargeback is tracked in a reconciled ledger — visible by policy, agent, and carrier.',
    audience: 'Independent agents, brokers, agency owners, and multi-carrier insurance teams.',
    modules: [
      'Lead capture via web forms, telephony CTI, and referral tracking with attribution',
      'AI multi-carrier real-time quote engine for auto, home, life, health, and commercial lines',
      'ACORD form auto-population, policy issuance, endorsements, and document vault',
      'AI renewal automation: lapse risk scoring, 90/60/30-day multi-touch sequences',
      'Claims intake with FNOL capture, adjuster assignment, and status push notifications',
      'Commission ledger with split rules, chargeback tracking, and carrier reconciliation',
      'Client self-serve portal: certificates, ID cards, payment history, and policy documents',
    ],
    outcomes: [
      'Issue AI-ranked quotes across 10+ carriers in under 30 seconds',
      'Increase renewal retention rate by 25% with AI-powered lapse prevention',
      'Eliminate commission disputes with a fully reconciled, auditable ledger',
    ],
    techStack: ['AI Quote Ranking', 'Carrier API', 'ACORD Forms', 'CTI / Telephony', 'E-signature', 'SOC 2 Type II'],
    color: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck',
    href: 'ins',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate ERP',
    tagline: 'AI-powered property lifecycle platform',
    description:
      'An end-to-end platform for listing, leasing, tenant management, and property accounting — with AI-automated rent collection, maintenance routing, and GAAP-compliant financials.',
    longDescription:
      'Real Estate ERP manages the complete property lifecycle on a single AI-powered data model. Listings sync to MLS/IDX portals automatically and update in real time. The leasing pipeline tracks prospects through showings, applications, background checks, and e-signed lease execution. Tenant onboarding includes KYC verification, move-in inspection forms, and automated welcome workflows. The AI rent collection engine supports ACH, UPI, and card payments with smart reminders and late-fee posting. Maintenance requests are triaged by AI priority scoring, assigned to vendors via a self-serve portal, and tracked to resolution. Owner statements and GAAP-compliant financials are generated monthly with NOI, cap rate, and occupancy metrics.',
    audience: 'Property managers, developers, brokerages, REITs, and rental operators.',
    modules: [
      'MLS/IDX-synced listings with unit matrix, floor plans, virtual tour links, and availability tracking',
      'Leasing CRM: prospect pipeline, showing scheduler, application workflow, and background check integration',
      'Digital lease execution with e-signature, clause library, and encrypted document vault',
      'Tenant management: KYC, move-in/out inspections, lease renewals, and notices',
      'AI rent collection via ACH/UPI/card with smart reminders, receipts, and late-fee automation',
      'Vendor maintenance portal: AI triage, SLA tracking, work orders, and invoice approval',
      'GAAP-compliant accounting: CAM reconciliation, owner statements, NOI, cap rate, and tax schedules',
    ],
    outcomes: [
      'Cut lease turnaround from weeks to 48 hours with AI-powered digital workflows',
      'Reduce rent collection delinquency by 40% with AI payment sequences',
      'Deliver investor-grade owner statements without a separate accounting team',
    ],
    techStack: ['AI Triage', 'MLS / IDX Sync', 'ACH / UPI Payments', 'E-signature', 'GAAP Accounting', 'KYC'],
    color: 'from-pink-500 to-rose-600',
    icon: 'Building2',
    href: 'real',
  },
];
