import { Container } from '@/components/common/Container/Container';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import Image from 'next/image';

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative min-h-[50vh] flex flex-col justify-center">
          <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop" alt="Work Background" fill className="object-cover opacity-10 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F4F6] via-transparent to-[#F4F4F6] pointer-events-none"></div>
          <Container className="relative z-10">
            <AnimateIn>
              <h1 className="font-outfit text-5xl md:text-7xl font-medium mb-6 text-text-main tracking-tight">Selected Work</h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-[700px] leading-relaxed font-light">A curated collection of our most impactful projects and digital products.</p>
            </AnimateIn>
          </Container>
        </section>
        
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {[
                { title: "Fintech Dashboard", tags: "Web App • UI/UX • React", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
                { title: "E-Commerce Storefront", tags: "E-commerce • Next.js • Stripe", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
                { title: "SaaS Marketing Site", tags: "Web Design • Framer Motion", img: "https://images.unsplash.com/photo-1481481833547-5d74f26b52a4?q=80&w=2081&auto=format&fit=crop" },
                { title: "Mobile Banking App", tags: "React Native • FinTech", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" }
              ].map((item, i) => (
                <AnimateIn key={i} delay={i * 0.1}>
                  <div className="cursor-pointer group">
                    <div className="glass-panel rounded-[2rem] h-[350px] sm:h-[450px] mb-8 overflow-hidden relative flex items-center justify-center bg-white/40 border-black/5 group-hover:border-black/15 transition-colors">
                       <Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F6] via-[#F4F4F6]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                    </div>
                    <h3 className="font-outfit text-3xl font-medium mb-3 text-text-main transition-colors">{item.title}</h3>
                    <p className="text-text-muted font-light">{item.tags}</p>
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
