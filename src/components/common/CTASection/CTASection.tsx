import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { AnimateIn } from '../AnimateIn/AnimateIn';

export const CTASection = () => (
  <section className="py-24 md:py-40 text-center relative overflow-hidden">
    {/* Subtle Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>
    
    <Container className="relative z-10">
      <AnimateIn>
        <div className="glass-panel px-6 py-16 md:p-24 rounded-[3rem] flex flex-col items-center">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-outfit text-4xl md:text-6xl font-medium mb-6 text-text-main tracking-tight">Have an idea? <br/><span className="text-text-muted">Let's craft it.</span></h2>
            <p className="text-lg text-text-muted leading-relaxed font-light max-w-lg mx-auto">We partner with ambitious brands to design and build digital products that define the future.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button href="/contact" className="w-full sm:w-auto">Start a Project</Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">Explore Work</Button>
          </div>
        </div>
      </AnimateIn>
    </Container>
  </section>
);
