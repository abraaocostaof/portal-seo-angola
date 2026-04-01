import cidades from '../../../../cidades.json';
import termos from '../../../../termos.json';

const BASE_URL = 'https://angola.abraaocosta.com.br';

export async function GET() {
  const urls = [];

  // Opcional: incluir a homepage
  urls.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1
  });

  // Gerar todas as combinações termo x cidade
  for (const t of termos) {
    for (const c of cidades) {
      if (!t?.slug || !c?.slug) continue;
      urls.push({
        url: `${BASE_URL}/${t.slug}/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
      });
    }
  }

  const entries = urls.map(u =>
    `<url><loc>${u.url}</loc><lastmod>${u.lastModified.toISOString()}</lastmod><changefreq>${u.changeFrequency}</changefreq><priority>${u.priority}</priority></url>`
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
