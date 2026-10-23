/* React import */
import React from 'react';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import FAQAccordion from '@/Components/common/faq-accordion';
import CTASection from '@/Components/common/cta-section';

/** Styles */
import styles from './faq.module.scss';

export const FAQView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.faqPageWrapper}>
      <main>
        <section className={styles.heroSection}>
          <Container>
            <AnimateIn>
              <h1 className={styles.title}>Got Questions?</h1>
              <p className={styles.leadText}>
                Everything you need to know about how we work, our process, and what it&apos;s like to partner with us.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <FAQAccordion />
            </AnimateIn>
          </Container>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default FAQView;
