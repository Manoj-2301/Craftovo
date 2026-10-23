/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Styles */
import styles from './services.module.scss';

const SERVICES_LIST = [
  {
    title: 'Web Development',
    desc: 'Fast, secure, and scalable websites built with modern technologies.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Web Applications',
    desc: 'Complex web apps with robust backends and intuitive frontends.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'UI/UX Design',
    desc: 'User-centered design that looks beautiful and drives conversions.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Custom online stores optimized for sales, performance, and international scale.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    title: 'Custom Software',
    desc: 'Bespoke software tailored perfectly to your business processes and internal workflows.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
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
              <h1 className={styles.title}>Our Services</h1>
              <p className={styles.leadText}>
                Comprehensive digital solutions tailored to elevate your business in the modern landscape.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesGridSection}>
          <Container>
            <div className={styles.servicesGrid}>
              {SERVICES_LIST.map((service, index) => (
                <AnimateIn key={service.title} delay={index * 0.1}>
                  <div className={styles.serviceCard}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.serviceBgImage}
                    />
                    <div className={styles.cardGradientOverlay} aria-hidden="true" />
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDesc}>{service.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
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
