/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Styles */
import styles from './about.module.scss';

export const AboutView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.aboutPageWrapper}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Craftovo Team"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />

          <Container>
            <AnimateIn>
              <h1 className={styles.title}>About Craftovo</h1>
              <p className={styles.leadText}>
                We are a passionate duo of a designer and an engineer dedicated to building exceptional digital products that push boundaries.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Philosophy Section */}
        <section className={styles.philosophySection}>
          <Container>
            <AnimateIn delay={0.2}>
              <div className={styles.philosophyCard}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Our Studio Office"
                  fill
                  className={styles.philosophyBgImage}
                />
                <div className={styles.philosophyContent}>
                  <h2 className={styles.philosophyTitle}>Our Philosophy</h2>
                  <p className={styles.philosophyParagraph}>
                    We believe that great software is born at the intersection of beautiful design and impeccable engineering. We don&apos;t just write code; we craft experiences that users love and businesses rely on.
                  </p>
                  <p className={styles.philosophyParagraph}>
                    From early-stage startups to established enterprises, we partner closely with our clients, treating every product as if it were our own.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default AboutView;
