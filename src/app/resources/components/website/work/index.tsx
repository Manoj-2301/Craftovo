/* React import */
import React from 'react';

/** Libraries */
import Link from 'next/link';
import Image from 'next/image';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { projects } from '@/models/projects.data';

/** Styles */
import styles from './work.module.scss';

export const WorkView: React.FC = () => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.workPageWrapper}>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <Image
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop"
            alt="Work texture"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.gradientOverlay} aria-hidden="true" />

          <Container>
            <AnimateIn>
              <h1 className={styles.title}>Selected Work</h1>
              <p className={styles.leadText}>
                A curated collection of our most impactful projects and digital products.
              </p>
            </AnimateIn>
          </Container>
        </section>

        {/* Projects Grid */}
        <section className={styles.projectsGridSection}>
          <Container>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <AnimateIn key={project.id} delay={index * 0.1}>
                  <Link href={`/work/${project.slug}`} className={styles.projectCardLink}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.projectImage}
                      />
                      <div className={styles.imageGradient} aria-hidden="true" />
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default WorkView;
