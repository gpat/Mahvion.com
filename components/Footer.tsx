import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-grad-hero" />
            <span className="text-xl font-bold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-600">{site.description}</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Products</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href={site.apps.erp}>Vehicle ERP</a></li>
            <li><a href={site.apps.med}>Medscribe</a></li>
            <li><a href={site.apps.ins}>Insurance System</a></li>
            <li><a href={site.apps.real}>Real Estate ERP</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>{site.email}</li>
            <li>{site.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
