/* React import */
'use client';
import React from 'react';

/** Libraries */
import { motion } from 'framer-motion';

/** Styles */
import styles from './animate-in.module.scss';

export interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  style?: React.CSSProperties;
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  style,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`${styles.animateWrapper} ${className}`.trim()}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;
