import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LandingView, { findLanding, landingMetadata, landingParams } from '@/components/LandingView';

export function generateStaticParams() {
  return landingParams('solutions');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = findLanding('solutions', slug);
  return page ? landingMetadata(page) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findLanding('solutions', slug);
  if (!page) notFound();
  return <LandingView page={page} />;
}
