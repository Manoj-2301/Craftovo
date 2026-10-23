/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import SectionHeading from '@/Components/common/section-heading';
import AnimateIn from '@/Components/common/animate-in';
import Testimonials from '@/Components/common/testimonials';
import CTASection from '@/Components/common/cta-section';

/** Styles */
import styles from './home.module.scss';

const METRICS = [
  { label: 'One team', desc: 'Design and engineering under the same roof.' },
  { label: 'End to end', desc: 'Strategy, design, build, and launch.' },
  { label: '24 hours', desc: 'Typical time to hear back from us.' },
];

const TICKER_ITEMS = [
  'Web Development',
  'Product Design',
  'Mobile Apps',
  'E-commerce',
  'Branding',
  'Custom Software',
  'AI Integration',
  'Cloud Architecture',
];

const BENTO_CARDS = [
  {
    category: 'Full-Stack Engineering',
    title: 'Web\nApplications',
    description: 'High-performance web apps built with modern React frameworks, resilient architecture, and ultra-fast scalable APIs.',
    tags: ['Next.js 15', 'Full-Stack', 'Real-time APIs'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    delay: 0.05,
    colSpan: 'wide',
  },
  {
    category: 'Product & Visual',
    title: 'UI/UX\nDesign',
    description: 'Intuitive design systems, seamless user flows, and immersive digital experiences that convert.',
    tags: ['Design Systems', 'Micro-interactions', 'Figma'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    delay: 0.1,
    colSpan: 'narrow',
  },
  {
    category: 'iOS & Android',
    title: 'Mobile\nApps',
    description: 'Native-feeling cross-platform applications putting your brand directly into your customers\' hands.',
    tags: ['React Native', 'iOS & Android', 'Offline-First'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    delay: 0.15,
    colSpan: 'narrow',
  },
  {
    category: 'Headless Storefronts',
    title: 'E-commerce\nPlatforms',
    description: 'High-converting headless storefronts with blazing speeds, seamless checkout flows, and Stripe integration.',
    tags: ['Headless Shopify', 'Stripe Payments', 'Sub-second LCP'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    delay: 0.2,
    colSpan: 'wide',
  },
];

export const HomeView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.homeContainer}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBgMesh} aria-hidden="true" />

          <Container className={styles.heroContainer}>
            <div className={styles.heroGrid}>
              <AnimateIn>
                <div className={styles.heroStatusBadge}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  <span>Available for Q1/Q2 Engagements &bull; Direct Partner Studio</span>
                </div>
                <h1 className={styles.heroTitle}>
                  We build digital experiences that <span className={styles.titleGradient}>define tomorrow.</span>
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.1} className={styles.heroContent}>
                <p className={styles.heroSubtitle}>
                  Elevate your brand with world-class web applications, immersive websites, and scalable digital ecosystems designed to dominate.
                </p>
                <div className={styles.heroActions}>
                  <CustomButton href="/project-intake" variant="primary">
                    Start a Project <ArrowUpRight size={18} />
                  </CustomButton>
                  <CustomButton href="/work" variant="secondary">
                    Explore Our Work
                  </CustomButton>
                </div>
              </AnimateIn>
            </div>

            {/* Metrics Row */}
            <div className={styles.metricsRow}>
              {METRICS.map((metric) => (
                <div key={metric.label} className={styles.metricCol}>
                  <span className={styles.metricLabel}>{metric.label}</span>
                  <span className={styles.metricDesc}>{metric.desc}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Capability Ticker */}
        <section className={styles.tickerSection} aria-label="Capabilities ticker">
          <div className={styles.tickerTrack}>
            {TICKER_ITEMS.map((item, idx) => (
              <div key={`track1-${idx}`} className={styles.tickerItem}>
                <span>{item}</span>
                <span className={styles.tickerBullet} aria-hidden="true">&bull;</span>
              </div>
            ))}
          </div>
          <div className={styles.tickerTrack} aria-hidden="true">
            {TICKER_ITEMS.map((item, idx) => (
              <div key={`track2-${idx}`} className={styles.tickerItem}>
                <span>{item}</span>
                <span className={styles.tickerBullet} aria-hidden="true">&bull;</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className={styles.servicesSection}>
          <Container>
            <SectionHeading
              badge="Our Expertise"
              title="Capabilities that drive growth."
              description="From complex technical architecture to stunning user interfaces, we deliver beautiful, end-to-end solutions tailored to your unique challenges."
            />

            <div className={styles.bentoGrid}>
              {BENTO_CARDS.map((card, idx) => (
                <AnimateIn
                  key={idx}
                  delay={card.delay}
                  className={card.colSpan === 'wide' ? styles.bentoColWide : styles.bentoColNarrow}
                >
                  <Link href="/services" className={styles.bentoCard}>
                    <div className={styles.bentoHeader}>
                      <span className={styles.categoryBadge}>{card.category}</span>
                      <div className={styles.arrowBadge}>
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className={styles.bentoContent}>
                      <h3 className={styles.bentoTitle}>
                        {card.title.split('\n').map((line, lIdx) => (
                          <React.Fragment key={lIdx}>
                            {line}
                            {lIdx === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </h3>
                      <p className={styles.bentoDescription}>{card.description}</p>
                      <div className={styles.bentoTags}>
                        {card.tags.map((tag) => (
                          <span key={tag} className={styles.bentoTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.bentoImageLayer}>
                      <Image
                        src={card.image}
                        alt={card.title.replace('\n', ' ')}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className={styles.bentoBgImage}
                      />
                      <div className={styles.bentoGradientOverlay} />
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* CTA Banner */}
        <CTASection />
      </main>
    </div>
  );
};

export default HomeView;
