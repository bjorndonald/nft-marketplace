import type { MetadataRoute } from 'next';

const today = ((): Date => {
  const d = new Date();
  // Colombia TimeZone (UTC-5)
  d.setUTCHours(-5);
  return d;
})();

export default function sitemap(): MetadataRoute.Sitemap {

  const routes = [
    '',
    'about',
    'blog',
    'donate',
    'projects',
    'uses',
    'colophon',
  ].map((route) => ({
    url: `https://jahir.dev/${route}`,
    lastModified: today.toISOString().split('T')[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
