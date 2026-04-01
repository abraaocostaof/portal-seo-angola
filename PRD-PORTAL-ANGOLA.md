# PRD - Portal SEO Angola (angola.abraaocosta.com.br)

## 1. Visão Geral

**Objetivo:** Criar um portal de landing pages SEO para Angola, semelhante ao projeto brasileiro, visando capturar buscas de empreendedores angolanos interessados em serviços digitais.

**Domínio:** https://angola.abraaocosta.com.br

**Idioma:** Português de Portugal (pt-PT)

**Mercado:** Empresários e empreendedores em Angola que buscam soluções tecnológicas (apps, websites, sistemas, marketing digital)

---

## 2. Estrutura de URLs

**Formato:** `/{servico}/{cidade}`

**Exemplos:**
```
/criacao-de-aplicativos/luanda
/criacao-de-aplicativos/benguela
/sistema-de-delivery-para-restaurante/huambo
/agencia-de-marketing-digital/lubango
```

---

## 3. Dados Necessários

### 3.1 Províncias de Angola (18)

| Código | Nome | Capital |
|--------|------|---------|
| Luanda | Luanda | Luanda |
| Benguela | Benguela | Benguela |
| Huambo | Huambo | Huambo |
| Huíla | Huíla | Lubango |
| Cabinda | Cabinda | Cabinda |
| Kwanza Norte | Kwanza Norte | N'dalatando |
| Kwanza Sul | Kwanza Sul | Sumbe |
| Namibe | Namibe | Namibe |
| Bengo | Bengo | Caxito |
| Zaire | Zaire | M'banza-Conde |
| Bié | Bié | Kuito |
| Cunene | Cunene | Ondjiva |
| Lunda Norte | Lunda Norte | Dundo |
| Lunda Sul | Lunda Sul | Saurimo |
| Malanje | Malanje | Malanje |
| Moxico | Moxico | Luena |
| Uíge | Uíge | Uíge |
| Cuando Cubango | Cuando Cubango | Menongue |

### 3.2 Cidades Principais (minímo 150)

Cidades principais a incluir:
- Luanda, Benguela, Lobito, Huambo, Lubango
- Cabinda, Kuito, Malanje, Sumbe, Namibe
- Caxito, N'dalatando, M'banza-Conde, Ondjiva
- Dundo, Saurimo, Luena, Uíge, Menongue
- + outras cidades e municípios principais

---

## 4. Arquivos JSON Necessários

### 4.1 `angola.json` - Cidades
```json
[
  {
    "slug": "luanda",
    "nome": "Luanda",
    "provincia": "Luanda",
    "provincia_sigla": "LUA",
    "ddd": "222",
    "populacao": 8972000
  }
]
```

### 4.2 `provincias.json` - Províncias com textos únicos
```json
{
  "LUA": {
    "nome": "Luanda",
    "regiao": "Norte",
    "capital": "Luanda",
    "populacao": 8972000,
    "caracteristicas": ["maior centro económico", "cidade capital", "hub empresarial"],
    "frases": [
      "Luanda, a capital económica de Angola, é o polo tecnológico em plena expansão.",
      "O mercado luandense exige soluções digitais de alto nível para competir globalmente."
    ]
  }
}
```

### 4.3 `termos.json` - Termos de pesquisa

Mesmos 145 termos do Brasil, traduzidos/adaptados para Angola:

```json
[
  { "termo": "criação de aplicações", "slug": "criacao-de-aplicacoes" },
  { "termo": "desenvolvimento de aplicações", "slug": "desenvolvimento-de-aplicacoes" },
  { "termo": "empresa de aplicações", "slug": "empresa-de-aplicacoes" },
  { "termo": "criação de sites profissionais", "slug": "criacao-de-sites-profissionais" },
  { "termo": "sistema de delivery para restaurante", "slug": "sistema-de-delivery-para-restaurante" },
  { "termo": "app de entregas", "slug": "app-de-entregas" },
  { "termo": "agência de marketing digital", "slug": "agencia-de-marketing-digital" },
  { "termo": "desenvolvedor full stack", "slug": "desenvolvedor-full-stack" }
  // ... (todos os 145 termos adaptados)
]
```

