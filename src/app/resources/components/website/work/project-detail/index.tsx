/* React import */
import React from 'react';

/** Libraries */
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
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

const PROJECT_HIGHLIGHTS = [
  { label: 'Platform Performance', value: '99/100', desc: 'Google Lighthouse Score' },
  { label: 'Time to First Byte', value: '< 280ms', desc: 'Global Edge Network' },
  { label: 'Accessibility', value: '100% WCAG', desc: 'AA Contrast & Screen Reader Tested' },
];

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project }) => {
  /** ---------- Render ---------- */
  return (
    <div className={styles.projectPageWrapper}>
      <ScrollProgress />
      <main>
        {/* Header Section */}
        <section className={styles.heroSection}>
          <Container>
            <div className={styles.backButtonWrap}>
              <CustomButton href="/work" variant="unstyled" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to all projects
              </CustomButton>
            </div>

            <AnimateIn className={styles.headerContent}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.projectSubtitle}>{project.description}</p>
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

            {/* Performance Highlights Bar */}
            <AnimateIn delay={0.25}>
              <div className={styles.highlightsBar}>
                {PROJECT_HIGHLIGHTS.map((item) => (
                  <div key={item.label} className={styles.highlightCol}>
                    <span className={styles.highlightValue}>{item.value}</span>
                    <span className={styles.highlightLabel}>{item.label}</span>
                    <span className={styles.highlightDesc}>{item.desc}</span>
                  </div>
                ))}
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
                  <h2 className={styles.sectionTitle}>The Challenge & Approach</h2>
                  <p className={styles.overviewText}>{project.longDescription}</p>

                  <div className={styles.keyDeliverables}>
                    <h3 className={styles.deliverablesTitle}>What We Delivered</h3>
                    <ul className={styles.deliverablesList}>
                      <li className={styles.deliverableItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>Production-ready Next.js App Router architecture with strict TypeScript types</span>
                      </li>
                      <li className={styles.deliverableItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>Modular design system with fluid typography and custom SCSS design tokens</span>
                      </li>
                      <li className={styles.deliverableItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>Interactive micro-animations and zero cumulative layout shift (CLS)</span>
                      </li>
                    </ul>
                  </div>
                </AnimateIn>
              </div>

              <div className={styles.techCol}>
                <AnimateIn delay={0.1}>
                  <div className={styles.techCard}>
                    <h3 className={styles.techCardTitle}>Project Stack</h3>
                    <div className={styles.techTags}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.partnerInfo}>
                      <span className={styles.partnerLabel}>Studio Role</span>
                      <p className={styles.partnerValue}>End-to-end Strategy, UI/UX Design, and Engineering</p>
                    </div>

                    <div className={styles.cardAction}>
                      <CustomButton href="/project-intake" variant="primary" fullWidth>
                        Start a Similar Project <ArrowUpRight size={16} />
                      </CustomButton>
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
