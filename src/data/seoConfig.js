import { CDI_BRAND, SITE_URL } from '../config/brand.js';

export function buildCanonicalUrl(routePath = '/') {
  if (!routePath || routePath === '/') {
    return `${SITE_URL}/`;
  }
  const clean = routePath.replace(/^\/+|\/+$/g, '');
  return `${SITE_URL}/${clean}/`;
}

export function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: CDI_BRAND.legalName,
    alternateName: CDI_BRAND.shortName,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: CDI_BRAND.logoUrl,
    },
    description:
      'Chhichholiya Digital Industries (CDI) is an Indian digital technology and product engineering company building business websites, custom web applications, mobile apps, business software, and AI automation systems for businesses across India.',
    email: CDI_BRAND.email,
    founder: {
      '@type': 'Person',
      name: CDI_BRAND.founder.name,
      jobTitle: CDI_BRAND.founder.role,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7232076778',
        contactType: 'sales',
        email: CDI_BRAND.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-7027115110',
        contactType: 'customer support',
        email: CDI_BRAND.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: `${CDI_BRAND.displayName} (${CDI_BRAND.shortName})`,
    description:
      'Digital Technology & Product Engineering Company serving manufacturers, industrial businesses, MSMEs, retailers, and growing enterprises across India.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export function buildBreadcrumbSchema(breadcrumbs = []) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: buildCanonicalUrl(crumb.path || '/'),
    })),
  };
}

export function buildServiceSchema({ name, description, serviceType, url }) {
  return {
    '@type': 'Service',
    name,
    serviceType,
    description,
    url,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

export function buildArticleSchema({ headline, description, url, datePublished, dateModified, authorName }) {
  return {
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: CDI_BRAND.logoUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName || CDI_BRAND.founder.name,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * Core Pages SEO Registry (Keyword-mapped to prevent cannibalization)
 */
export const CORE_SEO_PAGES = {
  '/': {
    route: '/',
    priority: '1.0',
    changefreq: 'weekly',
    primaryKeyword: 'Digital Technology & Product Engineering Company India',
    title: 'CHHICHHOLIYA DIGITAL INDUSTRIES (CDI) | Digital Technology & Product Engineering India',
    description:
      'Chhichholiya Digital Industries (CDI) builds business websites, custom web applications, mobile apps, business software, and AI automation systems for manufacturers, MSMEs, and growing enterprises across India.',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/about': {
    route: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    primaryKeyword: 'About Chhichholiya Digital Industries CDI',
    title: 'About CDI | Founder Abhishek Chhichholiya & Engineering Leadership',
    description:
      'Learn about Chhichholiya Digital Industries (CDI), an Udyam-registered Indian digital technology and product engineering company led by Founder Abhishek Chhichholiya and COO Mandeep.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About CDI', path: '/about' },
    ],
  },
  '/services': {
    route: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    primaryKeyword: 'Digital Engineering & Software Services India',
    title: 'Services | Web, Mobile Apps, AI & Business Software Engineering — CDI',
    description:
      'Explore CDI services: Business Website Development, Custom Web Applications, Mobile Apps, AI Automation, Business Software, and UI/UX Product Engineering across India.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  },
  '/products': {
    route: '/products',
    priority: '0.8',
    changefreq: 'monthly',
    primaryKeyword: 'BrandX Business Platform & AP Core Agent',
    title: 'Products & Innovation Lab | BrandX & AP Core Agent — CDI',
    description:
      'Discover proprietary technology concepts and platforms being engineered at CDI, including BrandX for Indian retailers and MSMEs and AP Core Agent.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
    ],
  },
  '/work': {
    route: '/work',
    priority: '0.8',
    changefreq: 'weekly',
    primaryKeyword: 'CDI Engineering Showcase & Project Demonstrations',
    title: 'Work Gallery & Video Demonstrations | Real Digital Systems — CDI',
    description:
      'Watch real software demonstrations, client projects, and product engineering prototypes built by Chhichholiya Digital Industries across automotive, retail, healthcare, and e-commerce.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Work Gallery', path: '/work' },
    ],
  },
  '/technology': {
    route: '/technology',
    priority: '0.7',
    changefreq: 'monthly',
    primaryKeyword: 'Modern Software Architecture & Tech Stack CDI',
    title: 'Technology Stack & Engineering Architecture | React, Node.js, AI — CDI',
    description:
      'Inspect the modern frontend, backend, database, mobile, AI, and cloud architecture stack used by Chhichholiya Digital Industries to build maintainable digital systems.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Technology', path: '/technology' },
    ],
  },
  '/industries': {
    route: '/industries',
    priority: '0.8',
    changefreq: 'monthly',
    primaryKeyword: 'Digital Solutions for Indian Industries & Businesses',
    title: 'Industries We Serve | Manufacturing, Industrial, Retail & MSME Solutions — CDI',
    description:
      'Digital platforms engineered for Indian manufacturing companies, industrial suppliers, fabrication businesses, distributors, retailers, healthcare clinics, and MSMEs.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
    ],
  },
  '/engineering': {
    route: '/engineering',
    priority: '0.7',
    changefreq: 'monthly',
    primaryKeyword: 'Standards-Aligned Software Engineering Process CDI',
    title: 'Engineering Discipline & Standards Reference | Udyam MSME — CDI',
    description:
      'Understand CDI’s structured engineering lifecycle, Udyam MSME standing, and development practices referencing ISO/IEC 29110, 22989, and 25002.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Engineering Standards', path: '/engineering' },
    ],
  },
  '/insights': {
    route: '/insights',
    priority: '0.8',
    changefreq: 'weekly',
    primaryKeyword: 'Digital Strategy & Manufacturing Website Guides India',
    title: 'Insights & Business Guides | Websites, Software & AI for Indian Businesses — CDI',
    description:
      'Practical guides for Indian manufacturers, industrial suppliers, and MSMEs covering B2B websites, digital product catalogues, web applications, and AI automation.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Insights', path: '/insights' },
    ],
  },
  '/contact': {
    route: '/contact',
    priority: '0.9',
    changefreq: 'monthly',
    primaryKeyword: 'Contact Chhichholiya Digital Industries Project Enquiry',
    title: 'Contact CDI | Discuss Your Project & Request a Technical Proposal',
    description:
      'Connect with Chhichholiya Digital Industries via project enquiry form, WhatsApp (+91 7232076778), phone (+91 7027115110), or official email for projects across India.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  '/privacy': {
    route: '/privacy',
    priority: '0.3',
    changefreq: 'yearly',
    primaryKeyword: 'CDI Privacy Policy',
    title: 'Privacy Policy | Chhichholiya Digital Industries (CDI)',
    description:
      'Read the official privacy and enquiry data handling practices of Chhichholiya Digital Industries (CDI).',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
  '/terms': {
    route: '/terms',
    priority: '0.3',
    changefreq: 'yearly',
    primaryKeyword: 'CDI Terms and Conditions',
    title: 'Terms & Conditions | Chhichholiya Digital Industries (CDI)',
    description:
      'Official terms and conditions governing the use of the Chhichholiya Digital Industries website and project enquiries.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms' },
    ],
  },
};
