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
];

const BENTO_CARDS = [
  {
    title: 'Web\nApplications',
    description: 'Scalable, secure, and performant web apps built with modern React frameworks and robust scalable backends.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    delay: 0.1,
    topSticky: '12vh',
    zIndex: 10,
  },
  {
    title: 'UI/UX\nDesign',
    description: 'Intuitive interfaces and seamless user journeys designed to engage and convert.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    delay: 0.2,
    topSticky: '15vh',
    zIndex: 20,
  },
  {
    title: 'Mobile\nApps',
    description: 'Native feeling cross-platform applications that put your brand right in your customers\' pockets.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    delay: 0.3,
    topSticky: '18vh',
    zIndex: 30,
  },
  {
    title: 'E-commerce\nPlatforms',
    description: 'High-converting headless storefronts with blazing speeds and seamless checkout flows.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    delay: 0.4,
    topSticky: '21vh',
    zIndex: 40,
  },
];

export const HomeView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.homeContainer}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Hero abstract texture"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroGradientOverlay} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />

          <Container>
            <div className={styles.heroGrid}>
              <AnimateIn>
                <h1 className={styles.heroTitle}>
                  We build digital experiences that define tomorrow.
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.15} className={styles.heroContent}>
                <p className={styles.heroSubtitle}>
                  Elevate your brand with world-class web applications, immersive websites, and scalable digital ecosystems.
                </p>
                <div className={styles.heroActions}>
                  <CustomButton href="/project-intake" variant="primary">
                    Start a Project
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
        <section className={styles.tickerSection} aria-hidden="true">
          <div className={styles.tickerTrack}>
            <div className={styles.tickerGroup}>
              {TICKER_ITEMS.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  <span className={styles.tickerBullet}>&bull;</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerGroup}>
              {TICKER_ITEMS.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span>{item}</span>
                  <span className={styles.tickerBullet}>&bull;</span>
                </React.Fragment>
              ))}
            </div>
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

            <div className={styles.bentoContainer}>
              {BENTO_CARDS.map((card, idx) => (
                <AnimateIn
                  key={idx}
                  delay={card.delay}
                  className={styles.bentoStickyWrapper}
                  style={{
                    position: 'sticky',
                    top: card.topSticky,
                    zIndex: card.zIndex,
                  }}
                >
                  <Link href="/services" className={styles.bentoCard}>
                    <div className={styles.bentoHeader}>
                      <div className={styles.arrowBadge}>
                        <ArrowUpRight size={22} />
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
                    </div>

                    <div className={styles.bentoImageLayer}>
                      <Image
                        src={card.image}
                        alt={card.title.replace('\n', ' ')}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1050px"
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
