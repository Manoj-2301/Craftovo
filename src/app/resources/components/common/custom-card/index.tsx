/* React import */
import React from 'react';

/** Libraries */
import Link from 'next/link';

/** Styles */
import styles from './custom-card.module.scss';

export interface CustomCardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  children,
  href,
  className = '',
  onClick,
}) => {
  const cardClassName = `${styles.card} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={cardClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomCard;
