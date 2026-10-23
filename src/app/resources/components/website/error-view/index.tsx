/* React import */
'use client';
import React from 'react';

/** Libraries */
import { AlertTriangle, RefreshCw } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';

/** Styles */
import styles from './error-view.module.scss';

export interface ErrorViewProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error, reset }) => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.errorWrapper}>
      <Container>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <AlertTriangle size={36} />
          </div>
          <h1 className={styles.title}>Something Unexpected Occurred</h1>
          <p className={styles.desc}>
            An unexpected error was encountered while rendering this digital surface. You can attempt to re-render the view or return to home.
          </p>

          {error?.message && (
            <div className={styles.errorSnippet}>
              <code>{error.message}</code>
            </div>
          )}

          <div className={styles.actions}>
            <CustomButton variant="primary" onClick={reset}>
              <RefreshCw size={16} /> Try Again
            </CustomButton>
            <CustomButton href="/" variant="secondary">
              Back to Safety
            </CustomButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ErrorView;
