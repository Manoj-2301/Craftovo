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
          <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero Background" fill className="object-cover opacity-[0.07] pointer-events-none mix-blend-multiply grayscale" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F4F4F6]/50 to-[#F4F4F6] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/60 rounded-full blur-[120px] pointer-events-none"></div>
          
          <Container className="relative z-10 flex flex-col items-center text-center">
            <AnimateIn>
              <div className="inline-block px-4 py-2 rounded-full glass-panel text-xs font-bold tracking-widest uppercase text-text-muted mb-8">
                Premium Digital Studio
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-outfit text-5xl md:text-7xl lg:text-[96px] font-medium mb-8 max-w-[1100px] leading-[1.05] tracking-tight text-text-main">
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
        <section className="py-12 border-y border-black/[0.03] bg-white/[0.01] overflow-hidden flex whitespace-nowrap opacity-50 relative w-full">
          <div className="flex animate-marquee shrink-0 items-center font-outfit text-2xl md:text-3xl font-medium tracking-wide uppercase text-text-main">
            <div className="flex gap-16 px-8 items-center">
              <span>Web Development</span> <span>•</span>
              <span>Product Design</span> <span>•</span>
              <span>Mobile Apps</span> <span>•</span>
              <span>E-commerce</span> <span>•</span>
              <span>Branding</span> <span>•</span>
              <span>Custom Software</span> <span>•</span>
            </div>
          </div>
          <div className="flex animate-marquee shrink-0 items-center font-outfit text-2xl md:text-3xl font-medium tracking-wide uppercase text-text-main" aria-hidden="true">
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
              description="From complex technical architecture to stunning user interfaces, we deliver beautiful, end-to-end solutions tailored to your unique challenges." 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimateIn delay={0.1}>
                <Card href="/services" className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/90">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">Web Applications</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Scalable, secure, and performant web apps built with modern React frameworks and robust scalable backends.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Web Applications" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white from-30% via-white/80 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Card href="/services" className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/90">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">UI/UX Design</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Intuitive interfaces and seamless user journeys designed to engage and convert.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="UI/UX Design" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white from-30% via-white/80 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <Card href="/services" className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/90">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">Mobile Apps</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile Apps" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white from-30% via-white/80 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                 <Card href="/services" className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/90">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">E-commerce</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="E-commerce" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white from-30% via-white/80 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>
            </div>
          </Container>
        </section>

        {/* Performance & Compliance Section */}
        <section className="py-24 md:py-32 relative bg-white">
          <Container className="relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <SectionHeading 
                align="center"
                badge="Quality Assurance"
                title="Engineered for excellence."
                description="Every project is rigorously tested against industry-standard benchmarks. We deliver lightning-fast, accessible, and highly optimized digital experiences."
              />
            </div>

            <div className="flex flex-col gap-8 md:gap-12 w-full max-w-5xl mx-auto pb-32">
              {/* Layer 1 - Performance Metrics */}
              <AnimateIn delay={0.1} className="md:sticky md:top-[15vh] z-10 w-full transition-all duration-500">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-black/5 flex flex-col md:flex-row gap-12 justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)]">
                   <div className="flex-1 w-full text-center md:text-left">
                     <h3 className="font-outfit text-3xl md:text-4xl font-medium text-text-main mb-4">Performance Metrics</h3>
                     <p className="text-text-muted font-light text-xl">Consistent 95%+ scores across all Core Web Vitals.</p>
                   </div>
                   <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                     <ComplianceChart value={100} label="Accessibility" />
                     <ComplianceChart value={96} label="Best Practices" />
                     <ComplianceChart value={98} label="Performance" />
                     <ComplianceChart value={100} label="SEO" />
                   </div>
                </div>
              </AnimateIn>

              {/* Layer 2 - Zero Compromises & Security */}
              <AnimateIn delay={0.2} className="md:sticky md:top-[18vh] z-20 w-full transition-all duration-500">
                <div className="bg-white rounded-[3rem] p-3 md:p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)] border border-black/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-[#0B0B0E] rounded-[2.25rem] p-8 md:p-14 border border-white/10 relative overflow-hidden group text-white">
                       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent"></div>
                       <div className="relative z-10 flex flex-col h-full justify-between">
                         <div>
                            <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Zero</h3>
                            <p className="text-white/60 font-light text-lg leading-relaxed">Compromises on speed.</p>
                         </div>
                         <div className="mt-16">
                           <div className="flex items-end gap-1 mb-2">
                             <span className="text-5xl md:text-6xl font-outfit font-medium">99.9</span>
                             <span className="text-white/40 mb-2 font-light text-xl">%</span>
                           </div>
                           <p className="text-white/40 text-xs tracking-widest uppercase font-medium">Uptime SLA Guarantee</p>
                         </div>
                       </div>
                    </div>

                    <div className="bg-black/[0.03] rounded-[2.25rem] p-8 md:p-14 border border-black/5 flex flex-col justify-between">
                       <div className="w-16 h-16 rounded-full bg-[#0B0B0E] flex items-center justify-center mb-12 text-white">
                         <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                       </div>
                       <div>
                         <h3 className="font-outfit text-3xl font-medium text-text-main mb-4">Bank-Grade Security</h3>
                         <p className="text-text-muted font-light text-lg leading-relaxed">Enterprise encryption and strict compliance with global data protection regulations.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Layer 3 - Global Edge Network */}
              <AnimateIn delay={0.3} className="md:sticky md:top-[21vh] z-30 w-full transition-all duration-500">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-black/5 relative overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)]">
                   <div className="flex flex-col md:flex-row gap-12 items-center h-full">
                      <div className="flex-1 relative z-20 text-center md:text-left">
                         <h3 className="font-outfit text-3xl md:text-4xl font-medium text-text-main mb-6">Global Edge Network</h3>
                         <p className="text-text-muted font-light leading-relaxed mb-8 text-xl">We deploy applications to the edge, guaranteeing sub-50ms latency for users anywhere.</p>
                         <div className="flex flex-wrap justify-center md:justify-start gap-3">
                           {['Vercel Edge', 'AWS Global', 'Cloudflare', 'GCP'].map(tech => (
                             <span key={tech} className="px-5 py-2 rounded-full border border-black/10 text-xs font-bold uppercase tracking-wider text-text-main">{tech}</span>
                           ))}
                         </div>
                      </div>
                      <div className="flex-1 relative w-full h-[300px] rounded-[1.5rem] overflow-hidden border border-black/5">
                         <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Servers" fill className="object-cover grayscale opacity-90 mix-blend-multiply" />
                      </div>
                   </div>
                </div>
              </AnimateIn>
            </div>
          </Container>
        </section>

        <Testimonials />
        <CTASection />
      </main>
      
    </div>
  );
}
