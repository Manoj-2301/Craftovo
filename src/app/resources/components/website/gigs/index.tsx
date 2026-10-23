/* React import */
import React from 'react';

/** Libraries */
import { Check, Clock, RotateCcw, Sparkles } from 'lucide-react';

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
              <div className={styles.badgePill}>
                <span>Fixed Scope &bull; Public Pricing</span>
              </div>
              <h1 className={styles.title}>Productised Gigs</h1>
              <p className={styles.leadText}>
                Need a clear deliverable without the friction of lengthy custom contract negotiations? Select a pre-packaged package with guaranteed turnaround and transparent pricing.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Gigs Grid */}
        <section className={styles.gigsGridSection}>
          <Container>
            <div className={styles.gigsGrid}>
              {gigs.map((gig, index) => {
                const isFeatured = gig.slug === 'business-website';
                return (
                  <AnimateIn key={gig.id} delay={index * 0.1}>
                    <div className={`${styles.gigCard} ${isFeatured ? styles.featuredCard : ''}`}>
                      {isFeatured && (
                        <div className={styles.featuredBadge}>
                          <Sparkles size={12} /> Most Popular
                        </div>
                      )}

                      <div className={styles.cardHeader}>
                        <span className={styles.category}>{gig.category}</span>
                        <h2 className={styles.gigTitle}>{gig.title}</h2>
                        <p className={styles.description}>{gig.description}</p>
                      </div>

                      <div className={styles.priceRow}>
                        <div className={styles.priceAmount}>{gig.startingPrice}</div>
                        <span className={styles.priceSub}>Fixed Starting Price</span>
                      </div>

                      <div className={styles.metaRow}>
                        <span className={styles.metaPill}>
                          <Clock size={13} /> {gig.deliveryDays}
                        </span>
                        <span className={styles.metaPill}>
                          <RotateCcw size={13} /> {gig.revisions}
                        </span>
                      </div>

                      <div className={styles.featuresBlock}>
                        <span className={styles.featuresHeading}>Included Deliverables:</span>
                        <ul className={styles.featuresList}>
                          {gig.features.map((feat) => (
                            <li key={feat} className={styles.featureItem}>
                              <div className={styles.checkWrap}>
                                <Check size={12} />
                              </div>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.actionWrap}>
                        <CustomButton
                          href={`/gigs/${gig.slug}`}
                          variant={isFeatured ? 'primary' : 'secondary'}
                          fullWidth
                        >
                          View Gig Details &rarr;
                        </CustomButton>
                      </div>
                    </div>
                  </AnimateIn>
                );
              })}
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
