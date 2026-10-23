/* React import */
import React from 'react';

/** Styles */
import styles from './loader.module.scss';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClass = styles[size] || styles.md;
  return (
    <div className={`${styles.loaderContainer} ${className}`.trim()}>
      <div className={`${styles.spinner} ${sizeClass}`} role="status" aria-label="Loading" />
    </div>
  );
};

export default Loader;
