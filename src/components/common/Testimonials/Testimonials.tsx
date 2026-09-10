'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { AnimateIn } from '../AnimateIn/AnimateIn';
import { Container } from '../Container/Container';
import Image from 'next/image';

const testimonials = [
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

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full max-w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            badge="Client Love"
            title="What they say."
            description="Don't just take our word for it. Hear from the visionary leaders and teams we've partnered with."
          />
          <AnimateIn delay={0.2} className="flex gap-4 shrink-0 mb-8 md:mb-16">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3}>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6">
                  <div className="glass-panel p-10 md:p-12 rounded-[2rem] border-white/10 h-full flex flex-col justify-between">
                    <svg className="w-10 h-10 text-white/20 mb-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L16.41 14.591C16.892 13.238 17.518 11.517 18.287 9.428C18.913 7.643 19.347 6.136 19.589 4.909C19.83 3.682 19.951 2.727 19.951 2.045H15.938C15.938 2.652 15.849 3.485 15.671 4.545C15.492 5.606 15.224 6.818 14.866 8.182C14.509 9.545 14.017 11.061 13.391 12.727L10.372 21H14.017ZM4.706 21L7.098 14.591C7.581 13.238 8.206 11.517 8.975 9.428C9.601 7.643 10.035 6.136 10.277 4.909C10.518 3.682 10.639 2.727 10.639 2.045H6.626C6.626 2.652 6.537 3.485 6.358 4.545C6.18 5.606 5.912 6.818 5.554 8.182C5.197 9.545 4.706 11.061 4.08 12.727L1.061 21H4.706Z" />
                    </svg>
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-12">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20">
                        <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-outfit font-medium text-white text-lg">{item.author}</h4>
                        <p className="text-text-muted text-sm">{item.role}</p>
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
