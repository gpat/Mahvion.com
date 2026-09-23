// Search landing pages: one audience, one problem, one call to action each.
// Every page must carry genuinely different content — near-duplicate city pages
// are treated by search engines as doorway pages and hurt the whole site.

export type LandingPage = {
  slug: string;
  section: 'solutions' | 'services';
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  color: string;
  icon: 'ShieldCheck' | 'Car' | 'Building2' | 'Target' | 'ShieldAlert' | 'Server';
  pains: { title: string; body: string }[];
  featuresTitle: string;
  features: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  cta: { label: string; href: string; note: string };
  detailLink: { label: string; href: string };
  related: string[];
};

export const landingPages: LandingPage[] = [
  {
    slug: 'insurance-agent-software',
    section: 'solutions',
    metaTitle: 'Software for LIC & Insurance Agents — Client, Policy & Renewal Management',
    metaDescription:
      'Manage every client, family member, policy, claim, and lead in one place, with automatic renewal reminders and birthday, anniversary, and festival greetings. Built for LIC and insurance agents in India.',
    eyebrow: 'For insurance & LIC agents',
    h1: 'Never miss a renewal, birthday, or client follow-up again.',
    intro:
      'The Mahvion Insurance Agent System (BimaDesk) is built for agents who look after hundreds of families across LIC and other insurers. Keep every client, policy, premium, and claim in one place — and let the system send renewal reminders and greetings for you every morning.',
    color: 'from-amber-500 to-orange-600',
    icon: 'ShieldCheck',
    pains: [
      { title: 'Renewals slip through', body: 'Due dates live in a diary, an Excel sheet, and your phone. One missed renewal can mean a lapsed policy and an unhappy family.' },
      { title: 'No single view of a family', body: 'A client\'s policies, family members, claims, and documents are scattered, so every call starts with searching.' },
      { title: 'No time to stay in touch', body: 'Birthday, anniversary, and festival wishes build loyalty — but sending them to hundreds of clients by hand is not realistic.' },
    ],
    featuresTitle: 'Everything an agent needs, in one desk',
    features: [
      { title: 'Client & family records', body: 'Each client holds their policies, premiums, maturity dates, and family members in one screen.' },
      { title: 'Automatic renewal reminders', body: 'Clients receive a renewal reminder email before their policy is due, without you lifting a finger.' },
      { title: 'Birthday, anniversary & festival greetings', body: 'Personalised greetings go out automatically every morning, including major Indian festivals.' },
      { title: 'Claims & documents', body: 'Record claim history and store policy documents against each client, so everything is ready when they call.' },
      { title: 'Leads and loans', body: 'Track prospects until they become clients, and manage loans alongside insurance for the same family.' },
      { title: 'Excel import', body: 'Already keep your clients in Excel? Import them instead of typing everything again.' },
    ],
    stepsTitle: 'Getting started is simple',
    steps: [
      { title: 'Book a free demo', body: 'We walk you through the system using examples from your own work.' },
      { title: 'Bring your client list', body: 'Share your existing Excel sheet and we help you import it.' },
      { title: 'Start using it the same day', body: 'Reminders and greetings begin automatically from the next morning.' },
    ],
    faqs: [
      { q: 'Is this only for LIC agents?', a: 'No. It works for LIC advisors, general insurance agents, health insurance advisors, and loan agents. You can record policies from any insurer.' },
      { q: 'Do I need to install anything?', a: 'No. The system runs in your web browser on a computer or phone, so there is nothing to install.' },
      { q: 'Can I import my existing client list?', a: 'Yes. You can import clients from an Excel sheet, and we can help you prepare the file during onboarding.' },
      { q: 'Who sends the renewal and greeting emails?', a: 'The system sends them automatically every morning from your configured email address, with your name as the agent.' },
      { q: 'Is my client data private?', a: 'Yes. Your data is used only to run your desk. It is never shared or sold, and access is protected by your own login.' },
    ],
    cta: { label: 'Book a free demo', href: '/contact?product=insurance', note: 'A 20-minute walkthrough — no obligation.' },
    detailLink: { label: 'See all Insurance Agent System features', href: '/products/insurance' },
    related: ['lead-management-crm', 'vapt-services-india'],
  },
  {
    slug: 'vehicle-dealer-software',
    section: 'solutions',
    metaTitle: 'Vehicle Dealer & Trader Software — Purchase, Godown Stock & Sales Management',
    metaDescription:
      'Track every vehicle from purchase to godown to booking to sale, with documents, transport, profit, and live dashboards. Software for vehicle traders and multi-city dealers in India.',
    eyebrow: 'For vehicle traders & dealers',
    h1: 'Know where every vehicle is — and what it earned you.',
    intro:
      'Mahvion Vehicle ERP replaces the spreadsheets that vehicle traders use to track purchases from different cities, godown stock, bookings, sales, and transport. Every vehicle has one record from the day you buy it to the day it is delivered.',
    color: 'from-indigo-500 to-blue-600',
    icon: 'Car',
    pains: [
      { title: 'Stock you cannot see', body: 'Which vehicles have arrived at the godown, which are booked, and which are still in transit? The answer usually means phone calls.' },
      { title: 'Profit worked out by hand', body: 'Purchase cost, transport, and sale price sit in different sheets, so real profit per vehicle is a guess until month-end.' },
      { title: 'Documents everywhere', body: 'Invoices, insurance copies, and RC documents are in folders and WhatsApp chats instead of attached to the vehicle.' },
    ],
    featuresTitle: 'Built around how vehicle trading works',
    features: [
      { title: 'Purchases from any city', body: 'Record each purchase with dealer, city, date, engine number, colour, and documents.' },
      { title: 'Godown tracking', body: 'See arrivals, stock status, and pending vehicles for every godown.' },
      { title: 'Bookings & sales', body: 'Record bookings and sales with salesperson and customer details — profit is calculated automatically.' },
      { title: 'Transport management', body: 'Manage transport vendors, drivers, trips, and transport invoices in the same system.' },
      { title: 'Live dashboards & reports', body: 'Charts on revenue, profit, stock status, brand mix, and payments, plus reports you can customise.' },
      { title: 'Role-based access', body: 'Admin, Manager, Godown Attender, and Accountant each see only what their job needs.' },
    ],
    stepsTitle: 'How we get you running',
    steps: [
      { title: 'Free demo', body: 'We show the full flow — purchase, godown, booking, and sale — with sample data.' },
      { title: 'Set up your workspace', body: 'Your own private workspace is created with your companies, dealers, and users.' },
      { title: 'Go live', body: 'Your team starts recording new purchases and sales immediately.' },
    ],
    faqs: [
      { q: 'Does it work for multiple cities and companies?', a: 'Yes. You can record purchases from any city and manage more than one company in the same workspace.' },
      { q: 'Can my godown staff use it without seeing financial data?', a: 'Yes. The Godown Attender role sees only godown operations, not purchase prices or profit.' },
      { q: 'Can I attach documents to a vehicle?', a: 'Yes. Invoices, insurance, RC, and other documents can be uploaded against each purchase.' },
      { q: 'Is my data separate from other businesses?', a: 'Yes. Every business gets its own isolated workspace with its own users.' },
      { q: 'Do I need special hardware?', a: 'No. It runs in a web browser on any computer, tablet, or phone.' },
    ],
    cta: { label: 'Book a free demo', href: '/contact?product=vehicle-erp', note: 'See your purchase-to-sale flow in one system.' },
    detailLink: { label: 'See all Vehicle ERP features', href: '/products/vehicle-erp' },
    related: ['it-hardware-amc-pune', 'lead-management-crm'],
  },
  {
    slug: 'builder-erp-software',
    section: 'solutions',
    metaTitle: 'ERP Software for Builders & Developers — Projects, Units, Payments & Expenses',
    metaDescription:
      'Manage projects, units, customers, bookings, instalment payments, expenses with approvals, tenders, and reports in one system. Real estate ERP for builders and developers in India.',
    eyebrow: 'For builders & developers',
    h1: 'Every project, unit, payment, and expense — in one place.',
    intro:
      'Mahvion Real Estate ERP is built for builders and developers running more than one project at a time. Track unit availability, follow every customer from enquiry to handover, record every payment, and control expenses with approvals before money goes out.',
    color: 'from-pink-500 to-rose-600',
    icon: 'Building2',
    pains: [
      { title: 'Availability across projects', body: 'Sales teams check with the office before quoting a unit, because inventory lives in a different sheet for each project.' },
      { title: 'Collections and dues', body: 'Knowing exactly what each buyer has paid, and what is due next, takes manual reconciliation.' },
      { title: 'Expenses without control', body: 'Site and project expenses get paid before anyone approves them, and there is no single view of spend.' },
    ],
    featuresTitle: 'What builders use every day',
    features: [
      { title: 'Projects & unit inventory', body: 'Each unit with configuration, area, pricing, and status — available, booked, or sold.' },
      { title: 'Customer journey to handover', body: 'Follow each buyer from enquiry and booking through payments to handover.' },
      { title: 'Payment tracking', body: 'Record customer payments and government payments, and see what is still due.' },
      { title: 'Expenses with approvals', body: 'Expenses go through an approval step, with an expense dashboard for every project.' },
      { title: 'Leads & channel partners', body: 'Track enquiries from walk-ins and channel partners in one pipeline.' },
      { title: 'Tenders, documents & reports', body: 'Track tenders, store company documents centrally, and generate reports.' },
    ],
    stepsTitle: 'From demo to go-live',
    steps: [
      { title: 'Free demo', body: 'We walk through a project from unit setup to customer handover.' },
      { title: 'Load your projects', body: 'Your projects and units are set up in your own workspace.' },
      { title: 'Train your team', body: 'Sales, accounts, and site teams each get the access their role needs.' },
    ],
    faqs: [
      { q: 'Can we manage several projects at once?', a: 'Yes. The system is designed for builders running multiple projects, with inventory and reports per project.' },
      { q: 'Does it track channel-partner leads?', a: 'Yes. Leads from channel partners and walk-ins are tracked in one pipeline.' },
      { q: 'Can expenses require approval?', a: 'Yes. Expenses can go through an approval step before they are paid, and every expense appears on the expense dashboard.' },
      { q: 'Can different teams have different access?', a: 'Yes. User roles and per-organisation feature settings control what each person can see and do.' },
      { q: 'Is it suitable for a single project?', a: 'Yes. It works for one project and scales as you add more.' },
    ],
    cta: { label: 'Book a free demo', href: '/contact?product=real-estate', note: 'See a full project, from units to handover.' },
    detailLink: { label: 'Take the full Real Estate ERP tour', href: '/real-estate' },
    related: ['lead-management-crm', 'it-hardware-amc-pune'],
  },
  {
    slug: 'lead-management-crm',
    section: 'solutions',
    metaTitle: 'CRM for Facebook & WhatsApp Leads — Instant AI Reply & Auto-Assignment',
    metaDescription:
      'Capture Facebook Lead Ads and WhatsApp leads automatically, reply instantly with an AI bot, assign each lead to a salesperson, and track follow-ups to a closed deal.',
    eyebrow: 'For sales teams running ads',
    h1: 'Answer every Facebook and WhatsApp lead in seconds — not hours.',
    intro:
      'Mahvion Lead Generation CRM pulls in every lead from Facebook Lead Ads and WhatsApp the moment it arrives, sends an instant personalised AI reply, assigns it to the right salesperson, and keeps follow-ups on track until the deal closes.',
    color: 'from-sky-500 to-cyan-600',
    icon: 'Target',
    pains: [
      { title: 'Leads wait in the ad account', body: 'Someone has to download or copy leads from Facebook and WhatsApp before sales can call — and hot leads cool down fast.' },
      { title: 'Slow first response', body: 'A lead who waits hours for a reply has usually already spoken to a competitor.' },
      { title: 'Nobody owns the follow-up', body: 'Without clear assignment and reminders, leads fall between salespeople.' },
    ],
    featuresTitle: 'From ad click to closed deal',
    features: [
      { title: 'Automatic lead capture', body: 'Leads from Facebook Lead Ads and WhatsApp arrive in the CRM automatically through webhooks.' },
      { title: 'Instant AI reply', body: 'An AI bot sends each new lead a personalised first response within seconds.' },
      { title: 'De-duplication & auto-assignment', body: 'Duplicate leads are merged, and each lead is assigned to a salesperson who is notified by email.' },
      { title: 'Pipeline & follow-ups', body: 'A visual pipeline with contacts, notes, attachments, a meeting calendar, and follow-up reminders.' },
      { title: 'Click-to-call app', body: 'Sales executives call leads with one tap through the companion Android app.' },
      { title: 'AI Content Studio', body: 'Generate LinkedIn, Facebook, and Instagram posts for your campaigns.' },
    ],
    stepsTitle: 'Live in three steps',
    steps: [
      { title: 'Free demo', body: 'See a lead travel from an ad form to a salesperson\'s phone.' },
      { title: 'Connect your sources', body: 'We help you connect your Facebook Lead Ads and WhatsApp to your workspace.' },
      { title: 'Start closing', body: 'New leads get an instant reply and land with the right salesperson.' },
    ],
    faqs: [
      { q: 'Which lead sources are supported?', a: 'Facebook Lead Ads and WhatsApp leads are captured automatically. You can also add leads manually or import them from CSV.' },
      { q: 'Can I turn off the AI auto-reply?', a: 'Yes. The AI reply can be switched off at any time, and all AI-generated content can be reviewed.' },
      { q: 'How are leads assigned?', a: 'Leads are auto-assigned to sales executives, who receive an email notification the moment a lead is assigned.' },
      { q: 'Does it work for agencies with several clients?', a: 'Yes. Each client business gets its own isolated workspace with its own users and settings.' },
      { q: 'Can salespeople call from their phones?', a: 'Yes. The companion Android app lets them call a lead with one tap.' },
    ],
    cta: { label: 'Book a free demo', href: '/contact?product=lead-crm', note: 'Watch a lead go from ad to salesperson in seconds.' },
    detailLink: { label: 'See all Lead Generation CRM features', href: '/products/lead-crm' },
    related: ['insurance-agent-software', 'builder-erp-software'],
  },
  {
    slug: 'vapt-services-india',
    section: 'services',
    metaTitle: 'VAPT Services in India — Remote Web, Mobile, API & Cloud Penetration Testing',
    metaDescription:
      'Remote vulnerability assessment and penetration testing for web apps, mobile apps, APIs, networks, and cloud — delivered anywhere in India with a clear report and a re-test after fixes.',
    eyebrow: 'VAPT · Remote, anywhere in India',
    h1: 'Find your security gaps before attackers do — tested remotely, anywhere in India.',
    intro:
      'Mahvion\'s security engineers test your web applications, mobile apps, APIs, networks, and cloud setup the way a real attacker would — entirely remotely. You get a clear report your developers can act on, and we re-test once your fixes are in.',
    color: 'from-red-500 to-rose-600',
    icon: 'ShieldAlert',
    pains: [
      { title: 'Your customer asked for a security report', body: 'Enterprise clients, partners, and auditors increasingly ask for a recent VAPT report before signing.' },
      { title: 'Launching something new', body: 'A new portal, app, or API is going live, and you want to know it is safe before real users arrive.' },
      { title: 'Scanners are not enough', body: 'Automated scanners miss business-logic flaws and broken access controls that manual testing finds.' },
    ],
    featuresTitle: 'What we test',
    features: [
      { title: 'Web applications', body: 'Coverage of the OWASP Top 10 — injection, authentication, access control, and more.' },
      { title: 'Mobile apps', body: 'Android and iOS apps, including insecure storage and API abuse.' },
      { title: 'APIs', body: 'REST and GraphQL endpoints tested against the OWASP API Security Top 10.' },
      { title: 'Networks', body: 'External network testing of your internet-facing servers and services, and internal testing over VPN.' },
      { title: 'Cloud configuration', body: 'Review of AWS, Azure, and Google Cloud setups — access, storage, and exposure.' },
      { title: 'Re-test after fixes', body: 'Once your team has fixed the findings, we re-test and update the report.' },
    ],
    stepsTitle: 'How a remote engagement works',
    steps: [
      { title: 'Scope & NDA', body: 'A short scoping questionnaire and a mutual NDA, followed by a fixed quotation.' },
      { title: 'Written authorisation', body: 'You sign an authorisation letter listing exactly what we may test and when. We never test without it.' },
      { title: 'Testing', body: 'Our engineers test remotely within the agreed window, and alert you immediately about anything critical.' },
      { title: 'Report & re-test', body: 'You receive an executive summary and a detailed technical report. We re-test after you fix.' },
    ],
    faqs: [
      { q: 'Can VAPT really be done remotely?', a: 'Yes. Web, mobile, API, cloud, and external network testing are routinely done remotely. Internal network testing can be done over a VPN you provide.' },
      { q: 'Will testing disrupt our live systems?', a: 'We agree the testing window and rules in advance, avoid destructive techniques unless you approve them, and stop immediately if you ask.' },
      { q: 'What does the report contain?', a: 'An executive summary for leadership, and a technical report with each finding\'s severity, evidence, steps to reproduce, and how to fix it.' },
      { q: 'Is a re-test included?', a: 'Yes. After your team applies the fixes, we re-test and issue an updated report confirming which findings are closed.' },
      { q: 'Do you provide CERT-In empanelled audits?', a: 'Some government and regulated organisations must use a CERT-In empanelled auditor. Tell us at the scoping stage if this applies to you, and we will advise you honestly on the right route.' },
      { q: 'How do you keep our information confidential?', a: 'Every engagement is covered by an NDA. Credentials and reports are exchanged only through encrypted channels, and test data is securely deleted afterwards.' },
    ],
    cta: { label: 'Get a VAPT quote', href: '/contact?service=vapt', note: 'Share your scope and we will send a fixed quotation.' },
    detailLink: { label: 'See the full VAPT service', href: '/services#vapt' },
    related: ['vapt-services-pune', 'it-hardware-amc-pune'],
  },
  {
    slug: 'vapt-services-pune',
    section: 'services',
    metaTitle: 'VAPT Services in Pune — Penetration Testing with On-site Support',
    metaDescription:
      'Pune-based vulnerability assessment and penetration testing for startups, SaaS companies, and manufacturers — remote testing with in-person scoping, internal network testing, and report walkthroughs.',
    eyebrow: 'VAPT · Pune',
    h1: 'Penetration testing in Pune — with a team you can meet in person.',
    intro:
      'For Pune companies, we combine remote testing with in-person support: a face-to-face scoping meeting, on-site internal network testing where needed, and a findings walkthrough with your developers at your office.',
    color: 'from-red-500 to-rose-600',
    icon: 'ShieldAlert',
    pains: [
      { title: 'Internal networks need someone on site', body: 'Office networks, Wi-Fi, and internal servers are easiest to test from inside your premises.' },
      { title: 'Findings need explaining', body: 'A report alone is not enough — your developers get more value from walking through the findings together.' },
      { title: 'You want a local partner', body: 'Ongoing security is easier with a team in the same city who can visit when something comes up.' },
    ],
    featuresTitle: 'What Pune clients get',
    features: [
      { title: 'In-person scoping', body: 'We meet your team at your Pune office to understand your systems and agree the scope.' },
      { title: 'On-site internal testing', body: 'Internal network, Wi-Fi, and server testing performed from your premises.' },
      { title: 'Remote application testing', body: 'Web, mobile, API, and cloud testing carried out remotely, to the same standard.' },
      { title: 'Findings walkthrough', body: 'A session with your developers to go through each finding and the fix.' },
      { title: 'Re-test after fixes', body: 'We re-test once fixes are in, and update the report.' },
      { title: 'IT support on the same team', body: 'Need hardware, network, or firewall changes after the test? Our IT services team is in Pune too.' },
    ],
    stepsTitle: 'How we work with Pune teams',
    steps: [
      { title: 'Meet & scope', body: 'An in-person or video meeting, an NDA, and a fixed quotation.' },
      { title: 'Authorise', body: 'A signed authorisation listing exactly what we may test, and when.' },
      { title: 'Test', body: 'Remote testing plus on-site visits where your scope needs them.' },
      { title: 'Walk through & re-test', body: 'We present the findings at your office and re-test after your fixes.' },
    ],
    faqs: [
      { q: 'Which areas of Pune do you cover?', a: 'We work with companies across Pune and Pimpri-Chinchwad for on-site visits. Remote testing is available anywhere in India.' },
      { q: 'Do all engagements need an on-site visit?', a: 'No. Most application and cloud testing is remote. On-site visits are only needed for internal network or Wi-Fi testing, or if you prefer to meet in person.' },
      { q: 'Can you help fix the issues you find?', a: 'Yes. Beyond the report, our IT consulting and infrastructure team can help with remediation under a separate scope.' },
      { q: 'What do you need from us to start?', a: 'A completed scoping questionnaire, a signed NDA, and — before testing — a signed authorisation letter from someone with authority over the systems.' },
      { q: 'Do you provide CERT-In empanelled audits?', a: 'Some government and regulated organisations must use a CERT-In empanelled auditor. Tell us at the scoping stage if this applies to you, and we will advise you honestly on the right route.' },
    ],
    cta: { label: 'Book a scoping meeting', href: '/contact?service=vapt', note: 'Meet us in Pune or on a video call.' },
    detailLink: { label: 'See the full VAPT service', href: '/services#vapt' },
    related: ['vapt-services-india', 'it-hardware-amc-pune'],
  },
  {
    slug: 'it-hardware-amc-pune',
    section: 'services',
    metaTitle: 'IT Hardware Supply & AMC in Pune — Laptops, Servers, Networking & Maintenance',
    metaDescription:
      'Laptops, desktops, servers, networking, and structured cabling for Pune offices — supplied, installed, and maintained under an annual maintenance contract (AMC) with on-site support.',
    eyebrow: 'IT hardware & AMC · Pune',
    h1: 'IT hardware for your Pune office — supplied, set up, and looked after.',
    intro:
      'We supply laptops, desktops, servers, and networking equipment to offices across Pune, install and configure everything, and keep it running under an annual maintenance contract with on-site support.',
    color: 'from-cyan-500 to-teal-600',
    icon: 'Server',
    pains: [
      { title: 'Setting up or expanding an office', body: 'New desks need laptops, network points, Wi-Fi, and a firewall — ideally from one accountable partner.' },
      { title: 'Ageing equipment', body: 'Slow machines and unreliable networks cost your team time every single day.' },
      { title: 'No one to call when it breaks', body: 'Without a maintenance partner, every fault means finding a technician from scratch.' },
    ],
    featuresTitle: 'One partner for your IT estate',
    features: [
      { title: 'Laptops & desktops', body: 'Genuine, warranty-backed machines from established brands, chosen for your team\'s work.' },
      { title: 'Servers & storage', body: 'Servers, storage, and backup systems sized for your workload.' },
      { title: 'Networking & Wi-Fi', body: 'Routers, switches, firewalls, and business-grade Wi-Fi, configured properly.' },
      { title: 'Structured cabling & power', body: 'Network cabling, rack installation, and UPS power backup.' },
      { title: 'Installation & setup', body: 'OS setup, user accounts, security software, and email configuration — ready on day one.' },
      { title: 'Annual maintenance (AMC)', body: 'Preventive maintenance visits and on-site breakdown support across Pune.' },
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'Site visit', body: 'We visit your Pune office to understand your needs and space.' },
      { title: 'Itemised quotation', body: 'A clear quotation with recommended models and installation.' },
      { title: 'Delivery & installation', body: 'Everything delivered, installed, configured, and documented.' },
      { title: 'Ongoing AMC', body: 'Preventive visits and breakdown support under a maintenance plan.' },
    ],
    faqs: [
      { q: 'Which areas do you cover for on-site support?', a: 'We provide on-site installation and AMC support across Pune and Pimpri-Chinchwad. Tell us your location when you contact us.' },
      { q: 'What is the difference between comprehensive and non-comprehensive AMC?', a: 'A comprehensive AMC includes both labour and most spare parts. A non-comprehensive AMC covers labour only, with parts charged separately after your approval.' },
      { q: 'Is the hardware genuine with warranty?', a: 'Yes. Equipment is new, genuine, and carries the manufacturer\'s warranty. We help you log warranty claims.' },
      { q: 'Can you take over maintenance of equipment we already have?', a: 'Yes. We can inspect your existing equipment and add it to an AMC if it is in working condition.' },
      { q: 'Do you dispose of old equipment?', a: 'On request, we arrange for old equipment to go to a registered e-waste recycler, with data-bearing devices wiped first.' },
    ],
    cta: { label: 'Request a site visit', href: '/contact?service=it-hardware', note: 'We will visit, assess, and send an itemised quote.' },
    detailLink: { label: 'See the full IT hardware service', href: '/services#it-hardware' },
    related: ['vapt-services-pune', 'vehicle-dealer-software'],
  },
];

export const landingHref = (p: LandingPage) => `/${p.section}/${p.slug}`;
