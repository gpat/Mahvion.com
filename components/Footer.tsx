import Link from 'next/link';
import { products, site } from '@/lib/site';

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
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products#${p.slug}`} className="hover:text-brand-600">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about" className="hover:text-brand-600">About</Link></li>
            <li><Link href="/pricing" className="hover:text-brand-600">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            <li><Link href="/login" className="hover:text-brand-600">Launch App</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-600">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="hover:text-brand-600">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
