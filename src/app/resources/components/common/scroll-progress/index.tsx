/* React import */
'use client';
import React from 'react';

/** Libraries */
import { motion, useScroll, useSpring } from 'framer-motion';

/** Styles */
import styles from './scroll-progress.module.scss';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className={styles.progressBar} style={{ scaleX }} />;
};

export default ScrollProgress;
