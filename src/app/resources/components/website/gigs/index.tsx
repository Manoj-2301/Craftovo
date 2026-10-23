/* React import */
import React from 'react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { gigs } from '@/models/gigs.data';

/** Styles */
import styles from './gigs.module.scss';

export const GigsView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.gigsPageWrapper}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Container>
            <AnimateIn>
              <h1 className={styles.title}>Productised Gigs</h1>
              <p className={styles.leadText}>
                High-impact, pre-packaged services with clear deliverables and transparent pricing.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Gigs Grid */}
        <section className={styles.gigsGridSection}>
          <Container>
            <div className={styles.gigsGrid}>
              {gigs.map((gig, index) => (
                <AnimateIn key={gig.id} delay={index * 0.1}>
                  <div className={styles.gigCard}>
                    <span className={styles.category}>{gig.category}</span>
                    <h3 className={styles.gigTitle}>{gig.title}</h3>
                    <div className={styles.priceRow}>
                      {gig.startingPrice}{' '}
                      <span>starting price</span>
                    </div>
                    <p className={styles.description}>{gig.description}</p>
                    <CustomButton href={`/gigs/${gig.slug}`} variant="secondary" fullWidth>
                      View gig details
                    </CustomButton>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default GigsView;
