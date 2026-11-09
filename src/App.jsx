import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import TechnologyPage from './pages/TechnologyPage';
import IndustriesPage from './pages/IndustriesPage';
import EngineeringPage from './pages/EngineeringPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import WorkPage from './pages/WorkPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Web Engineering');

  const handleOpenModalWithService = (serviceName) => {
    setSelectedService(serviceName || 'Web Engineering');
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="relative bg-cdi-black text-cdi-white min-h-screen selection:bg-cdi-gold selection:text-cdi-black flex flex-col justify-between">
        {/* Scroll Reset on route change */}
        <ScrollToTop />

        {/* Desktop Custom Tracking Cursor */}
        <CustomCursor />

        {/* Global Sticky Header */}
        <Navbar onOpenProjectModal={() => handleOpenModalWithService('Web Engineering')} />

        {/* Main Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenProjectModal={() => handleOpenModalWithService('Web Engineering')} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/work" element={<WorkPage onOpenProjectModal={handleOpenModalWithService} />} />
            <Route path="/gallery" element={<WorkPage onOpenProjectModal={handleOpenModalWithService} />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Quick Project Spec Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}
