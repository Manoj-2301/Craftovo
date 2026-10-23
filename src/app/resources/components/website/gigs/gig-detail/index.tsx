/* React import */
import React from 'react';

/** Libraries */
import { Check } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import AnimateIn from '@/Components/common/animate-in';
import ScrollProgress from '@/Components/common/scroll-progress';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { Gig } from '@/models/common.types';

/** Styles */
import styles from './gig-detail.module.scss';

export interface GigDetailViewProps {
  gig: Gig;
}

const STEPS = [
  {
    title: '1. Discovery & Intake',
    desc: 'You fill out our project brief and we align on your goals, assets, and design preferences.',
  },
  {
    title: '2. Design & Iteration',
    desc: 'We craft high-fidelity designs and iterate based on your feedback until you are completely thrilled.',
  },
  {
    title: '3. Build & QA',
    desc: 'We build the product with modern code, conduct thorough performance and responsiveness audits.',
  },
  {
    title: '4. Launch & Handover',
    desc: 'We deploy to your live domain, hand over all credentials, and ensure a smooth go-live.',
  },
];

export const GigDetailView: React.FC<GigDetailViewProps> = ({ gig }) => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.gigDetailWrapper}>
      <ScrollProgress />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.ambientGlow} aria-hidden="true" />

          <Container>
            <div className={styles.layoutGrid}>
              {/* Sticky Action Sidebar */}
              <div className={styles.sidebarCol}>
                <AnimateIn>
                  <div className={styles.sidebarCard}>
                    <span className={styles.categoryBadge}>{gig.category}</span>
                    <h1 className={styles.gigTitle}>{gig.title}</h1>
                    <p className={styles.gigDesc}>{gig.description}</p>

                    <div className={styles.priceSection}>
                      <div className={styles.priceLabel}>Starting from</div>
                      <div className={styles.priceValue}>{gig.startingPrice}</div>
                    </div>

                    <div className={styles.metaGrid}>
                      <div className={styles.metaBox}>
                        <div className={styles.metaLabel}>Delivery</div>
                        <div className={styles.metaValue}>{gig.deliveryDays}</div>
                      </div>
                      <div className={styles.metaBox}>
                        <div className={styles.metaLabel}>Revisions</div>
                        <div className={styles.metaValue}>{gig.revisions}</div>
                      </div>
                    </div>

                    <CustomButton href={`/contact?service=${gig.slug}`} variant="primary" fullWidth>
                      Inquire about this gig
                    </CustomButton>
                  </div>
                </AnimateIn>
              </div>

              {/* Content Column */}
              <div className={styles.contentCol}>
                <AnimateIn delay={0.1}>
                  <h2 className={styles.sectionHeading}>What&apos;s included</h2>
                  <ul className={styles.featuresList}>
                    {gig.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <div className={styles.checkBadge}>
                          <Check size={14} />
                        </div>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                  <h2 className={styles.sectionHeading}>How it works</h2>
                  <div className={styles.stepsList}>
                    {STEPS.map((step, idx) => (
                      <div key={idx} className={styles.stepItem}>
                        <div className={styles.stepNum}>{idx + 1}</div>
                        <div>
                          <h3 className={styles.stepTitle}>{step.title}</h3>
                          <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default GigDetailView;
