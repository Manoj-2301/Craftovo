import { Container } from '@/components/common/Container/Container';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative min-h-[60vh] flex flex-col justify-center">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our Team" fill className="object-cover opacity-20 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4F4F6]/80 to-[#F4F4F6] pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F4F6] via-[#F4F4F6]/50 to-transparent pointer-events-none"></div>
          <Container className="relative z-10">
            <AnimateIn>
              <h1 className="font-outfit text-5xl md:text-7xl font-medium mb-8 text-text-main tracking-tight">About Craftovo</h1>
              <p className="text-xl md:text-3xl text-text-muted max-w-[900px] leading-relaxed font-light">
                We are a passionate duo of a designer and an engineer dedicated to building exceptional digital products that push boundaries. 
              </p>
            </AnimateIn>
          </Container>
        </section>
        
        <section className="py-16 md:py-24">
           <Container>
              <AnimateIn delay={0.2}>
                 <div className="glass-panel rounded-[2rem] p-12 md:p-24 border-black/5 relative overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Our Office" fill className="object-cover opacity-10 pointer-events-none mix-blend-overlay" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#F4F4F6] via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                    <h2 className="font-outfit text-3xl md:text-5xl font-medium mb-8 text-text-main">Our Philosophy</h2>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-3xl mb-8">
                      We believe that great software is born at the intersection of beautiful design and impeccable engineering. We don't just write code; we craft experiences that users love and businesses rely on.
                    </p>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-3xl">
                      From early-stage startups to established enterprises, we partner closely with our clients, treating every product as if it were our own.
                    </p>
                    </div>
                 </div>
              </AnimateIn>
           </Container>
        </section>
        <CTASection />
      </main>
      
    </div>
  );
}