---

## 5. Adaptações para Português de Portugal

### 5.1 Termos a Adaptar

| Brasil | Angola/Portugal |
|--------|----------------|
| aplicativo | aplicação / app |
| delivery | entrega / delivery |
| desenvolvedor | programador / desenvolvedor |
| cidade | cidade |
|营销 | marketing |
| сайт | site |

### 5.2 Frases Adaptadas

**Luanda (exemplo):**
```
"Luanda, a capital económica de Angola, pulsa com oportunidades digitais."
"O mercado luandense exige presença online profissional para destacar-se."
"Empresas que apostam em tecnologia em Luanda dominam o mercado angolano."
```

**Benguela:**
```
"Benguela, com sua costa histórica, está a transformar o Comércio com soluções digitais."
"A região de Benguela e Lobito precisa de apps que conectem empresas e clientes."
```

**Huambo:**
```
"O Huambo, coração do planalto central, está a despertar para o mundo digital."
"A provinces do Huambo oferece oportunidades únicas para empreendedores tech."
```

---

## 6. Modelo de Dados - Cidades (150+ cidades)

### 6.1 Estrutura do JSON
```json
[
  { "slug": "luanda", "nome": "Luanda", "provincia": "Luanda", "ddd": "222", "populacao": 8972000 },
  { "slug": "benguela", "nome": "Benguela", "provincia": "Benguela", "ddd": "272", "populacao": 635000 },
  { "slug": "lobito", "nome": "Lobito", "provincia": "Benguela", "ddd": "272", "populacao": 394000 },
  { "slug": "lubango", "nome": "Lubango", "provincia": "Huíla", "ddd": "265", "populacao": 600000 },
  { "slug": "huambo", "nome": "Huambo", "provincia": "Huambo", "ddd": "241", "populacao": 1300000 },
  { "slug": "kuito", "nome": "Kuito", "provincia": "Bié", "ddd": "272", "populacao": 167000 },
  { "slug": "malanje", "nome": "Malanje", "provincia": "Malanje", "ddd": "251", "populacao": 518000 },
  { "slug": "cabinda", "nome": "Cabinda", "provincia": "Cabinda", "ddd": "231", "populacao": 699000 },
  { "slug": "namibe", "nome": "Namibe", "provincia": "Namibe", "ddd": "264", "populacao": 291000 },
  { "slug": "sumbe", "nome": "Sumbe", "provincia": "Kwanza Sul", "ddd": "232", "populacao": 149000 },
  { "slug": "caxito", "nome": "Caxito", "provincia": "Bengo", "ddd": "233", "populacao": 93000 },
  { "slug": "ndalatando", "nome": "N'dalatando", "provincia": "Kwanza Norte", "ddd": "231", "populacao": 128000 },
  { "slug": "mbzanza-conde", "nome": "M'banza-Conde", "provincia": "Zaire", "ddd": "234", "populacao": 93000 },
  { "slug": "ondjiva", "nome": "Ondjiva", "provincia": "Cunene", "ddd": "265", "populacao": 125000 },
  { "slug": "dundo", "nome": "Dundo", "provincia": "Lunda Norte", "ddd": "251", "populacao": 177000 },
  { "slug": "saurimo", "nome": "Saurimo", "provincia": "Lunda Sul", "ddd": "251", "populacao": 129000 },
  { "slug": "luena", "nome": "Luena", "provincia": "Moxico", "ddd": "252", "populacao": 150000 },
  { "slug": "uige", "nome": "Uíge", "provincia": "Uíge", "ddd": "233", "populacao": 148000 },
  { "slug": "menongue", "nome": "Menongue", "provincia": "Cuando Cubango", "ddd": "271", "populacao": 125000 }
]
```

