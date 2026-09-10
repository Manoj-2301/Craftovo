import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Card } from '@/components/common/Card/Card';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import Image from 'next/image';
import { ComplianceChart } from '@/components/common/ComplianceChart/ComplianceChart';
import { Testimonials } from '@/components/common/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
          <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero Background" fill className="object-cover opacity-[0.07] pointer-events-none mix-blend-screen grayscale" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
          
          <Container className="relative z-10 flex flex-col items-center text-center">
            <AnimateIn>
              <div className="inline-block px-4 py-2 rounded-full glass-panel text-xs font-bold tracking-widest uppercase text-text-muted mb-8">
                Premium Digital Studio
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-outfit text-5xl md:text-7xl lg:text-[96px] font-medium mb-8 max-w-[1100px] leading-[1.05] tracking-tight text-white">
                We build digital <span className="text-text-muted">experiences</span> that define tomorrow.
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-lg md:text-2xl text-text-muted max-w-[650px] mb-12 leading-relaxed font-light">
                Elevate your brand with world-class web applications, immersive websites, and scalable digital ecosystems.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3} className="flex flex-col sm:flex-row gap-5">
              <Button href="/contact">Start a Project</Button>
              <Button href="/work" variant="secondary">Explore Our Work</Button>
            </AnimateIn>
          </Container>
        </section>
        
        {/* Capability Ticker */}
        <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden flex whitespace-nowrap opacity-50 relative w-full">
          <div className="flex animate-marquee shrink-0 items-center font-outfit text-2xl md:text-3xl font-medium tracking-wide uppercase text-white">
            <div className="flex gap-16 px-8 items-center">
              <span>Web Development</span> <span>•</span>
              <span>Product Design</span> <span>•</span>
              <span>Mobile Apps</span> <span>•</span>
              <span>E-commerce</span> <span>•</span>
              <span>Branding</span> <span>•</span>
              <span>Custom Software</span> <span>•</span>
            </div>
          </div>
          <div className="flex animate-marquee shrink-0 items-center font-outfit text-2xl md:text-3xl font-medium tracking-wide uppercase text-white" aria-hidden="true">
            <div className="flex gap-16 px-8 items-center">
              <span>Web Development</span> <span>•</span>
              <span>Product Design</span> <span>•</span>
              <span>Mobile Apps</span> <span>•</span>
              <span>E-commerce</span> <span>•</span>
              <span>Branding</span> <span>•</span>
              <span>Custom Software</span> <span>•</span>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-32 md:py-48">
          <Container>
            <SectionHeading 
              badge="Our Expertise"
              title="Capabilities that drive growth." 
              description="From complex technical architecture to stunning user interfaces, our dedicated two-person team delivers beautiful, end-to-end solutions tailored to your unique challenges." 
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateIn delay={0.1} className="md:col-span-2">
                <Card className="h-full bg-white/[0.02] relative overflow-hidden group min-h-[400px] flex flex-col justify-end border-white/10 hover:border-white/30">
                   <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Web Applications" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5 z-10">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                   </div>
                   <div className="relative z-10 pt-32">
                     <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">Web Applications</h3>
                     <p className="text-text-muted max-w-md font-light text-lg">Scalable, secure, and performant web apps built with modern React frameworks and robust scalable backends.</p>
                   </div>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.2} className="md:col-span-1">
                <Card className="h-full bg-gradient-to-br from-white/[0.06] to-transparent relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
                  <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="UI/UX Design" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-white">UI/UX Design</h3>
                  <p className="text-text-muted font-light">Intuitive interfaces and seamless user journeys designed to engage and convert your audience.</p>
                  </div>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.3} className="md:col-span-1">
                <Card className="h-full bg-gradient-to-tr from-white/[0.06] to-transparent relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
                  <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile Apps" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-white">Mobile Apps</h3>
                  <p className="text-text-muted font-light">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                  </div>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.4} className="md:col-span-2">
                 <Card className="h-full bg-white/[0.02] min-h-[400px] flex flex-col justify-end relative overflow-hidden group border-white/10 hover:border-white/30">
                  <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="E-commerce Platforms" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5 z-10">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                   </div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">E-commerce Platforms</h3>
                    <p className="text-text-muted max-w-md font-light text-lg">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                  </div>
                </Card>
              </AnimateIn>
            </div>
          </Container>
        </section>

        {/* Performance & Compliance Section */}
        <section className="py-24 md:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="w-full lg:w-5/12">
                <AnimateIn>
                  <SectionHeading 
                    badge="Quality Assurance"
                    title="Striving for excellence."
                    description="We don't just build websites; we engineer digital experiences that consistently achieve 95%+ compliance in accessibility, best practices, SEO, and performance."
                  />
                  <div className="flex flex-col gap-4 mt-8">
                    <p className="text-text-muted font-light leading-relaxed">
                      Every project is rigorously tested against industry-standard benchmarks. Our commitment to quality ensures your application is lightning-fast, fully accessible, and optimized for search engines.
                    </p>
                  </div>
                </AnimateIn>
              </div>
              <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                <AnimateIn delay={0.2} className="w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 glass-panel p-8 md:p-12 rounded-[2rem] border-white/10 w-full">
                     <ComplianceChart value={98} label="Access" />
                     <ComplianceChart value={95} label="Practices" />
                     <ComplianceChart value={96} label="Perform" />
                     <ComplianceChart value={99} label="SEO" />
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        <Testimonials />
        <CTASection />
      </main>
      
    </div>
  );
}
