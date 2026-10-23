/* React import */
'use client';
import React, { useState, useEffect } from 'react';

/** Libraries */
import { motion } from 'framer-motion';

/** Styles */
import styles from './compliance-chart.module.scss';

export interface ComplianceChartProps {
  value?: number;
  label?: string;
  className?: string;
}

export const ComplianceChart: React.FC<ComplianceChartProps> = ({
  value = 100,
  label = 'Accessibility',
  className = '',
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className={`${styles.chartWrapper} ${className}`.trim()}>
      <div className={styles.chartHeader}>
        <span className={styles.label}>{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className={styles.percentage}
        >
          {value}%
        </motion.span>
      </div>
      <div className={styles.track}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={styles.bar}
        />
      </div>
    </div>
  );
};

export default ComplianceChart;
