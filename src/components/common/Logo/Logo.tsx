import Link from 'next/link';
import styles from './Logo.module.scss';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx(styles.logo, className)}>
      <span className={styles.mark}>&lt;/&gt;</span>
      <span className={styles.text}>Craftovo</span>
    </Link>
  );
};
