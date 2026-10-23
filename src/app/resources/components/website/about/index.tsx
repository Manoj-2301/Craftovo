/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';
import { UserCheck, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import SectionHeading from '@/Components/common/section-heading';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Styles */
import styles from './about.module.scss';

const TENETS = [
  {
    icon: UserCheck,
    num: '01',
    title: 'Direct Partner Access',
    desc: 'You work directly with the designer and engineer building your product. No junior handoffs, no account managers, and zero lost-in-translation delays.',
  },
  {
    icon: Sparkles,
    num: '02',
    title: 'High-Craft Aesthetics',
    desc: 'We refuse generic cookie-cutter templates. Every layout, color curve, typographic baseline, and micro-interaction is custom-crafted for your brand identity.',
  },
  {
    icon: Zap,
    num: '03',
    title: 'Institutional Speed',
    desc: 'By eliminating agency bloat and utilizing modern component-driven architectures, we turn concepts into production reality at startup velocity.',
  },
  {
    icon: ShieldCheck,
    num: '04',
    title: 'Full Ownership & Scalability',
    desc: 'Zero proprietary locks. When we hand over your product, you own all Figma files, GitHub repositories, credentials, and documentation outright.',
  },
];

const DUO_MEMBERS = [
  {
    role: 'Co-Founder & Lead Designer',
    focus: 'UI/UX Design & Brand Architecture',
    bio: 'Dedicated to human-centered digital experiences, meticulous typography, fluid motion systems, and conversion-centered product flows.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
  },
  {
    role: 'Co-Founder & Principal Engineer',
    focus: 'Full-Stack & Cloud Architecture',
    bio: 'Specialized in modern React ecosystems, Next.js App Router, edge caching, sub-second LCP optimization, and scalable database schemas.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
];

export const AboutView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.aboutPageWrapper}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Craftovo Team"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />

          <Container>
            <AnimateIn>
              <div className={styles.badgePill}>
                <span>Who We Are</span>
              </div>
              <h1 className={styles.title}>Design &amp; Engineering Under One Roof</h1>
              <p className={styles.leadText}>
                Craftovo is an independent digital studio founded by a designer and an engineer who believe great software happens when aesthetic obsession meets technical rigor.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Philosophy Section */}
        <section className={styles.philosophySection}>
          <Container>
            <AnimateIn delay={0.15}>
              <div className={styles.philosophyCard}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Our Studio Office"
                  fill
                  className={styles.philosophyBgImage}
                />
                <div className={styles.philosophyContent}>
                  <span className={styles.philosophySubtitle}>Our Origin &amp; Philosophy</span>
                  <h2 className={styles.philosophyTitle}>Built to bridge the gap between design and code.</h2>
                  <p className={styles.philosophyParagraph}>
                    Traditional agencies suffer from a fundamental divide: designers invent mockups that engineers cannot build efficiently, while engineers ship code that misses the soul of the visual craft.
                  </p>
                  <p className={styles.philosophyParagraph}>
                    At Craftovo, we dismantled this silo. Our design and code operate in unison from day zero. We build living components, test real interactions, and optimize for real devices—delivering products that feel cohesive, tactile, and effortless.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* The Studio Duo */}
        <section className={styles.duoSection}>
          <Container>
            <SectionHeading
              badge="The Studio Duo"
              title="The Makers Behind the Screen"
              description="Direct collaboration with senior craftspeople. When you hire Craftovo, you work directly with our founders."
              align="center"
            />

            <div className={styles.duoGrid}>
              {DUO_MEMBERS.map((member, idx) => (
                <AnimateIn key={member.role} delay={idx * 0.15}>
                  <div className={styles.duoCard}>
                    <div className={styles.avatarWrap}>
                      <Image
                        src={member.avatar}
                        alt={member.role}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className={styles.avatarImg}
                      />
                    </div>
                    <div className={styles.memberInfo}>
                      <span className={styles.memberFocus}>{member.focus}</span>
                      <h3 className={styles.memberRole}>{member.role}</h3>
                      <p className={styles.memberBio}>{member.bio}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Tenets Section */}
        <section className={styles.tenetsSection}>
          <Container>
            <SectionHeading
              badge="Our Operating Model"
              title="Four Tenets of Our Craft"
              description="The foundational commitments that govern every engagement, sprint, and client interaction."
            />

            <div className={styles.tenetsGrid}>
              {TENETS.map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <AnimateIn key={tenet.num} delay={idx * 0.1}>
                    <div className={styles.tenetCard}>
                      <div className={styles.tenetHeader}>
                        <div className={styles.tenetIcon}>
                          <Icon size={18} />
                        </div>
                        <span className={styles.tenetNum}>{tenet.num}</span>
                      </div>
                      <h3 className={styles.tenetTitle}>{tenet.title}</h3>
                      <p className={styles.tenetDesc}>{tenet.desc}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default AboutView;
