'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto w-full max-w-[1280px] rounded-full transition-all duration-500 flex items-center justify-between px-6 py-4 ${scrolled ? 'glass-panel shadow-2xl shadow-black/5 py-3' : 'bg-transparent'}`}>
        <Link href="/" className="font-outfit font-bold text-xl tracking-tight flex items-center gap-3 text-text-main group">
          <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-black group-hover:scale-110 transition-transform">C</span>
          Craftovo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Services', 'Work', 'Gigs', 'About', 'FAQ'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 inline-block">
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main hover:opacity-70 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute top-24 left-4 right-4 glass-panel rounded-3xl p-6 flex flex-col gap-4 pointer-events-auto md:hidden shadow-2xl"
          >
            {['Services', 'Work', 'Gigs', 'About', 'FAQ', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-outfit font-medium text-text-main border-b border-black/5 pb-4 pt-2 last:border-0 hover:text-text-muted transition-colors">
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
