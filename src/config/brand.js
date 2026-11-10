/**
 * Official Verified Business Identity — CHHICHHOLIYA DIGITAL INDUSTRIES (CDI)
 * Single source of truth for contact channels, leadership, and deployed URLs.
 */

export const SITE_ORIGIN = 'https://chhichholiyadigitalindustries.github.io';
export const BASE_PATH = '/chhichholiyadigitalindustries';
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

export const CDI_BRAND = {
  legalName: 'CHHICHHOLIYA DIGITAL INDUSTRIES',
  displayName: 'Chhichholiya Digital Industries',
  shortName: 'CDI',
  tagline: 'Engineering Digital Possibilities.',
  positioning: 'Digital Technology & Product Engineering Company',
  founder: {
    name: 'Abhishek Chhichholiya',
    role: 'Founder',
  },
  coo: {
    name: 'Mandeep',
    role: 'Chief Operating Officer (COO)',
  },
  email: 'chhichholiyadigitalindustries@gmail.com',
  phones: [
    {
      display: '+91 7232076778',
      raw: '917232076778',
      tel: 'tel:+917232076778',
      label: 'Primary Business Line & WhatsApp',
    },
    {
      display: '+91 7027115110',
      raw: '917027115110',
      tel: 'tel:+917027115110',
      label: 'Secondary Business Line',
    },
  ],
  whatsappNumber: '917232076778',
  serviceArea: 'India (Remote & Digital Technology Services Nationwide)',
  registrationLabel: 'Udyam Registered MSME • India',
  siteUrl: `${SITE_URL}/`,
  logoUrl: `${SITE_URL}/assets/cdi-logo.png`,
  logoWebpPath: 'assets/cdi-logo.webp',
  logoPngPath: 'assets/cdi-logo.png',
};

export function getWhatsAppUrl(
  message = 'Hello CDI Team, I would like to discuss a digital project for my business.'
) {
  return `https://wa.me/${CDI_BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(subject = 'Project Enquiry — CDI', body = '') {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  return `mailto:${CDI_BRAND.email}?${params.toString()}`;
}

export function resolvePublicAsset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env?.BASE_URL || `${BASE_PATH}/`;
  return path.startsWith('/') ? `${base}${path.slice(1)}` : `${base}${path}`;
}
