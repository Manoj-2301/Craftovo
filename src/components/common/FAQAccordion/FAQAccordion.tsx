'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Our typical project timeline varies depending on the scope and complexity. A standard web application might take 8-12 weeks, while smaller websites can be completed in 4-6 weeks. We always provide a detailed timeline during our initial strategy phase."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, absolutely. We believe in building long-term partnerships. We offer various retainer packages for ongoing maintenance, updates, performance monitoring, and continuous improvements."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and Tailwind CSS. For mobile applications, we primarily use React Native to deliver high-quality, cross-platform experiences."
  },
  {
    question: "How do you handle project communication?",
    answer: "We establish clear communication channels from day one, typically using a combination of Slack for day-to-day updates, weekly video syncs, and a dedicated project management board where you can track progress transparently."
  }
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mt-12 flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="glass-panel border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
        >
          <button
            onClick={() => toggleOpen(index)}
            className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
          >
            <span className="font-outfit text-xl font-medium text-white pr-8">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-white/50 shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </motion.div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-6 text-text-muted font-light leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
