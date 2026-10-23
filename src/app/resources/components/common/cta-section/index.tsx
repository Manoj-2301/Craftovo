/* React import */
import React from 'react';

/** Components */
import Container from '../container';
import CustomButton from '../custom-button';
import AnimateIn from '../animate-in';

/** Styles */
import styles from './cta-section.module.scss';

export const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaWrapper}>
      <Container>
        <AnimateIn>
          <div className={styles.ctaCard}>
            <div className={styles.gridPattern} aria-hidden="true" />
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.textBlock}>
              <h2 className={styles.title}>
                Have an idea?<br />Let&apos;s craft it.
              </h2>
              <p className={styles.description}>
                We partner with ambitious brands to design and build digital products that define the future.
              </p>
            </div>

            <div className={styles.actions}>
              <CustomButton href="/project-intake" variant="primary">
                Start a Project
              </CustomButton>
              <CustomButton href="/work" variant="secondaryDark">
                Explore Work
              </CustomButton>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};

export default CTASection;
