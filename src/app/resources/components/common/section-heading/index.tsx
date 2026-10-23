/* React import */
import React from 'react';

/** Components */
import AnimateIn from '../animate-in';

/** Styles */
import styles from './section-heading.module.scss';

export interface SectionHeadingProps {
  title: string;
  description?: string;
  badge?: string;
  align?: 'start' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  badge,
  align = 'start',
  className = '',
}) => {
  const alignClass = align === 'center' ? styles.alignCenter : styles.alignStart;

  return (
    <AnimateIn className={`${styles.sectionHeading} ${alignClass} ${className}`.trim()}>
      {badge && (
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {badge}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </AnimateIn>
  );
};

export default SectionHeading;
