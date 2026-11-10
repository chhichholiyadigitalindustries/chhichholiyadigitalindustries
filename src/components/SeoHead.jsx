import { useEffect } from 'react';
import { CDI_BRAND } from '../config/brand';
import {
  buildCanonicalUrl,
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildBreadcrumbSchema,
} from '../data/seoConfig';

function upsertMeta(attrName, attrValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SeoHead({
  route = '/',
  title,
  description,
  breadcrumbs = [],
  noindex = false,
  schemas = [],
  ogType = 'website',
}) {
  useEffect(() => {
    const canonical = buildCanonicalUrl(route);
    const resolvedTitle = title || `${CDI_BRAND.displayName} (${CDI_BRAND.shortName})`;
    const resolvedDesc =
      description ||
      'Chhichholiya Digital Industries (CDI) builds websites, custom web applications, mobile apps, business software, and AI automation solutions across India.';

    document.title = resolvedTitle;

    upsertMeta('name', 'title', resolvedTitle);
    upsertMeta('name', 'description', resolvedDesc);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:title', resolvedTitle);
    upsertMeta('property', 'og:description', resolvedDesc);
    upsertMeta('property', 'og:image', CDI_BRAND.logoUrl);

    upsertMeta('property', 'twitter:card', 'summary_large_image');
    upsertMeta('property', 'twitter:url', canonical);
    upsertMeta('property', 'twitter:title', resolvedTitle);
    upsertMeta('property', 'twitter:description', resolvedDesc);
    upsertMeta('property', 'twitter:image', CDI_BRAND.logoUrl);

    // Build JSON-LD graph
    const graph = [buildOrganizationSchema()];
    if (route === '/') {
      graph.push(buildWebsiteSchema());
    }
    const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
    if (breadcrumbSchema && !noindex) {
      graph.push(breadcrumbSchema);
    }
    schemas.filter(Boolean).forEach((s) => graph.push(s));

    const ldJson = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let script = document.head.querySelector('script[data-cdi-schema="true"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-cdi-schema', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);
  }, [route, title, description, noindex, ogType, JSON.stringify(breadcrumbs), JSON.stringify(schemas)]);

  return null;
}
