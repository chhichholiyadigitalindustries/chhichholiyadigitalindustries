import { CDI_BRAND, getMailtoUrl, getWhatsAppUrl } from '../config/brand';

export const INDUSTRY_OPTIONS = [
  'Manufacturing Company',
  'Industrial Supplier',
  'Fabrication & Engineering',
  'Distributor & Wholesaler',
  'Retail & Showroom',
  'MSME / Small Business',
  'Startup / SaaS Venture',
  'Healthcare / Education / Services',
  'Other Industry',
];

export const SERVICE_OPTIONS = [
  'Business Website Development',
  'Manufacturing / Industrial Website',
  'Custom Web Application',
  'Mobile Application Development',
  'AI Solutions & Business Automation',
  'Business Software Development',
  'UI/UX & Digital Product Engineering',
  'MSME Digital Solutions / BrandX',
  'Other Custom Requirement',
];

export const BUDGET_OPTIONS = [
  '₹15,000 – ₹35,000 (Starter Business Website / Landing)',
  '₹35,000 – ₹75,000 (Multi-Page Custom Website / Catalogue)',
  '₹75,000 – ₹2,00,000 (Web Application / Software / Mobile MVP)',
  '₹2,00,000+ (Enterprise Platform / Custom AI Suite)',
  'Flexible / Discuss After Requirement Call',
];

export function validateEnquiryForm({ name, email, phone, description, consent, websiteTrap }) {
  const errors = {};
  if (websiteTrap) {
    errors.form = 'Automated submission rejected.';
    return errors;
  }
  if (!name || !name.trim() || name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!email || !email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  const digits = (phone || '').replace(/\D/g, '');
  if (!phone || !phone.trim()) {
    errors.phone = 'Please enter your phone or WhatsApp number.';
  } else if (digits.length < 10) {
    errors.phone = 'Please enter a valid 10+ digit phone number.';
  }
  if (!description || !description.trim() || description.trim().length < 10) {
    errors.description = 'Please describe your project requirements (at least 10 characters).';
  }
  if (!consent) {
    errors.consent = 'Please confirm consent so CDI can respond to your enquiry.';
  }
  return errors;
}

export function buildEnquiryLinks(data, inquiryId) {
  const summaryLines = [
    `Reference: ${inquiryId}`,
    `Name: ${data.name}`,
    `Business: ${data.company || 'Not Specified'}`,
    `Industry: ${data.industry}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Requirements: ${data.description}`,
  ].join('\n');

  return {
    whatsappUrl: getWhatsAppUrl(`Hello CDI Team,\n\nNew Project Enquiry:\n${summaryLines}`),
    mailtoUrl: getMailtoUrl(
      `Project Enquiry [${data.service}] - ${data.name} (${inquiryId})`,
      summaryLines
    ),
  };
}

export async function submitEnquiry(data, sourceLabel = 'CDI Website Contact Form') {
  const inquiryId = `CDI-${Math.floor(100000 + Math.random() * 900000)}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${CDI_BRAND.email}`,
      {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Enquiry: ${data.name} [${data.service}] (${inquiryId})`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
          'Reference ID': inquiryId,
          'Client Name': data.name,
          'Business / Company': data.company || 'Not Specified',
          Industry: data.industry,
          Email: data.email,
          Phone: data.phone,
          'Required Service': data.service,
          'Approximate Budget': data.budget,
          'Project Description': data.description,
          Source: sourceLabel,
        }),
      }
    );

    clearTimeout(timeout);

    let result = {};
    try {
      result = await response.json();
    } catch {
      return {
        delivered: false,
        inquiryId,
        reason: 'Could not verify server response. Please send directly via WhatsApp or Email below.',
      };
    }

    const isSuccess =
      response.ok &&
      (result.success === true || result.success === 'true');

    if (isSuccess) {
      return { delivered: true, inquiryId };
    }

    return {
      delivered: false,
      inquiryId,
      reason:
        result.message ||
        'Automated email relay did not confirm delivery. Please send directly via WhatsApp or Email below.',
    };
  } catch (err) {
    clearTimeout(timeout);
    return {
      delivered: false,
      inquiryId,
      reason:
        err?.name === 'AbortError'
          ? 'Request timed out. Please send your specification directly via WhatsApp or Email below.'
          : 'Network or browser privacy blocker prevented automated relay. Please send directly via WhatsApp or Email below.',
    };
  }
}
