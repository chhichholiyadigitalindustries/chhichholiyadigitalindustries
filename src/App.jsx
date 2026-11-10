import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { SEO_LANDING_PAGES } from './data/seoLandingPages';

// Lazy-loaded interior pages, modals, and non-critical desktop cursor for fast LCP
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const EngineeringPage = lazy(() => import('./pages/EngineeringPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ServiceLandingPage = lazy(() => import('./pages/ServiceLandingPage'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cdi-black">
      <div className="w-8 h-8 rounded-full border-2 border-cdi-gold border-t-transparent animate-spin" aria-label="Loading page" />
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Business Website Development');

  const handleOpenModalWithService = (serviceName) => {
    setSelectedService(serviceName || 'Business Website Development');
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="relative bg-cdi-black text-cdi-white min-h-screen selection:bg-cdi-gold selection:text-cdi-black flex flex-col justify-between">
        <ScrollToTop />

        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>

        <Navbar onOpenProjectModal={() => handleOpenModalWithService('Business Website Development')} />

        <main className="flex-grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route
                path="/"
                element={<Home onOpenProjectModal={() => handleOpenModalWithService('Business Website Development')} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/engineering" element={<EngineeringPage />} />
              <Route path="/work" element={<WorkPage onOpenProjectModal={handleOpenModalWithService} />} />
              <Route path="/gallery" element={<Navigate to="/work" replace />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<ArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* Dedicated All-India SEO Landing Pages */}
              {SEO_LANDING_PAGES.map((page) => (
                <Route
                  key={page.slug}
                  path={page.route}
                  element={<ServiceLandingPage page={page} />}
                />
              ))}

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {isModalOpen && (
          <Suspense fallback={null}>
            <ProjectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              defaultService={selectedService}
            />
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}
