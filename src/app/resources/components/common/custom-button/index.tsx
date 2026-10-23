/* React import */
import React from 'react';

/** Libraries */
import Link from 'next/link';

/** Styles */
import styles from './custom-button.module.scss';

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'secondaryDark' | 'outline' | 'unstyled';
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '',
  fullWidth = false,
  ...rest
}) => {
  /** ---------- Render ---------- */
  const variantClass = styles[variant] || styles.primary;
  const buttonClass = `${styles.button} ${variantClass} ${fullWidth ? styles.fullWidth : ''} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
