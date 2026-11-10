/**
 * Post-build Static SEO Pre-renderer & Sitemap Generator for GitHub Pages
 * Generates route-level index.html files (HTTP 200 OK), unique meta tags,
 * canonical links, valid JSON-LD structured data, sitemap.xml, and 404.html.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CDI_BRAND, SITE_URL } from '../src/config/brand.js';
import {
  CORE_SEO_PAGES,
  buildCanonicalUrl,
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildArticleSchema,
} from '../src/data/seoConfig.js';
import { SEO_LANDING_PAGES } from '../src/data/seoLandingPages.js';
import { INSIGHTS_ARTICLES } from '../src/data/insightsArticles.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHeadTags({ title, description, canonical, ogType = 'website', noindex = false, jsonLd }) {
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  return `
    <title>${escapeHtml(title)}</title>
    <meta name="title" content="${escapeHtml(title)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="${escapeHtml(ogType)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(CDI_BRAND.logoUrl)}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${escapeHtml(canonical)}" />
    <meta property="twitter:title" content="${escapeHtml(title)}" />
    <meta property="twitter:description" content="${escapeHtml(description)}" />
    <meta property="twitter:image" content="${escapeHtml(CDI_BRAND.logoUrl)}" />
    <script type="application/ld+json" data-cdi-schema="true">${JSON.stringify(jsonLd)}</script>
  `;
}

function injectIntoHtml(templateHtml, pageSpec) {
  // Strip existing dynamic SEO tags from template so each page gets clean unique ones
  let html = templateHtml
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="(?:title|description|robots)"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="(?:og|twitter):[^"]*"[^>]*>\s*/gi, '')
    .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi, '');

  const headTags = buildHeadTags(pageSpec);
  html = html.replace('</head>', `${headTags}\n  </head>`);

  // Add crawlable semantic fallback inside #root (replaced cleanly on React hydration)
  const fallbackMarkup = `<div id="root"><noscript><main><h1>${escapeHtml(
    pageSpec.heading || pageSpec.title
  )}</h1><p>${escapeHtml(pageSpec.description)}</p></main></noscript></div>`;
  html = html.replace('<div id="root"></div>', fallbackMarkup);

  return html;
}

function collectAllRoutes() {
  const routes = [];

  // 1. Core Pages
  Object.values(CORE_SEO_PAGES).forEach((page) => {
    const graph = [buildOrganizationSchema()];
    if (page.route === '/') {
      graph.push(buildWebsiteSchema());
    }
    const bc = buildBreadcrumbSchema(page.breadcrumbs);
    if (bc) graph.push(bc);

    routes.push({
      route: page.route,
      priority: page.priority,
      changefreq: page.changefreq,
      title: page.title,
      heading: page.title,
      description: page.description,
      canonical: buildCanonicalUrl(page.route),
      ogType: 'website',
      jsonLd: { '@context': 'https://schema.org', '@graph': graph },
    });
  });

  // 2. Dedicated All-India SEO Landing Pages
  SEO_LANDING_PAGES.forEach((lp) => {
    const canonical = buildCanonicalUrl(lp.route);
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: lp.serviceType, path: lp.route },
    ];
    const graph = [
      buildOrganizationSchema(),
      buildBreadcrumbSchema(breadcrumbs),
      buildServiceSchema({
        name: lp.serviceType,
        description: lp.description,
        serviceType: lp.primaryKeyword,
        url: canonical,
      }),
    ].filter(Boolean);

    routes.push({
      route: lp.route,
      priority: '0.9',
      changefreq: 'weekly',
      title: lp.title,
      heading: `${lp.h1Title} ${lp.h1Highlight}`,
      description: lp.description,
      canonical,
      ogType: 'website',
      jsonLd: { '@context': 'https://schema.org', '@graph': graph },
    });
  });

  // 3. Insights Articles
  INSIGHTS_ARTICLES.forEach((article) => {
    const canonical = buildCanonicalUrl(article.route);
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Insights', path: '/insights' },
      { name: article.category, path: article.route },
    ];
    const graph = [
      buildOrganizationSchema(),
      buildBreadcrumbSchema(breadcrumbs),
      buildArticleSchema({
        headline: article.headline,
        description: article.metaDescription,
        url: canonical,
        datePublished: article.publishedDate,
        dateModified: article.updatedDate,
        authorName: article.author,
      }),
    ].filter(Boolean);

    routes.push({
      route: article.route,
      priority: '0.7',
      changefreq: 'monthly',
      title: article.title,
      heading: article.headline,
      description: article.metaDescription,
      canonical,
      lastmod: article.updatedDate,
      ogType: 'article',
      jsonLd: { '@context': 'https://schema.org', '@graph': graph },
    });
  });

  return routes;
}

function main() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }

  const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  const allRoutes = collectAllRoutes();

  // Check duplicate canonicals
  const seenCanonicals = new Set();
  for (const r of allRoutes) {
    if (seenCanonicals.has(r.canonical)) {
      throw new Error(`Duplicate canonical URL detected: ${r.canonical}`);
    }
    seenCanonicals.add(r.canonical);

    // Validate JSON-LD serializability
    JSON.parse(JSON.stringify(r.jsonLd));

    const outputHtml = injectIntoHtml(templateHtml, r);

    if (r.route === '/') {
      fs.writeFileSync(indexHtmlPath, outputHtml, 'utf-8');
    } else {
      const cleanDir = r.route.replace(/^\/+|\/+$/g, '');
      const targetDir = path.join(distDir, cleanDir);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, 'index.html'), outputHtml, 'utf-8');
    }
  }

  // Generate noindex 404.html fallback for SPA routes on GitHub Pages
  const notFoundHtml = injectIntoHtml(templateHtml, {
    route: '/404',
    title: '404 — Page Not Found | Chhichholiya Digital Industries (CDI)',
    heading: 'Page Not Found',
    description: 'The requested page could not be found on Chhichholiya Digital Industries.',
    canonical: `${SITE_URL}/`,
    noindex: true,
    jsonLd: { '@context': 'https://schema.org', '@graph': [buildOrganizationSchema()] },
  });
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8');

  // Generate sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = allRoutes
    .map(
      (r) => `  <url>
    <loc>${escapeHtml(r.canonical)}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');

  console.log(`SEO Pre-render complete: ${allRoutes.length} routes generated + sitemap.xml + 404.html`);
}

main();
