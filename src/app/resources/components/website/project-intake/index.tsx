/* React import */
'use client';
import React, { useState, useEffect } from 'react';

/** Libraries */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import CustomInputNew from '@/Components/common/custom-input-new';
import AnimateIn from '@/Components/common/animate-in';

/** Local Imports */
import { projectIntakeSchema, ProjectIntakeFormValues } from '@/Utils/schemas';
import { makeRequest } from '@/Utils/make-request';
import { Api } from '@/Utils/constants/api';

/** Styles */
import styles from './project-intake.module.scss';
import formStyles from '@/styles/forms.module.scss';

const STEPS = [
  {
    id: 'business',
    title: 'About your business',
    desc: 'Tell us who you are and what this project needs to achieve.',
  },
  {
    id: 'audience',
    title: 'Your audience',
    desc: 'Who this product needs to speak to, and how they will use it.',
  },
  {
    id: 'scope',
    title: 'Scope and features',
    desc: 'What the website or app needs to include and do.',
  },
  {
    id: 'contact',
    title: 'Contact details',
    desc: 'Where we should send our proposal and project breakdown.',
  },
];

const PROJECT_TYPES = ['New site', 'Redesign of existing site', 'Web Application', 'Mobile App'];
const DEVICE_OPTIONS = ['Mostly mobile', 'Mostly desktop', 'Fairly even split'];
const PAGES_OPTIONS = ['Home', 'About', 'Services', 'Work/Portfolio', 'Pricing', 'Blog', 'Contact'];
const FEATURE_OPTIONS = ['Lead capture', 'Online payments', 'User accounts', 'CMS / Blog', 'Search & Filters'];

