/* React import */
import React, { Suspense } from 'react';

/** Libraries */
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Clock, Globe, ArrowRight } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import Loader from '@/Components/common/loader';
import ContactForm from './contact-form';

/** Styles */
import styles from './contact.module.scss';

const CONTACT_PERKS = [
  {
    icon: Mail,
    title: 'Direct Partner Email',
    value: 'hello@craftovo.com',
    desc: 'Speak directly with our designer & engineer duo.',
  },
  {
    icon: Clock,
    title: 'Guaranteed Turnaround',
    value: '< 24 Hours',
    desc: 'Rapid initial project assessment & response time.',
  },
  {
    icon: Globe,
    title: 'Global Operating Hours',
    value: 'Worldwide Engagements',
    desc: 'Async-first workflow optimized for all time zones.',
  },
];

export const ContactView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.contactPageWrapper}>
      <main>
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2070&auto=format&fit=crop"
            alt="Contact texture"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />
          <div className={styles.glow} aria-hidden="true" />

          <Container>
            <div className={styles.formContainer}>
              <AnimateIn>
                <div className={styles.badgePill}>
                  <span>Get in Touch</span>
                </div>
                <h1 className={styles.title}>Let&apos;s Build Together</h1>
                <p className={styles.subtitle}>
                  Have an upcoming project, a product to revamp, or a question about our productised gigs? Drop us a line below.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <div className={styles.intakeCard}>
                  <div>
                    <h3 className={styles.intakeTitle}>Need a detailed proposal?</h3>
                    <p className={styles.intakeDesc}>
                      Complete our 4-minute interactive Project Intake Wizard with auto-saved drafts.
                    </p>
                  </div>
                  <Link href="/project-intake" className={styles.intakeLink}>
                    Start Wizard <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <Suspense fallback={<Loader />}>
                  <ContactForm />
                </Suspense>
              </AnimateIn>

              <AnimateIn delay={0.35} className={styles.perksRow}>
                {CONTACT_PERKS.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className={styles.perkCard}>
                      <div className={styles.perkIcon}>
                        <Icon size={18} />
                      </div>
                      <h4 className={styles.perkTitle}>{perk.title}</h4>
                      <span className={styles.perkValue}>{perk.value}</span>
                      <p className={styles.perkDesc}>{perk.desc}</p>
                    </div>
                  );
                })}
              </AnimateIn>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default ContactView;
