/* React import */
'use client';
import React, { useState } from 'react';

/** Libraries */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

/** Components */
import CustomInputNew from '@/Components/common/custom-input-new';
import CustomButton from '@/Components/common/custom-button';

/** Local Imports */
import { contactSchema, ContactFormValues } from '@/Utils/schemas';
import { makeRequest } from '@/Utils/make-request';
import { Api } from '@/Utils/constants/api';

/** Styles */
import styles from './contact-form.module.scss';
import formStyles from '@/styles/forms.module.scss';

export const ContactForm: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      details: '',
    },
  });

  /** ---------- Handlers ---------- */
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Execute standard makeRequest wrapper
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
      }, 5000);
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
            Thank you! Your message has been received. We will get back to you within 24 hours.
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
        <CustomInputNew
          name="details"
          control={control}
          parent="contact"
          type="textarea"
          rows={6}
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
          {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
        </CustomButton>
      </div>
    </form>
  );
};

export default ContactForm;
