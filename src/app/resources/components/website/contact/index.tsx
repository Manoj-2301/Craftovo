/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import ContactForm from './contact-form';

/** Styles */
import styles from './contact.module.scss';

export const ContactView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.contactPageWrapper}>
      <main>
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2070&auto=format&fit=crop"
            alt="Contact texture"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />
          <div className={styles.glow} aria-hidden="true" />

          <Container>
            <div className={styles.formContainer}>
              <AnimateIn>
                <h1 className={styles.title}>Let&apos;s talk</h1>
                <p className={styles.subtitle}>
                  Tell us about your next project. We typically respond within 24 hours.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <ContactForm />
              </AnimateIn>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default ContactView;
