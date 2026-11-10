import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import NotFoundPage from './NotFoundPage';
import { INSIGHTS_ARTICLE_MAP, INSIGHTS_ARTICLES } from '../data/insightsArticles';
import { buildArticleSchema, buildCanonicalUrl } from '../data/seoConfig';
import { getWhatsAppUrl } from '../config/brand';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = INSIGHTS_ARTICLE_MAP[slug];

  if (!article) {
    return <NotFoundPage />;
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: '/insights' },
    { name: article.category, path: article.route },
  ];

  const articleSchema = buildArticleSchema({
    headline: article.headline,
    description: article.metaDescription,
    url: buildCanonicalUrl(article.route),
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    authorName: article.author,
  });

  const otherArticles = INSIGHTS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={article.route}
        title={article.title}
        description={article.metaDescription}
        breadcrumbs={breadcrumbs}
        schemas={[articleSchema]}
        ogType="article"
      />

      <PageHeader
        eyebrow={`CDI INSIGHTS // ${article.category.toUpperCase()}`}
        title={article.headline}
        description={article.summary}
        breadcrumbs={breadcrumbs}
      />

      <article className="py-16 sm:py-24 bg-cdi-dark border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Author & Dates Metadata Bar */}
          <div className="p-5 rounded-2xl bg-[#111111] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cdi-silver-muted">
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-2 text-cdi-white">
                <User className="w-3.5 h-3.5 text-cdi-gold" />
                <span>
                  {article.author} ({article.authorRole})
                </span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cdi-gold" />
                <span>Published: {article.publishedDate} • Updated: {article.updatedDate}</span>
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-cdi-gold">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Article Sections */}
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-cdi-white font-display uppercase tracking-wide">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-2.5 pt-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="p-3.5 rounded-xl bg-[#121212] border border-white/5 flex items-start gap-3 text-sm text-cdi-silver font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Related Service Conversion Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#171717] to-[#0B0B0B] border border-cdi-gold/30 space-y-5">
            <span className="text-xs font-mono text-cdi-gold uppercase tracking-wider block">
              NEED HELP IMPLEMENTING THIS FOR YOUR BUSINESS?
            </span>
            <h3 className="text-2xl font-extrabold text-cdi-white font-display uppercase">
              DISCUSS YOUR PROJECT WITH CHHICHHOLIYA DIGITAL INDUSTRIES
            </h3>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to={article.relatedServicePath}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>{article.relatedServiceLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl(`Hello CDI Team, I read your article "${article.headline}" and want to discuss a project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#121212] border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* More Articles */}
          <div className="pt-8 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-cdi-white font-display uppercase">
                More Guides for Indian Businesses
              </h3>
              <Link to="/insights" className="text-xs font-mono text-cdi-gold hover:underline flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Insights</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherArticles.map((other) => (
                <Link
                  key={other.slug}
                  to={other.route}
                  className="p-5 rounded-2xl bg-[#111111] border border-white/10 hover:border-cdi-gold/40 transition-colors flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-[10px] font-mono text-cdi-gold uppercase tracking-wider block mb-1">
                      {other.category}
                    </span>
                    <h4 className="text-sm font-bold text-cdi-white font-display leading-snug">
                      {other.headline}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-cdi-silver-muted">Read Guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
