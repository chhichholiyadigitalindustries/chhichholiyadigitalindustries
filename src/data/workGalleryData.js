/**
 * Chhichholiya Digital Industries (CDI) - Work & Video Showcase Data
 * 
 * Local Video files are stored in `public/assets/videos/`
 */

export const WORK_CATEGORIES = [
  'All',
  'Web Engineering',
  'Enterprise & POS',
  'AI & Intelligent Systems',
  'Mobile Apps',
  'Cloud & DevOps'
];

export const WORK_PROJECTS = [
  {
    id: 'jangra-car-workshop',
    title: 'Jangra Car Workshop Digital Platform',
    subtitle: 'Automotive Service Booking, Job Card Management & Customer Telemetry',
    category: 'Web Engineering',
    featured: true,
    year: '2026',
    duration: '01:45',
    client: 'Jangra Car Workshop',
    videoType: 'video',
    videoSrc: '/assets/videos/Jangra-Car-Workshop.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Automotive Web Portal', 'Job Card Management', 'Service Booking', 'SMS Alerts'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio API'],
    description: 'End-to-end digital service platform engineered for Jangra Car Workshop. Features real-time vehicle repair status tracking, automated digital job card generation, spare parts inventory accounting, and instant customer service booking.',
    highlights: [
      'Digital job cards with photo inspections and repair estimate approvals',
      'Automated WhatsApp/SMS status notifications upon vehicle stage progression',
      'Dynamic customer service history ledger and warranty records',
      'Responsive mobile-first design for garage technicians on the shop floor'
    ],
    metrics: [
      { label: 'Job Card Time', value: '-65%' },
      { label: 'Customer Retention', value: '+38%' },
      { label: 'Turnaround Speed', value: '2.4x' }
    ]
  },
  {
    id: 'fashion-adda-dulha-house',
    title: 'Fashion Adda & Dulha House',
    subtitle: 'Premium Ethnic Wear Showroom & Custom Bridal/Groom Ordering Suite',
    category: 'Enterprise & POS',
    featured: true,
    year: '2026',
    duration: '01:20',
    client: 'Fashion Adda & Dulha House',
    videoType: 'video',
    videoSrc: '/assets/videos/Fastion-Adda-Dulha-House.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fashion Retail POS', 'Bridal & Groom Couture', 'Measurement Tracking', 'Catalog'],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Thermal POS API'],
    description: 'Specialized luxury retail digital suite for Fashion Adda & Dulha House. Manages bespoke groom & bridal measurements, fabric inventory tracking, custom fitting schedules, barcode billing, and thermal POS invoicing.',
    highlights: [
      'Custom tailor measurement profiles with fitting trial timeline tracking',
      'Barcode-scanned stock lookup and wedding season collection catalog',
      'Automated customer SMS reminders for trial dates and delivery readiness',
      'Integrated dynamic UPI payment QR with GST thermal receipts'
    ],
    metrics: [
      { label: 'Order Accuracy', value: '100%' },
      { label: 'Fitting Cycle', value: '3 Days Faster' },
      { label: 'Repeat Clients', value: '45%' }
    ]
  },
  {
    id: 'big-basket-ecommerce',
    title: 'Big Basket E-Commerce Grocery Platform',
    subtitle: 'High-Speed Daily Essentials, Smart Cart & Express Hyperlocal Delivery',
    category: 'Web Engineering',
    featured: true,
    year: '2026',
    duration: '02:30',
    client: 'Hyperlocal Grocery Brand',
    videoType: 'video',
    videoSrc: '/assets/videos/Big-Basket-E-Commarce.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hyperlocal Commerce', 'Fast Checkout', 'Inventory Sync', 'Real-time Tracking'],
    techStack: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'Razorpay', 'WebSockets'],
    description: 'Scalable grocery and daily essentials e-commerce application designed for rapid shopping journeys. Includes sub-second category navigation, PIN code-based multi-store delivery slots, instant cart recalculation, and live delivery partner dispatch.',
    highlights: [
      'Instant search across 10,000+ grocery SKUs with zero lag',
      'Hyperlocal warehouse inventory reservation upon adding items to cart',
      'Dynamic time-slot selection with automated route allocation',
      'Integrated multi-tender payments (UPI, Cards, NetBanking, COD)'
    ],
    metrics: [
      { label: 'Cart to Checkout', value: '< 45s' },
      { label: 'Concurrent Shoppers', value: '5,000+' },
      { label: 'Order Accuracy', value: '99.8%' }
    ]
  },
  {
    id: 'rs-health-care',
    title: 'RS Health Care Digital Clinic & Pathology Portal',
    subtitle: 'Doctor Appointment Scheduling, Lab Test Booking & Patient Records Management',
    category: 'Web Engineering',
    featured: true,
    year: '2026',
    duration: '01:55',
    client: 'RS Health Care',
    videoType: 'video',
    videoSrc: '/assets/videos/RS-Health-Care.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Healthcare Web Portal', 'Appointment Engine', 'Pathology Reports', 'Patient Telemetry'],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Cloud Storage', 'Twilio'],
    description: 'A modern healthcare and clinic management platform built for RS Health Care. Enables patients to easily book doctor consultation slots, schedule pathology lab test home pickups, access downloadable encrypted diagnostic reports, and maintain unified digital health records.',
    highlights: [
      'Interactive doctor calendar with instant appointment confirmation & token generation',
      'Encrypted PDF pathology and blood test report downloads from secure patient portal',
      'Automated WhatsApp appointment confirmations, doctor availability alerts & test reminders',
      'HIPAA & digital health compliance structure ensuring clinical data confidentiality'
    ],
    metrics: [
      { label: 'Patient Waiting Time', value: '-50%' },
      { label: 'Online Lab Reports', value: '100% Digital' },
      { label: 'Monthly Consults', value: '2,500+' }
    ]
  },
  {
    id: 'mandeep-portfolio',
    title: 'Mandeep Digital Portfolio & Interactive Showcase',
    subtitle: 'High-Impact Personal Brand Architecture with 60fps Micro-Interactions',
    category: 'Web Engineering',
    featured: true,
    year: '2026',
    duration: '01:10',
    client: 'Mandeep',
    videoType: 'video',
    videoSrc: '/assets/videos/mandeep-Portfolio.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Interactive Portfolio', 'Framer Motion', 'Personal Branding', 'Dark Mode UI'],
    techStack: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide Icons'],
    description: 'An ultra-refined digital portfolio engineered for Mandeep. Features dynamic visual storytelling, 60fps micro-animations, glassmorphic cards, responsive interactive project showcases, client endorsements, and instant direct inquiry integration.',
    highlights: [
      'Lighthouse Performance score of 100/100 with zero layout shifts',
      'Custom interactive project showcase with video walkthroughs and live demos',
      'Smooth spring-physics transitions and custom cursor tracking feedback',
      'Optimized responsive layout across mobile, tablet, and ultra-wide screens'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Animation Frame Rate', value: '60 FPS' },
      { label: 'Inquiry Conversion', value: '+40%' }
    ]
  },
  {
    id: 'brandx-platform',
    title: 'BrandX Enterprise POS & Vyapari Platform',
    subtitle: 'Unified Retail Billing, Thermal Printing & Digital Khata',
    category: 'Enterprise & POS',
    featured: false,
    year: '2026',
    duration: '01:45',
    client: 'MSME & Vyapari Ecosystem',
    videoType: 'video',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    localVideoFallback: '/assets/videos/brandx-demo.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['POS Architecture', 'Thermal Receipts', 'GST Invoicing', 'Khata Ledger'],
    techStack: ['React', 'Electron', 'Node.js', 'SQLite', 'WebUSB', 'TailwindCSS'],
    description: 'A comprehensive operational platform engineered for Indian merchants, shopkeepers, and enterprises. Integrates instant offline-first billing, 58mm/80mm thermal receipt generation, dual-entry digital khata, and instant UPI QR dynamic payment generation.',
    highlights: [
      'Sub-second billing checkout with keyboard shortcuts',
      'Offline-capable SQLite sync with cloud ledger',
      'Automated GSTR-1 & GSTR-3B tax compliance exports',
      'Hardware integration with ESC/POS thermal printers'
    ],
    metrics: [
      { label: 'Checkout Latency', value: '< 400ms' },
      { label: 'Daily Invoices', value: '10,000+' },
      { label: 'Offline Resilience', value: '100%' }
    ]
  },
  {
    id: 'ap-core-ai',
    title: 'AP Core Agent - Intelligent AI Workflow',
    subtitle: 'Multilingual Conversational Engine & Intelligent Task Orchestration',
    category: 'AI & Intelligent Systems',
    featured: false,
    year: '2026',
    duration: '02:10',
    client: 'CDI Innovation Lab',
    videoType: 'video',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    localVideoFallback: '/assets/videos/ap-core-demo.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Generative AI', 'Agentic Workflows', 'Multilingual', 'Voice Engine'],
    techStack: ['Python', 'FastAPI', 'PyTorch', 'Vector Embeddings', 'WebSockets', 'React'],
    description: 'An India-focused autonomous agent system designed to handle natural voice/text interactions in Hindi, English, and regional dialects. Enables automatic document analysis, customer support automation, and multi-step business process execution.',
    highlights: [
      'Low-latency streaming voice inference and STT/TTS pipeline',
      'Context-aware memory with custom vector similarity retrieval',
      'Automated action trigger for ERP and database transactions',
      'Strict enterprise guardrails ensuring zero hallucination on sensitive data'
    ],
    metrics: [
      { label: 'Voice Response', value: '< 650ms' },
      { label: 'Dialect Accuracy', value: '96.4%' },
      { label: 'Task Automation', value: '85%' }
    ]
  }
];

export const WORK_STATS = [
  { value: '15+', label: 'Engineered Deliverables', sub: 'Production software' },
  { value: '100%', label: 'In-House Architecture', sub: 'No stitched shortcuts' },
  { value: '99.9%', label: 'Infrastructure Uptime', sub: 'Mission critical reliability' },
  { value: '10K+', label: 'Daily End-Users', sub: 'Active transaction systems' }
];
