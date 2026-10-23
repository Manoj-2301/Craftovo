/* React import */
'use client';
import React, { useState } from 'react';

/** Libraries */
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

/** Components */
import Container from '@/Components/common/container';
import CustomButton from '@/Components/common/custom-button';
import AnimateIn from '@/Components/common/animate-in';
import CTASection from '@/Components/common/cta-section';

/** Local Imports */
import { projects } from '@/models/projects.data';

/** Styles */
import styles from './work.module.scss';

const CATEGORIES = ['All', 'E-commerce', 'Web Application', 'Mobile App'];

export const WorkView: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [selectedCategory, setSelectedCategory] = useState('All');

  /** ---------- Handlers ---------- */
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
              <div className={styles.badgePill}>
                <span>Selected Portfolio</span>
              </div>
              <h1 className={styles.title}>Crafted to Perform</h1>
              <p className={styles.leadText}>
                Explore case studies from our studio partnerships—spanning conversion-optimized storefronts, enterprise web apps, and native mobile apps.
              </p>
            </AnimateIn>

            {/* Filter Pills */}
            <AnimateIn delay={0.15}>
              <div className={styles.filterBar}>
                {CATEGORIES.map((cat) => (
                  <CustomButton
                    key={cat}
                    variant="unstyled"
                    className={`${styles.filterPill} ${selectedCategory === cat ? styles.activeFilter : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </CustomButton>
                ))}
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Projects Grid */}
        <section className={styles.projectsGridSection}>
          <Container>
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project, index) => (
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

                      <div className={styles.cardFloatingHeader}>
                        <span className={styles.categoryPill}>{project.category}</span>
                        <div className={styles.arrowBadge}>
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectMeta}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDesc}>{project.description}</p>

                      <div className={styles.techPills}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={styles.techPill}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
