import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { AnimateIn } from '../AnimateIn/AnimateIn';
import Link from 'next/link';

export const CTASection = () => (
  <section className="py-16 md:py-24 text-center relative overflow-hidden">
    {/* Subtle Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    
    <Container className="relative z-10">
      <AnimateIn>
        <div className="bg-white border border-black/5 shadow-2xl shadow-blue-900/5 px-6 py-16 md:p-24 rounded-[3rem] flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          <div className="mb-10 max-w-2xl relative z-10">
            <h2 className="font-outfit text-4xl md:text-6xl font-medium mb-6 text-text-main tracking-tight">Have an idea? <br/><em className="text-blue-600 not-italic font-medium">Let's craft it.</em></h2>
            <p className="text-lg text-text-muted leading-relaxed font-light max-w-lg mx-auto">We partner with ambitious brands to design and build digital products that define the future.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto relative z-10">
            <Button href="/project-intake" className="w-full sm:w-auto">Start a Project</Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">Explore Work</Button>
          </div>
        </div>
      </AnimateIn>
    </Container>
  </section>
);
