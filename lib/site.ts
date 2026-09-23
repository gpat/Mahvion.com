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
    leads: process.env.NEXT_PUBLIC_APP_LEADS || 'https://leadscrm.mahvion.com',
  },
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: 'live' | 'in-development';
  description: string;
  longDescription: string;
  audience: string;
  modules: string[];
  outcomes: string[];
  highlights: string[];
  color: string;
  icon: string;
  href: keyof typeof site.apps;
};

export const products: Product[] = [
  {
    slug: 'vehicle-erp',
    name: 'Vehicle ERP',
    tagline: 'Purchase, stock, and sales management for vehicle traders',
    status: 'live',
    description:
      'One system for vehicle traders and dealers to run purchases from multiple cities, godown stock, bookings, sales, transport, and profit — replacing the spreadsheets that usually hold it all together.',
    longDescription:
      'Vehicle ERP is built around how vehicle trading businesses actually work. Every vehicle is recorded when it is purchased from a dealer — with city, purchase date, engine number, colour, and supporting documents such as the invoice, insurance, and RC. It is then tracked as it arrives at the godown, sits in stock, is booked by a customer, and is finally sold, with profit and pending balances calculated automatically. Transport vendors, drivers, and trips are managed in the same place, as are insurance vendors. Owners and managers see live dashboards on revenue, profit, stock status, brand mix, and payments, and can build their own reports with a column picker. Each business gets its own isolated workspace, and every user sees only what their role — Admin, Manager, Godown Attender, or Accountant — allows.',
    audience: 'Vehicle traders, multi-city dealers, used-vehicle businesses, and companies that buy and sell vehicles in volume.',
    modules: [
      'Purchases from dealers across cities, with purchase date, engine number, colour, and document uploads',
      'Godown (warehouse) tracking — arrivals, stock status, and pending vehicles',
      'Bookings and sales, with salesperson, customer details, and automatic profit calculation',
      'Transport management — transport vendors, drivers, trips, and transport invoices',
      'Dealer, customer, company, and insurance-vendor records',
      'Live dashboards with charts on revenue, profit, stock status, brand mix, and payments',
      'Custom reports with a column picker, plus role-based access for four user roles',
    ],
    outcomes: [
      'Know exactly where every vehicle is — purchased, in the godown, booked, or sold',
      'See profit and pending balances without reconciling spreadsheets',
      'Give each team member access to only the parts of the business they handle',
    ],
    highlights: ['Multi-tenant', 'Role-based Access', 'Document Uploads', 'Live Dashboards', 'Custom Reports', 'Transport Tracking'],
    color: 'from-indigo-500 to-blue-600',
    icon: 'Car',
    href: 'erp',
  },
  {
    slug: 'medscribe',
    name: 'Medscribe',
    tagline: 'AI clinical documentation for doctors',
    status: 'in-development',
    description:
      'An AI assistant that will turn doctor–patient consultations into structured clinical notes and prescriptions, so clinicians spend less time typing and more time with patients.',
    longDescription:
      'Medscribe is Mahvion\'s next product, currently in development. The goal is simple: a clinician records or dictates a consultation, and Medscribe produces a structured clinical note — history, examination, assessment, and plan — along with a draft prescription for the clinician to review and sign. Notes will be stored against the patient\'s visit history, and every access will be recorded in an audit log. We are building Medscribe with practising clinicians, and are looking for clinics interested in early access.',
    audience: 'Independent doctors, specialists, dental practices, and clinics interested in early access.',
    modules: [
      'Speech-to-text transcription of consultations',
      'AI-generated structured clinical notes for clinician review',
      'Draft e-prescriptions, reviewed and approved by the clinician',
      'Patient visit history in one place',
      'Access audit log for every record viewed or changed',
    ],
    outcomes: [
      'Less time charting after clinic hours',
      'More consistent, complete clinical notes',
      'Clinician stays in control — nothing is final without review',
    ],
    highlights: ['Speech-to-Text', 'Medical NLP', 'Clinician Review', 'Audit Log', 'Early Access'],
    color: 'from-emerald-500 to-teal-600',
    icon: 'Stethoscope',
    href: 'med',
  },
  {
    slug: 'insurance',
    name: 'Insurance Agent System',
    tagline: 'Client, policy, and renewal management for insurance agents',
    status: 'live',
    description:
      'A complete desk for insurance and loan agents — every client, family member, policy, claim, lead, and loan in one place, with automatic birthday, anniversary, festival, and renewal emails.',
    longDescription:
      'The Insurance Agent System (BimaDesk) is built for agents and channel partners who manage hundreds of families and policies across multiple insurers. Each client record holds their policies, premiums, maturity dates, family members, claim history, and documents, so the full relationship is visible in one screen. New leads are tracked until they are converted into clients, and loans can be managed alongside insurance. Insurers and banks are kept as vendors with their commission slabs. Every morning, the system automatically emails clients on their birthdays and anniversaries, sends festival greetings, and reminds them about upcoming policy renewals — so the agent stays in touch without lifting a finger. Existing client lists can be imported from Excel, and every change is recorded in an activity log.',
    audience: 'Insurance agents, LIC and general insurance advisors, loan agents, and channel partners managing many client families.',
    modules: [
      'Client records with policies, premiums, maturity dates, and family members',
      'Document vault and claim history for every client',
      'Lead tracking with one-click conversion to client',
      'Loan management alongside insurance policies',
      'Insurer and bank vendor records with commission slabs',
      'Automatic birthday, anniversary, festival, and renewal-reminder emails every morning',
      'Excel import/export, dashboard statistics, and a full activity log',
    ],
    outcomes: [
      'Never miss a renewal, birthday, or anniversary again',
      'See a client\'s whole family, every policy, and every claim at a glance',
      'Move an existing client list in from Excel in minutes',
    ],
    highlights: ['Renewal Reminders', 'Automated Greetings', 'Family View', 'Claims', 'Loans', 'Excel Import'],
    color: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck',
    href: 'ins',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate ERP',
    tagline: 'Project, unit, and payment management for builders and developers',
    status: 'live',
    description:
      'Everything a builder or developer needs from lead to handover — projects, units, customers, bookings, payments, expenses, tenders, and reports, in one system.',
    longDescription:
      'Real Estate ERP is built for builders and developers who run several projects at once. Each project holds its units — configuration, area, and pricing — and each unit moves from available to booked to sold as customers progress. Customer records follow the buyer from first enquiry through booking, instalment payments, and handover. Leads from channel partners and walk-ins are tracked in one pipeline. On the finance side, the system records customer collections, government payments, and project expenses, with an approval workflow and an expense dashboard. Tenders are tracked with their own dashboard, company documents are stored centrally, and automatic email notifications keep the team informed. Every organisation gets its own workspace, with per-organisation feature settings, user roles, and an activity log.',
    audience: 'Builders, developers, construction companies, and real estate firms running multiple projects.',
    modules: [
      'Projects and units with configuration, area, pricing, and availability status',
      'Customer records from enquiry to booking, payments, and handover',
      'Lead and channel-partner pipeline',
      'Customer payment and government payment tracking',
      'Expense management with approvals and an expense dashboard',
      'Tender tracking, vendor records, and central company documents',
      'Reports, email notifications, user roles, and a user activity log',
    ],
    outcomes: [
      'See availability, bookings, and collections for every project on one screen',
      'Know what every customer has paid and what is due',
      'Keep expenses under control with approvals before money goes out',
    ],
    highlights: ['Multi-project', 'Unit Inventory', 'Payment Tracking', 'Expense Approvals', 'Tenders', 'Email Notifications'],
    color: 'from-pink-500 to-rose-600',
    icon: 'Building2',
    href: 'real',
  },
  {
    slug: 'lead-crm',
    name: 'Lead Generation CRM',
    tagline: 'AI-powered lead capture and sales CRM',
    status: 'live',
    description:
      'Captures leads the moment they arrive from Facebook Lead Ads and WhatsApp, assigns them to the right salesperson, and keeps every follow-up on track — with an AI bot that replies to new leads instantly.',
    longDescription:
      'Lead Generation CRM turns ad clicks into closed deals without anyone copying data between tabs. Leads from Facebook Lead Ads and WhatsApp land in the CRM automatically through webhooks, are de-duplicated, and are auto-assigned to a sales executive who gets an email the moment it happens. An AI auto-reply bot sends every new lead a personalised first response within seconds. The sales team works each lead through a visual pipeline with contacts, companies, notes, file attachments and a meeting calendar, while scheduled follow-up reminders make sure nothing goes cold. Executives call leads with one tap through the companion Android app. Marketing teams generate LinkedIn, Facebook and Instagram posts in the AI Content Studio, and managers track conversion in built-in reports. Every client business gets its own isolated workspace with role-based feature toggles.',
    audience: 'Sales teams, marketing agencies, real estate and insurance brokers, education consultants, and any business running paid lead campaigns.',
    modules: [
      'Automatic lead capture from Facebook Lead Ads and WhatsApp via webhooks',
      'Lead de-duplication and auto-assignment with instant email notifications',
      'AI auto-reply bot that sends a personalised first response to every new lead',
      'Visual sales pipeline with contacts, companies, notes, and file attachments',
      'Meeting calendar and scheduled follow-up reminders so no lead goes cold',
      'One-tap click-to-call through the companion Android app, plus WhatsApp messaging',
      'AI Content Studio for LinkedIn, Facebook, and Instagram posts, with reports and CSV import/export',
    ],
    outcomes: [
      'Respond to every new lead in seconds, not hours',
      'Stop losing leads between ad platforms, spreadsheets, and inboxes',
      'See exactly which salesperson is working which lead, and where it stands',
    ],
    highlights: ['Meta Lead Ads', 'WhatsApp API', 'AI Auto-Reply', 'Android App', 'Multi-tenant', 'Role-based Access'],
    color: 'from-sky-500 to-cyan-600',
    icon: 'Target',
    href: 'leads',
  },
];

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  audience: string;
  scope: string[];
  deliverables: string[];
  highlights: string[];
  color: string;
  glow: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: 'vapt',
    name: 'VAPT & Security Testing',
    tagline: 'Vulnerability assessment and penetration testing',
    description:
      'Find and fix security weaknesses before attackers do. We test your web apps, mobile apps, APIs, and networks the way a real attacker would — and show you exactly how to close every gap.',
    longDescription:
      'Our Vulnerability Assessment and Penetration Testing (VAPT) service combines automated scanning with hands-on manual testing by security engineers. Automated tools give broad coverage; manual testing finds the business-logic flaws, broken access controls, and chained exploits that scanners miss. Every engagement starts with an agreed scope and rules of engagement, runs without disrupting your production systems, and ends with a clear report your developers can act on — every finding rated by severity, backed by proof, and paired with specific remediation steps. Once your team has applied the fixes, we re-test to confirm each issue is closed.',
    audience: 'SaaS companies, fintech and healthcare platforms, e-commerce businesses, and any team preparing for a client security review or compliance audit.',
    scope: [
      'Web application testing covering the OWASP Top 10 — injection, broken authentication, access control, and more',
      'Mobile application testing for Android and iOS, including insecure storage and API abuse',
      'API security testing for REST and GraphQL endpoints against the OWASP API Security Top 10',
      'External and internal network penetration testing of servers, firewalls, and exposed services',
      'Cloud configuration review for AWS, Azure, and Google Cloud — IAM, storage, and network exposure',
      'Source-code-assisted (grey-box) testing when you want deeper coverage of critical flows',
    ],
    deliverables: [
      'Executive summary written for leadership and non-technical stakeholders',
      'Detailed technical report with severity ratings, evidence, and step-by-step reproduction',
      'Prioritised remediation guidance your developers can act on immediately',
      'Re-test after fixes, with an updated report confirming closed findings',
    ],
    highlights: ['Web & Mobile', 'API Security', 'Network', 'Cloud Review', 'OWASP Top 10', 'Re-test Included'],
    color: 'from-red-500 to-rose-600',
    glow: 'rgba(244,63,94,0.10)',
    icon: 'ShieldAlert',
  },
  {
    slug: 'it-consulting',
    name: 'IT Consulting',
    tagline: 'Technology strategy, cloud, and engineering advisory',
    description:
      'Senior technology guidance without a full-time hire. We help you choose the right stack, move to the cloud, cut infrastructure costs, and put AI to work — then help your team execute.',
    longDescription:
      'Good technology decisions compound; bad ones get expensive fast. Our consultants have designed, built, and operated the production systems behind the Mahvion product suite, and we bring that same hands-on experience to your business. We start by understanding where you are — your systems, your team, your constraints, and your goals — and turn that into a practical roadmap with clear priorities and costs. Whether you need an independent architecture review, a cloud migration plan, a DevOps pipeline, or a strategy for adopting AI safely, we stay involved through execution rather than handing over a slide deck and leaving.',
    audience: 'Growing businesses, startups without a full-time CTO, and established teams planning a migration, modernisation, or AI initiative.',
    scope: [
      'IT strategy and technology roadmaps aligned with your business goals and budget',
      'Cloud migration and architecture on AWS, Azure, and Google Cloud',
      'Cloud cost review and optimisation — right-sizing, reserved capacity, and waste removal',
      'DevOps and CI/CD setup: automated builds, testing, deployments, and monitoring',
      'Software architecture and code reviews for scalability, security, and maintainability',
      'AI adoption strategy — identifying high-value use cases and deploying them responsibly',
      'Vendor and tool selection with an independent, no-commission recommendation',
    ],
    deliverables: [
      'Current-state assessment of your systems, risks, and costs',
      'Prioritised roadmap with effort, cost, and expected impact for each step',
      'Architecture diagrams and implementation plans your team can follow',
      'Hands-on support during execution, or a fixed-scope delivery by our engineers',
    ],
    highlights: ['IT Strategy', 'Cloud Migration', 'Cost Optimisation', 'DevOps', 'Architecture Review', 'AI Adoption'],
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.12)',
    icon: 'Compass',
  },
  {
    slug: 'it-hardware',
    name: 'IT Hardware & Infrastructure',
    tagline: 'Procurement, installation, and support for your IT estate',
    description:
      'The right hardware, set up properly and kept running. We supply laptops, desktops, servers, and networking equipment, install and configure everything, and support it afterwards.',
    longDescription:
      'Hardware decisions affect every employee every day, yet they are often made in a rush from whatever is in stock. We start from how your team actually works, recommend equipment that fits your workload and budget, and source it from established brands with genuine warranties. Our engineers then handle installation and configuration end-to-end — from imaging laptops and setting up user accounts to racking servers, running structured cabling, and configuring firewalls and Wi-Fi — so your office is productive from day one. After go-live, we stay on as your support partner with maintenance plans, repairs, upgrades, and a single point of contact for everything IT.',
    audience: 'Offices setting up or expanding, businesses refreshing ageing equipment, and teams that need a dependable partner to look after their IT.',
    scope: [
      'Laptops, desktops, workstations, monitors, and peripherals for every role',
      'Servers, storage, and backup systems sized for your workload',
      'Networking — routers, switches, firewalls, and business-grade Wi-Fi',
      'Structured cabling, rack installation, and power backup (UPS)',
      'Device setup: OS imaging, user accounts, security software, and email configuration',
      'Annual maintenance contracts, on-site support, repairs, and upgrades',
    ],
    deliverables: [
      'Needs assessment and a clear, itemised quotation',
      'Genuine, warranty-backed equipment from established brands',
      'Complete installation, configuration, and handover documentation',
      'Ongoing support under a maintenance plan that suits your team',
    ],
    highlights: ['Laptops & Desktops', 'Servers & Storage', 'Networking', 'Structured Cabling', 'Installation', 'Maintenance (AMC)'],
    color: 'from-cyan-500 to-teal-600',
    glow: 'rgba(6,182,212,0.10)',
    icon: 'Server',
  },
];
