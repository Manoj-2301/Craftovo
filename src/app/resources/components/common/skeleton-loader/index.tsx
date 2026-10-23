/* React import */
import React from 'react';

/** Styles */
import styles from './skeleton-loader.module.scss';

export interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '20px',
  borderRadius,
  className = '',
}) => {
  return (
    <span
      className={`${styles.skeleton} ${className}`.trim()}
      style={{
        width,
        height,
        borderRadius: borderRadius !== undefined ? borderRadius : undefined,
      }}
    />
  );
};

export default SkeletonLoader;
