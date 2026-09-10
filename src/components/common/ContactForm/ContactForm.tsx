'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/common/Button/Button';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  details: z.string().min(10, 'Please provide more details about your project (at least 10 characters)')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 md:p-12 rounded-[2rem] flex flex-col gap-8 border-white/10 hover:border-white/20 transition-colors backdrop-blur-3xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Name</label>
          <input 
            type="text" 
            {...register('name')}
            className={`p-4 bg-white/[0.03] border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/40'} rounded-xl text-white focus:outline-none focus:bg-white/[0.05] transition-all`} 
            placeholder="Jane Doe" 
          />
          {errors.name && (
            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
              {errors.name.message}
            </motion.p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Email</label>
          <input 
            type="email" 
            {...register('email')}
            className={`p-4 bg-white/[0.03] border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/40'} rounded-xl text-white focus:outline-none focus:bg-white/[0.05] transition-all`} 
            placeholder="jane@example.com" 
          />
          {errors.email && (
            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
              {errors.email.message}
            </motion.p>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        <label className="text-sm font-medium text-white/80 uppercase tracking-wider">Project Details</label>
        <textarea 
          rows={6} 
          {...register('details')}
          className={`p-4 bg-white/[0.03] border ${errors.details ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/40'} rounded-xl text-white focus:outline-none focus:bg-white/[0.05] transition-all resize-y`} 
          placeholder="Tell us about what you want to build, timeline, and budget..."
        ></textarea>
        {errors.details && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-1">
            {errors.details.message}
          </motion.p>
        )}
      </div>
      
      <div className="relative z-10">
        <Button className="w-full mt-4" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </div>

      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-20 rounded-[2rem]"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="font-outfit text-2xl font-medium text-white mb-2">Message Sent!</h3>
          <p className="text-text-muted">We'll be in touch shortly.</p>
        </motion.div>
      )}
    </form>
  );
};