export const ProjectIntakeView: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectIntakeFormValues>({
    resolver: zodResolver(projectIntakeSchema),
    defaultValues: {
      companyName: '',
      businessDescription: '',
      industry: '',
      projectType: 'New site',
      currentSiteUrl: '',
      primaryGoal: '',
      successDefinition: '',
      primaryAudience: '',
      primaryDevice: 'Fairly even split',
      primaryAction: '',
      pages: ['Home', 'About', 'Contact'],
      dynamicFeatures: ['Lead capture'],
      contactName: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const selectedProjectType = watch('projectType');
  const selectedDevice = watch('primaryDevice');
  const selectedPages = watch('pages') || [];
  const selectedFeatures = watch('dynamicFeatures') || [];

  /** ---------- Effects ---------- */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('craftovo_intake_draft');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach((k) => {
          setValue(k as any, parsed[k]);
        });
      }
    } catch {
      // LocalStorage fallback
    }
  }, [setValue]);

  /** ---------- Handlers ---------- */
  const handleTogglePage = (page: string) => {
    const next = selectedPages.includes(page)
      ? selectedPages.filter((p) => p !== page)
      : [...selectedPages, page];
    setValue('pages', next);
  };

  const handleToggleFeature = (feat: string) => {
    const next = selectedFeatures.includes(feat)
      ? selectedFeatures.filter((f) => f !== feat)
      : [...selectedFeatures, feat];
    setValue('dynamicFeatures', next);
  };

  const onNextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const onPrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: ProjectIntakeFormValues) => {
    setIsSubmitting(true);
    try {
      await makeRequest(
        'POST',
        'intake_api',
        Api.endpoints.projectIntake,
        null,
        null,
        'client',
        data,
        false
      );

      localStorage.removeItem('craftovo_intake_draft');
      setIsCompleted(true);
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  /** ---------- Render ---------- */
  const progressPercent = Math.round(((currentStep + 1) / STEPS.length) * 100);

  if (isCompleted) {
    return (
      <div className={styles.wizardPageWrapper}>
        <Container>
          <div className={styles.wizardContainer}>
            <AnimateIn>
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <Check size={36} />
                </div>
                <h1 className={styles.successTitle}>Project Brief Received!</h1>
                <p className={styles.successDesc}>
                  Thank you for sharing your vision with us. We are reviewing your requirements and will reach out with an initial estimate and next steps within 24 hours.
                </p>
                <CustomButton href="/" variant="primary">
                  Return to Home
                </CustomButton>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </div>
    );
  }

  const activeStep = STEPS[currentStep];

  return (
    <div className={styles.wizardPageWrapper}>
      <Container>
        <div className={styles.wizardContainer}>
          {/* Progress Header */}
          <div className={styles.progressHeader}>
            <div className={styles.progressMeta}>
              <span className={styles.stepCounter}>
                Step {currentStep + 1} of {STEPS.length} &bull; {activeStep.title}
              </span>
              <span className={styles.draftSavedText}>Auto-saved draft</span>
            </div>
            <div className={styles.progressBarTrack}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Form Step Body */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.stepCard}>
              <div className={styles.stepTitleBlock}>
                <h1 className={styles.stepTitle}>{activeStep.title}</h1>
                <p className={styles.stepDesc}>{activeStep.desc}</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className={styles.fieldsContainer}
                >
                  {/* Step 1: Business */}
                  {currentStep === 0 && (
                    <>
                      <CustomInputNew
                        name="companyName"
                        control={control}
                        parent="projectIntake"
                        required
                        styles={formStyles}
                      />
                      <CustomInputNew
                        name="businessDescription"
                        control={control}
                        parent="projectIntake"
                        type="textarea"
                        rows={3}
                        required
                        styles={formStyles}
                      />
                      <div className={styles.optionGroup}>
                        <span className={styles.groupLabel}>Project Type</span>
                        <div className={styles.optionsGrid}>
                          {PROJECT_TYPES.map((type) => (
                            <CustomButton
                              key={type}
                              type="button"
                              variant="unstyled"
                              className={`${styles.optionPill} ${selectedProjectType === type ? styles.selected : ''}`}
                              onClick={() => setValue('projectType', type)}
                            >
                              {type}
                            </CustomButton>
                          ))}
                        </div>
                      </div>
                      <CustomInputNew
                        name="industry"
                        control={control}
                        parent="projectIntake"
                        styles={formStyles}
                      />
                      <CustomInputNew
                        name="currentSiteUrl"
                        control={control}
                        parent="projectIntake"
                        styles={formStyles}
                      />
                    </>
                  )}

                  {/* Step 2: Audience */}
                  {currentStep === 1 && (
                    <>
                      <CustomInputNew
                        name="primaryAudience"
                        control={control}
                        parent="projectIntake"
                        type="textarea"
                        rows={3}
                        required
                        styles={formStyles}
                      />
                      <div className={styles.optionGroup}>
                        <span className={styles.groupLabel}>Primary Device Usage</span>
                        <div className={styles.optionsGrid}>
                          {DEVICE_OPTIONS.map((dev) => (
                            <CustomButton
                              key={dev}
                              type="button"
                              variant="unstyled"
                              className={`${styles.optionPill} ${selectedDevice === dev ? styles.selected : ''}`}
                              onClick={() => setValue('primaryDevice', dev)}
                            >
                              {dev}
                            </CustomButton>
                          ))}
                        </div>
                      </div>
                      <CustomInputNew
                        name="primaryAction"
                        control={control}
                        parent="projectIntake"
                        required
                        styles={formStyles}
                      />
                      <CustomInputNew
                        name="successDefinition"
                        control={control}
                        parent="projectIntake"
                        type="textarea"
                        rows={3}
                        styles={formStyles}
                      />
                    </>
                  )}

                  {/* Step 3: Scope */}
                  {currentStep === 2 && (
                    <>
                      <div className={styles.optionGroup}>
                        <span className={styles.groupLabel}>Key Pages Needed</span>
                        <div className={styles.optionsGrid}>
                          {PAGES_OPTIONS.map((page) => (
                            <CustomButton
                              key={page}
                              type="button"
                              variant="unstyled"
                              className={`${styles.optionPill} ${selectedPages.includes(page) ? styles.selected : ''}`}
                              onClick={() => handleTogglePage(page)}
                            >
                              {page}
                            </CustomButton>
                          ))}
                        </div>
                      </div>

                      <div className={styles.optionGroup}>
                        <span className={styles.groupLabel}>Dynamic Features</span>
                        <div className={styles.optionsGrid}>
                          {FEATURE_OPTIONS.map((feat) => (
                            <CustomButton
                              key={feat}
                              type="button"
                              variant="unstyled"
                              className={`${styles.optionPill} ${selectedFeatures.includes(feat) ? styles.selected : ''}`}
                              onClick={() => handleToggleFeature(feat)}
                            >
                              {feat}
                            </CustomButton>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 4: Contact */}
                  {currentStep === 3 && (
                    <>
                      <CustomInputNew
                        name="contactName"
                        control={control}
                        parent="projectIntake"
                        required
                        styles={formStyles}
                      />
                      <CustomInputNew
                        name="contactEmail"
                        control={control}
                        parent="projectIntake"
                        type="email"
                        required
                        styles={formStyles}
                      />
                      <CustomInputNew
                        name="contactPhone"
                        control={control}
                        parent="projectIntake"
                        type="tel"
                        styles={formStyles}
                      />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Actions */}
              <div className={styles.navigationRow}>
                {currentStep > 0 ? (
                  <CustomButton
                    type="button"
                    variant="secondary"
                    onClick={onPrevStep}
                  >
                    <ArrowLeft size={16} /> Previous
                  </CustomButton>
                ) : (
                  <div />
                )}

                {currentStep < STEPS.length - 1 ? (
                  <CustomButton
                    type="button"
                    variant="primary"
                    onClick={onNextStep}
                  >
                    Next Step <ArrowRight size={16} />
                  </CustomButton>
                ) : (
                  <CustomButton
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Brief...' : 'Submit Project Brief'}
                  </CustomButton>
                )}
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ProjectIntakeView;
