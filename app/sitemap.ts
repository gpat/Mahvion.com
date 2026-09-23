import type { MetadataRoute } from 'next';
import { products, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', '/products', ...products.map((p) => `/products/${p.slug}`),
    '/services', '/industries', '/real-estate', '/about', '/contact', '/login',
  ];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}
