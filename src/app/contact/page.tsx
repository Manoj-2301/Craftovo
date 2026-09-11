import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import { ContactForm } from '@/components/common/ContactForm/ContactForm';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden">
           <Image src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2070&auto=format&fit=crop" alt="Contact Background" fill className="object-cover opacity-10 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
           <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#F4F4F6]/70 to-[#050505] pointer-events-none"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>
          
          <Container className="relative z-10">
            <div className="max-w-[700px] mx-auto">
              <AnimateIn>
                <h1 className="font-outfit text-5xl md:text-7xl font-medium mb-6 text-center text-text-main tracking-tight">Let's talk</h1>
                <p className="text-xl md:text-2xl text-text-muted text-center mb-16 leading-relaxed font-light">Tell us about your next project. We typically respond within 24 hours.</p>
              </AnimateIn>
              
              <AnimateIn delay={0.2}>
                <ContactForm />
              </AnimateIn>
            </div>
          </Container>
        </section>
      </main>
      
    </div>
  );
}
