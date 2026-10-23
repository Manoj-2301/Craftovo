/* React import */
import React from 'react';

/** Libraries */
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import AnimateIn from '@/Components/common/animate-in';

/** Styles */
import styles from './not-found.module.scss';

export const NotFoundView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.notFoundWrapper}>
      <main className={styles.main}>
        <Container>
          <AnimateIn className={styles.card}>
            <div className={styles.iconWrap}>
              <Compass size={40} />
            </div>
            <span className={styles.errorCode}>404</span>
            <h1 className={styles.title}>This Page Wasn&apos;t Crafted Yet</h1>
            <p className={styles.desc}>
              The digital experience you are searching for either moved to a new route, was archived, or has not been built yet.
            </p>
            <div className={styles.actions}>
              <CustomButton href="/" variant="primary">
                <ArrowLeft size={16} /> Return to Home
              </CustomButton>
              <CustomButton href="/work" variant="secondary">
                Explore Selected Work
              </CustomButton>
            </div>
          </AnimateIn>
        </Container>
      </main>
    </div>
  );
};

export default NotFoundView;
