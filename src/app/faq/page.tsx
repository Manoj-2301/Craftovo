import { Container } from '@/components/common/Container/Container';
import { FAQAccordion } from '@/components/common/FAQAccordion/FAQAccordion';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24">
          <Container>
            <AnimateIn>
              <h1 className="font-outfit text-5xl md:text-7xl font-medium text-text-main mb-6 tracking-tight">Got Questions?</h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-[700px] leading-relaxed font-light">
                Everything you need to know about how we work, our process, and what it's like to partner with us.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <FAQAccordion />
            </AnimateIn>
          </Container>
        </section>
        <CTASection />
      </main>
      
    </div>
  );
}
