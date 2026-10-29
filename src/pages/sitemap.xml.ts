export const prerender = true;

const site = 'https://expressboda.com';
const indexablePaths = ['/en/'];

export function GET() {
  const urls = indexablePaths
    .map((path) => `  <url><loc>${site}${path}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
