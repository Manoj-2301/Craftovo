/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';
import { Check, ArrowRight, Layers, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import SectionHeading from '@/Components/common/section-heading';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { services } from '@/models/services.data';

/** Styles */
import styles from './services.module.scss';

const PROCESS_STEPS = [
  {
    step: '01',
    icon: Layers,
    title: 'Architecture & Strategy',
    description: 'We analyze your objectives, map user journeys, and establish scalable technical and design foundations.',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'High-Craft Design',
    description: 'Design systems, micro-interactions, and responsive prototypes built to convert and captivate users.',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Institutional Engineering',
    description: 'Clean Next.js App Router code, robust API architecture, and automated end-to-end performance testing.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Deployment & Scaling',
    description: 'Global edge deployment, sub-second LCP optimization, comprehensive SEO, and ongoing partner support.',
  },
];

export const ServicesView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.servicesPageWrapper}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Services abstract"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />

          <Container>
            <AnimateIn>
              <div className={styles.badgePill}>
                <span>What We Do</span>
              </div>
              <h1 className={styles.title}>Bespoke Digital Services</h1>
              <p className={styles.leadText}>
                We combine high-end product design with institutional-grade full-stack engineering to build digital products that scale effortlessly.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesGridSection}>
          <Container>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <AnimateIn key={service.id} delay={index * 0.08}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.categoryBadge}>{service.title}</span>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDesc}>{service.description}</p>
                    </div>

                    <div className={styles.featuresBlock}>
                      <span className={styles.featuresTitle}>Key Capabilities</span>
                      <ul className={styles.featuresList}>
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className={styles.featureItem}>
                            <div className={styles.checkIcon}>
                              <Check size={13} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.techBlock}>
                      <div className={styles.techPills}>
                        {service.technologies.map((tech) => (
                          <span key={tech} className={styles.techPill}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <CustomButton
                        href={`/project-intake`}
                        variant="secondary"
                        fullWidth
                      >
                        Start this service <ArrowRight size={14} />
                      </CustomButton>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <Container>
            <SectionHeading
              badge="How We Build"
              title="Our Delivery Framework"
              description="A disciplined, four-phase sprint cadence that guarantees quality, transparency, and rapid time-to-market."
              align="center"
            />

            <div className={styles.processGrid}>
              {PROCESS_STEPS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <AnimateIn key={item.step} delay={idx * 0.1}>
                    <div className={styles.processCard}>
                      <div className={styles.processTop}>
                        <span className={styles.stepNumber}>{item.step}</span>
                        <div className={styles.processIconWrap}>
                          <IconComponent size={20} />
                        </div>
                      </div>
                      <h3 className={styles.processTitle}>{item.title}</h3>
                      <p className={styles.processDesc}>{item.description}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Banner */}
        <CTASection />
      </main>
    </div>
  );
};

export default ServicesView;
