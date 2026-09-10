'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import styles from './FAQItem.module.scss';
import { FAQ } from '@/types/common.types';

interface FAQItemProps {
  faq: FAQ;
}

export const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.item, { [styles.open]: isOpen })}>
      <button 
        className={styles.question} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <ChevronDown 
          className={clsx(styles.icon, { [styles.rotated]: isOpen })} 
          size={20} 
        />
      </button>
      <div 
        className={styles.answerWrapper}
        style={{ height: isOpen ? 'auto' : 0 }}
        aria-hidden={!isOpen}
      >
        <p className={styles.answer}>
          {faq.answer}
        </p>
      </div>
    </div>
  );
};
