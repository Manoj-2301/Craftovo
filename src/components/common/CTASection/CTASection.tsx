import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { AnimateIn } from '../AnimateIn/AnimateIn';

export const CTASection = () => (
  <section className="py-16 md:py-24">
    <Container>
      <AnimateIn>
        <div className="bg-[#0B0B0E] border border-black/20 shadow-2xl shadow-black/10 px-6 py-16 md:p-24 rounded-[3rem] flex flex-col items-center relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="mb-10 max-w-2xl relative z-10">
            <h2 className="font-outfit text-4xl md:text-6xl font-medium mb-6 text-white tracking-tight">Have an idea?<br />Let&apos;s craft it.</h2>
            <p className="text-lg text-white/60 leading-relaxed font-light max-w-lg mx-auto">We partner with ambitious brands to design and build digital products that define the future.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto relative z-10">
            <Button href="/project-intake" className="w-full sm:w-auto">Start a Project</Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto !bg-white/10 !border-white/20 !text-white hover:!bg-white/15 hover:!border-white/30">Explore Work</Button>
          </div>
        </div>
      </AnimateIn>
    </Container>
  </section>
);
