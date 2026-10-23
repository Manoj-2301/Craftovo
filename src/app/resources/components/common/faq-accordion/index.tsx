/* React import */
'use client';
import React, { useState } from 'react';

/** Libraries */
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

/** Components */
import CustomButton from '../custom-button';

/** Local Imports */
import { faqs as defaultFaqs } from '@/models/faq.data';
import { FAQ } from '@/models/common.types';

/** Styles */
import styles from './faq-accordion.module.scss';

export interface FAQAccordionProps {
  items?: FAQ[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items = defaultFaqs,
  className = '',
}) => {
  /** ---------- State & Hooks ---------- */
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  /** ---------- Handlers ---------- */
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /** ---------- Render ---------- */
  return (
    <div className={`${styles.accordionList} ${className}`.trim()}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.id || index} className={styles.item}>
            <CustomButton
              variant="unstyled"
              className={styles.trigger}
              onClick={() => toggleOpen(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{faq.question}</span>
              <div className={`${styles.iconWrap} ${isOpen ? styles.open : ''}`}>
                <Plus size={20} />
              </div>
            </CustomButton>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className={styles.answerContent}>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
