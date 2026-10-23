/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';

/** Components */
import Container from '@/Components/common/container';
import AnimateIn from '@/Components/common/animate-in';
import ScrollProgress from '@/Components/common/scroll-progress';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { Project } from '@/models/common.types';

/** Styles */
import styles from './project-detail.module.scss';

export interface ProjectDetailViewProps {
  project: Project;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.projectPageWrapper}>
      <ScrollProgress />
      <main>
        {/* Header Section */}
        <section className={styles.heroSection}>
          <Container>
            <AnimateIn className={styles.headerContent}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <h1 className={styles.title}>{project.title}</h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className={styles.heroImageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className={styles.heroImage}
                />
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Details Section */}
        <section className={styles.detailsSection}>
          <Container>
            <div className={styles.detailsGrid}>
              <div className={styles.overviewCol}>
                <AnimateIn>
                  <h2 className={styles.sectionTitle}>Overview</h2>
                  <p className={styles.overviewText}>{project.longDescription}</p>
                </AnimateIn>
              </div>

              <div className={styles.techCol}>
                <AnimateIn delay={0.1}>
                  <div className={styles.techCard}>
                    <h3 className={styles.techCardTitle}>Technologies</h3>
                    <div className={styles.techTags}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
};

export default ProjectDetailView;
