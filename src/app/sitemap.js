import cidades from '../../cidades.json';
import termos from '../../termos.json';

const BASE_URL = 'https://angola.abraaocosta.com.br';

export default function sitemap() {
  const urls = [];
  
  urls.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  for (const termo of termos) {
    for (const cidade of cidades) {
      urls.push({
        url: `${BASE_URL}/${termo.slug}/${cidade.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return urls;
}