---

## 7. Estrutura de Arquivos do Projeto

```
portal-seo-angola/
├── src/
│   └── app/
│       ├── [servico]/
│       │   └── [cidade]/
│       │       └── page.jsx
│       ├── layout.js
│       ├── page.js
│       ├── globals.css
│       └── sitemap.js
├── public/
│   ├── google*.html
│   └── sitemap.xml
├── provincias.json
├── angola.json
├── termos.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 8. Sitemap Configuration

```javascript
// sitemap.js
import angola from '../../angola.json';
import termos from '../../termos.json';

const BASE_URL = 'https://angola.abraaocosta.com.br';
const URLS_POR_SITEMAP = 50000;

export async function generateSitemaps() {
  const total = termos.length * angola.length;
  return Array.from({ length: Math.ceil(total / URLS_POR_SITEMAP) }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }) {
  const idNumero = Number(id) || 0;
  const start = idNumero * URLS_POR_SITEMAP;
  const end = Math.min((idNumero + 1) * URLS_POR_SITEMAP, termos.length * angola.length);

  const urls = [];
  for (let i = start; i < end; i++) {
    const termoIndex = Math.floor(i / angola.length);
    const cidadeIndex = i % angola.length;
    if (termos[termoIndex] && angola[cidadeIndex]) {
      urls.push({
        url: `${BASE_URL}/${termos[termoIndex].slug}/${angola[cidadeIndex].slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }
  return urls;
}
```

---

## 9. Cálculo de URLs

| Item | Quantidade |
|------|------------|
| Termos | 145 |
| Cidades | ~150 |
| **Total URLs** | **~21.750 URLs** |
| Sitemaps | 1 (dentro do limite) |

---

## 10. Checklist de Implementação

### Fase 1: Setup
- [ ] Criar novo projeto Next.js
- [ ] Configurar domínio no Vercel
- [ ] Configurar ESLint e Tailwind

### Fase 2: Dados
- [ ] Criar `angola.json` com 150+ cidades
- [ ] Criar `provincias.json` com 18 províncias e frases
- [ ] Criar/adaptar `termos.json` (145 termos em pt-PT)

### Fase 3: Código
- [ ] Copiar e adaptar `page.jsx` para Angola
- [ ] Configurar `sitemap.js`
- [ ] Configurar `layout.js` e meta tags

### Fase 4: Deploy
- [ ] Push para GitHub
- [ ] Configurar domínio no Vercel
- [ ] Verificar sitemap
- [ ] Submeter no Search Console

### Fase 5: SEO
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Google Tag Manager (opcional)

---

## 11. Contato para WhatsApp

**Número:** Manter o mesmo: +244 983 233 310 (Maranhão, Brasil)

**Nota:** A diferença é que agora atende clientes angolanos. O WhatsApp permanece o mesmo.

---

## 12. Cronograma Estimado

| Fase | Tempo |
|------|-------|
| Setup | 30 min |
| Dados (cidades + provincias) | 2-3 horas |
| Código | 1 hora |
| Deploy + testes | 1 hora |
| **Total** | **5-6 horas** |

---

## 13. Diferenças do Projeto Brasil

| Aspecto | Brasil | Angola |
|---------|--------|--------|
| Unidades | Estados (27) | Províncias (18) |
| Cidades | 5.570 | ~150 |
| URLs | 807.650 | ~21.750 |
| Idioma | pt-BR | pt-PT |
| Moeda | R$ | Kz (Kwanza) |
| DDI | +55 | +244 |

---

## 14. Pontos de Atenção

1. **DDD de Angola:** Todos começam com +244 (não usar DDD local)
2. **População:** Dados podem não ser exatos - usar estimativas
3. **Internet:** Considerar que acesso pode ser limitado
4. **Mobile first:** Maioria acessa por telemóvel
5. **Pagamentos:** Considerar integração com transferências angolanas
