/* React import */
'use client';
import React, { useState, useEffect } from 'react';

/** Libraries */
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

/** Components */
import CustomInputNew from '@/Components/common/custom-input-new';
import CustomSelectNew from '@/Components/common/custom-select-new';
import CustomButton from '@/Components/common/custom-button';

/** Local Imports */
import { contactSchema, ContactFormValues } from '@/Utils/schemas';
import { makeRequest } from '@/Utils/make-request';
import { Api } from '@/Utils/constants/api';

/** Styles */
import styles from './contact-form.module.scss';
import formStyles from '@/styles/forms.module.scss';

const SERVICE_OPTIONS = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'web-applications', label: 'Web Applications' },
  { value: 'mobile-applications', label: 'Mobile Applications' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'ecommerce', label: 'E-commerce Platforms' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'landing-page', label: 'Productised Gig: Landing Page (₹25k)' },
  { value: 'business-website', label: 'Productised Gig: Business Website (₹40k)' },
  { value: 'ecommerce', label: 'Productised Gig: E-commerce Store (₹80k)' },
  { value: 'general-consultation', label: 'General Consultation' },
];

export const ContactForm: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: 'web-development',
      details: '',
    },
  });

  /** ---------- Effects ---------- */
  useEffect(() => {
    const s = searchParams.get('service');
    if (s) {
      setValue('service', s);
    }
  }, [searchParams, setValue]);

  /** ---------- Handlers ---------- */
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await makeRequest(
        'POST',
        'contact_api',
        Api.endpoints.contact,
        null,
        null,
        'client',
        data,
        false
      );

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    } catch {
      // graceful fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  /** ---------- Render ---------- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard}>
      <div className={styles.glowDecor} aria-hidden="true" />

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.successMessage}
          >
            <CheckCircle2 size={20} className={styles.successIcon} />
            <span>Thank you! Your message has been received. We will get back to you within 24 hours.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.formGrid}>
        <CustomInputNew
          name="name"
          control={control}
          parent="contact"
          type="text"
          required
          styles={formStyles}
        />
        <CustomInputNew
          name="email"
          control={control}
          parent="contact"
          type="email"
          required
          styles={formStyles}
        />
      </div>

      <div className={styles.fullWidthField}>
        <CustomSelectNew
          name="service"
          control={control}
          label="Project Interest / Service"
          options={SERVICE_OPTIONS}
          styles={formStyles}
        />
      </div>

      <div className={styles.fullWidthField}>
        <CustomInputNew
          name="details"
          control={control}
          parent="contact"
          type="textarea"
          rows={5}
          required
          styles={formStyles}
        />
      </div>

      <div className={styles.submitWrap}>
        <CustomButton
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry &rarr;'}
        </CustomButton>
      </div>
    </form>
  );
};

export default ContactForm;
