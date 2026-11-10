import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Cpu,
  Code2,
  Palette,
  Sparkles,
  ArrowUpRight,
  Layers,
  BookOpen,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import { CORE_SEO_PAGES } from '../data/seoConfig';
import { INSIGHTS_ARTICLES } from '../data/insightsArticles';

const LAB_CATEGORIES = [
  {
    title: 'AI Experiments',
    icon: Bot,
    desc: 'Research into natural language processing, multimodal interfaces, and regional business language automation.',
  },
  {
    title: 'Product Engineering',
    icon: Code2,
    desc: 'Prototypes around local-first data synchronization, POS hardware integrations, and transactional workflows.',
  },
  {
    title: 'Software Architecture',
    icon: Layers,
    desc: 'Practical component modularity, clean API contract verification, and maintainable database design.',
  },
  {
    title: 'Digital Product Design',
    icon: Palette,
    desc: 'High-contrast enterprise ergonomics, design tokens, and accessible responsive interfaces.',
  },
  {
    title: 'Technology Exploration',
    icon: Cpu,
    desc: 'Evaluating fast modern web build systems, offline persistence engines, and performance tooling.',
  },
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(INSIGHTS_ARTICLES.map((a) => a.category))];

  const filteredArticles =
    selectedCategory === 'All'
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  const seo = CORE_SEO_PAGES['/insights'];

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={seo.route}
        title={seo.title}
        description={seo.description}
        breadcrumbs={seo.breadcrumbs}
      />

      <PageHeader
        eyebrow="INSIGHTS & GUIDES // FOR INDIAN BUSINESSES"
        title="PRACTICAL TECH"
        highlightTitle="INSIGHTS."
        description="Original guides for Indian manufacturers, industrial suppliers, distributors, and MSMEs on business websites, B2B lead generation, custom software, and AI automation."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights' },
        ]}
      />

      {/* Published Guides Grid */}
      <section className="relative py-20 sm:py-28 bg-cdi-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
                01 // BUSINESS &amp; ENGINEERING GUIDES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                PUBLISHED <span className="text-gold-gradient">ARTICLES</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-cdi-gold text-cdi-black border-cdi-gold font-bold'
                      : 'bg-[#121212] text-cdi-silver border-white/10 hover:border-cdi-gold/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={article.route}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0B0B0B] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-cdi-gold uppercase tracking-wider">
                    <span className="px-2.5 py-1 rounded-md bg-cdi-gold/10 border border-cdi-gold/30">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-cdi-silver-muted">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-cdi-white font-display leading-snug group-hover:text-cdi-gold transition-colors">
                    {article.headline}
                  </h3>

                  <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="text-cdi-silver-muted space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-cdi-silver">
                      <User className="w-3 h-3 text-cdi-gold" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <Calendar className="w-3 h-3 text-cdi-gold" />
                      <span>{article.publishedDate}</span>
                    </div>
                  </div>
                  <span className="text-cdi-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Streams */}
      <section className="relative py-20 sm:py-28 bg-cdi-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
              02 // CDI TECHNOLOGY LAB
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              AREAS OF <span className="text-gold-gradient">INVESTIGATION</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Ongoing software research and product prototyping at Chhichholiya Digital Industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAB_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-7 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#181818] px-2.5 py-1 rounded-md border border-white/5">
                        STREAM 0{idx + 1}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#1A1A1A] text-cdi-silver group-hover:text-cdi-gold transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-cdi-dark text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            READY TO DISCUSS YOUR <span className="text-gold-gradient">DIGITAL PROJECT?</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Connect with CDI for websites, custom software, mobile applications, or workflow automation.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(214,163,58,0.3)] transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
