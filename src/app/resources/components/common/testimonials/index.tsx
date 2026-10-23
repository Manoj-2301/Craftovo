/* React import */
'use client';
import React, { useCallback } from 'react';

/** Libraries */
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/** Components */
import Container from '../container';
import SectionHeading from '../section-heading';
import AnimateIn from '../animate-in';
import CustomButton from '../custom-button';

/** Styles */
import styles from './testimonials.module.scss';

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    quote: "Working with Craftovo was a game-changer. They transformed our outdated platform into a lightning-fast, modern experience that our users absolutely love.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "The level of engineering quality and design precision is unmatched. Our conversion rates increased by 40% within the first month of launching.",
    author: "Michael Chang",
    role: "Founder, RetailX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "A remarkably talented duo. They operate with the efficiency of a massive agency but deliver the personalized touch and care of a boutique partner.",
    author: "Elena Rodriguez",
    role: "Product VP, Innovate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "They didn't just build what we asked for; they anticipated our needs and built a scalable architecture that will support our growth for years.",
    author: "David Kim",
    role: "CEO, NextGen SaaS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  /** ---------- State & Hooks ---------- */
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  /** ---------- Handlers ---------- */
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  /** ---------- Render ---------- */
  return (
    <section className={styles.section}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <Container>
        <div className={styles.headerRow}>
          <div className={styles.headingCol}>
            <SectionHeading
              badge="Client Love"
              title="What they say."
              description="Don't just take our word for it. Hear from visionary leaders and teams we've partnered with."
              className={styles.testimonialsHeading}
            />
          </div>
          <div className={styles.carouselControls}>
            <CustomButton
              variant="unstyled"
              className={styles.controlButton}
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </CustomButton>
            <CustomButton
              variant="unstyled"
              className={styles.controlButton}
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </CustomButton>
          </div>
        </div>

        <AnimateIn delay={0.3}>
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.sliderContainer}>
              {testimonialsData.map((item, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.testimonialCard}>
                    <div>
                      <Quote className={styles.quoteIcon} />
                      <p className={styles.quoteText}>
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                    <div className={styles.authorRow}>
                      <div className={styles.avatarWrap}>
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          sizes="52px"
                          className={styles.avatarImg}
                        />
                      </div>
                      <div>
                        <h4 className={styles.authorName}>{item.author}</h4>
                        <p className={styles.authorRole}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};

export default Testimonials;
