/* React import */
'use client';
import React, { useState, useEffect } from 'react';

/** Libraries */
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/** Components */
import CustomButton from '../custom-button';

/** Local Imports */
import { siteConfig } from '@/config/site.config';

/** Styles */
import styles from './navbar.module.scss';

export const Navbar: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /** ---------- Effects ---------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** ---------- Render ---------- */
  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoBadge}>C</span>
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {siteConfig.navLinks.map((item) => (
            <Link key={item.name} href={item.href} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className={styles.desktopAction}>
          <CustomButton href="/project-intake" variant="primary">
            Start Project
          </CustomButton>
        </div>

        {/* Mobile Toggle Button */}
        <div className={styles.mobileToggle}>
          <CustomButton
            variant="unstyled"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </CustomButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={styles.mobileMenu}
          >
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                {item.name}
              </Link>
            ))}
            <CustomButton
              href="/project-intake"
              variant="primary"
              fullWidth
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </CustomButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
