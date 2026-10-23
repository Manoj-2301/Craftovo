/* React import */
import React from 'react';

/** Libraries */
import Link from 'next/link';

/** Local Imports */
import { siteConfig } from '@/config/site.config';

/** Styles */
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /** ---------- Render ---------- */
  return (
    <footer className={styles.footer}>
      <div className={styles.contentGrid}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoBadge}>C</span>
            {siteConfig.name}
          </Link>
          <p className={styles.brandTagline}>
            Designing and engineering digital products that shape the future of business.
          </p>
        </div>

        {/* Company Links */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Company</h4>
          {siteConfig.footerLinks.company.map((item) => (
            <Link key={item.name} href={item.href} className={styles.footerLink}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Connect Links */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Connect</h4>
          {siteConfig.footerLinks.connect.map((item) => (
            <Link key={item.name} href={item.href} className={styles.footerLink}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} {siteConfig.name} Studio. All rights reserved.</p>
        <div className={styles.legalLinks}>
          {siteConfig.footerLinks.legal.map((item) => (
            <Link key={item.name} href={item.href} className={styles.footerLink}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Watermark */}
      <div className={styles.watermark} aria-hidden="true">
        <h2>CRAFTOVO</h2>
      </div>
    </footer>
  );
};

export default Footer;
