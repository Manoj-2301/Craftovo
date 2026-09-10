import { Container } from '@/components/common/Container/Container';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative min-h-[50vh] flex flex-col justify-center">
          <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Services Background" fill className="object-cover opacity-10 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
          
          <Container className="relative z-10">
            <AnimateIn>
              <h1 className="font-outfit text-5xl md:text-7xl font-medium mb-6 text-white tracking-tight">Our Services</h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-[700px] leading-relaxed font-light">Comprehensive digital solutions tailored to elevate your business in the modern landscape.</p>
            </AnimateIn>
          </Container>
        </section>

        <section className="py-16 md:py-24 relative">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Web Development', desc: 'Fast, secure, and scalable websites built with modern technologies.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop' },
                { title: 'Web Applications', desc: 'Complex web apps with robust backends and intuitive frontends.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
                { title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop' },
                { title: 'UI/UX Design', desc: 'User-centered design that looks beautiful and drives conversions.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop' },
                { title: 'E-commerce Solutions', desc: 'Custom online stores optimized for sales and performance.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
                { title: 'Custom Software', desc: 'Bespoke software tailored perfectly to your business processes.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop' }
              ].map((service, i) => (
                <AnimateIn key={i} delay={i * 0.1}>
                  <div className="glass-panel rounded-[2rem] p-8 border-white/10 relative overflow-hidden group min-h-[350px] flex flex-col justify-end hover:border-white/30 transition-colors">
                    <Image src={service.img} alt={service.title} fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <h3 className="font-outfit text-3xl font-medium mb-4 text-white">{service.title}</h3>
                      <p className="text-text-muted font-light leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      
    </div>
  );
}
