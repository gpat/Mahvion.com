# Mahvion — Landing Website

Production-ready Next.js 14 landing website for the Mahvion SaaS ecosystem
(Vehicle ERP, Medscribe, Insurance, Real Estate, and future apps).

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** + gradient design system
- **Framer Motion** for animations
- **Lucide** icons
- SEO (metadata, sitemap.xml, robots.txt, OpenGraph)
- VPS-ready (Nginx + PM2 cluster mode)

## Project Structure

```
Mahvion.com/
├── app/
│   ├── layout.tsx           # Root layout, SEO, Navbar, Footer
│   ├── page.tsx             # Home
│   ├── globals.css          # Tailwind + design tokens
│   ├── products/page.tsx
│   ├── pricing/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx       # Launch portal for all SaaS apps
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── ProductCard.tsx
│   ├── Features.tsx
│   ├── PricingCards.tsx
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
├── lib/site.ts              # Central site config (name, URL, apps)
├── deploy/nginx.conf        # Nginx config with subdomain routing
├── ecosystem.config.js      # PM2 cluster config
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── .env.example
└── package.json
```

## Local Development

```bash
cp .env.example .env.local
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build
npm start            # starts on port 3000
```

---

## Deployment — Hostinger VPS

### 1. Server Prerequisites

```bash
# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git

# Install PM2 globally
sudo npm install -g pm2
```

### 2. Clone + Build

```bash
sudo mkdir -p /var/www/mahvion.com
sudo chown -R $USER:$USER /var/www/mahvion.com
cd /var/www/mahvion.com
git clone <your-repo-url> .
cp .env.example .env.local   # edit real values
npm ci
npm run build
```

### 3. PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd          # follow instructions printed
```

### 4. Nginx + SSL

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/mahvion.com
sudo ln -s /etc/nginx/sites-available/mahvion.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# SSL with Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d mahvion.com -d www.mahvion.com \
  -d erp.mahvion.com -d med.mahvion.com \
  -d ins.mahvion.com -d real.mahvion.com
```

### 5. Domain Setup (Hostinger DNS)

Add these A records pointing to your VPS IP:

| Host  | Type | Value        |
|-------|------|--------------|
| @     | A    | YOUR_VPS_IP  |
| www   | A    | YOUR_VPS_IP  |
| erp   | A    | YOUR_VPS_IP  |
| med   | A    | YOUR_VPS_IP  |
| ins   | A    | YOUR_VPS_IP  |
| real  | A    | YOUR_VPS_IP  |

### 6. Updates / Redeploy

```bash
cd /var/www/mahvion.com
git pull
npm ci
npm run build
pm2 reload mahvion-landing
```

---

## SEO Optimization

- Metadata API with OpenGraph + Twitter cards
- `sitemap.xml` auto-generated at `/sitemap.xml`
- `robots.txt` auto-generated at `/robots.txt`
- Canonical URLs set via `metadataBase`
- Semantic HTML + accessible markup

## Performance Optimization

- Next.js App Router + React Server Components
- Automatic code-splitting per route
- Long-cache headers for `/_next/static/` via Nginx
- Gzip + Brotli via Nginx
- AVIF/WebP image formats
- Framer Motion lazy via client components only
- Font system stack (no external font requests)
- PM2 cluster mode = multi-core scaling

## License

© Mahvion. All rights reserved.
