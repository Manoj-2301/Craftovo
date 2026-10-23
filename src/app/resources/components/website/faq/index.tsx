/* React import */
'use client';
import React, { useState, useMemo } from 'react';

/** Libraries */
import { Search, HelpCircle, ArrowRight } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomInputNew from '@/Components/common/custom-input-new';
import CustomButton from '@/Components/common/custom-button';
import AnimateIn from '@/Components/common/animate-in';
import FAQAccordion from '@/Components/common/faq-accordion';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { faqs } from '@/models/faq.data';

/** Styles */
import styles from './faq.module.scss';
import formStyles from '@/styles/forms.module.scss';

export const FAQView: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [searchTerm, setSearchTerm] = useState('');

  /** ---------- Memoized Filters ---------- */
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqs;
    const q = searchTerm.toLowerCase();
    return faqs.filter(
      (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  /** ---------- Render ---------- */
  return (
    <div className={styles.faqPageWrapper}>
      <main>
        <section className={styles.heroSection}>
          <Container>
            <AnimateIn className={styles.headerBlock}>
              <div className={styles.badgePill}>
                <span>Frequently Asked Questions</span>
              </div>
              <h1 className={styles.title}>Everything You Need to Know</h1>
              <p className={styles.leadText}>
                Clear, transparent answers about our studio process, pricing model, project turnaround, and how we work with ambitious teams.
              </p>

              {/* Search Bar */}
              <div className={styles.searchWrap}>
                <CustomInputNew
                  name="faqSearch"
                  type="text"
                  placeholder="Search questions (e.g. pricing, timeline, mobile, payments)..."
                  value={searchTerm}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                  className={styles.faqSearchField}
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              {filteredFaqs.length > 0 ? (
                <FAQAccordion items={filteredFaqs} />
              ) : (
                <div className={styles.noResults}>
                  <HelpCircle size={36} className={styles.noResultsIcon} />
                  <h3>No matching questions found</h3>
                  <p>Have a specific requirement? Contact us directly and we&apos;ll answer within 24 hours.</p>
                  <CustomButton href="/contact" variant="primary">
                    Ask Us Directly &rarr;
                  </CustomButton>
                </div>
              )}
            </AnimateIn>

            {/* Need More Help Card */}
            <AnimateIn delay={0.25}>
              <div className={styles.helpCard}>
                <div>
                  <h3 className={styles.helpTitle}>Have a question not listed here?</h3>
                  <p className={styles.helpDesc}>
                    We are always happy to discuss scope, custom integrations, or architecture feasibility.
                  </p>
                </div>
                <CustomButton href="/contact" variant="primary">
                  Contact Our Studio <ArrowRight size={16} />
                </CustomButton>
              </div>
            </AnimateIn>
          </Container>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default FAQView;
