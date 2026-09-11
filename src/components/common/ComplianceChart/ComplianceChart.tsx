'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ComplianceChart = ({ value = 100, label = "Accessibility" }: { value?: number, label?: string }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-end">
        <span className="text-text-main text-sm font-medium uppercase tracking-widest">{label}</span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-2xl font-outfit font-medium text-text-main"
        >
          {value}%
        </motion.span>
      </div>
      <div className="w-full h-1.5 bg-black/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full bg-black rounded-full"
        />
      </div>
    </div>
  );
};
