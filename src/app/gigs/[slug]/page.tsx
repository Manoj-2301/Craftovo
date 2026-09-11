import { Container } from '@/components/common/Container/Container';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { Button } from '@/components/common/Button/Button';
import { gigs } from '@/data/gigs/gigs.data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import { ScrollProgress } from '@/components/common/ScrollProgress/ScrollProgress';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const gig = gigs.find(g => g.slug === resolvedParams.slug);
  if (!gig) return { title: 'Gig Not Found' };
  
  return {
    title: `${gig.title} | Craftovo Gigs`,
    description: gig.description,
  };
}

export function generateStaticParams() {
  return gigs.map((gig) => ({
    slug: gig.slug,
  }));
}

export default async function GigPage({ params }: Props) {
  const resolvedParams = await params;
  const gig = gigs.find(g => g.slug === resolvedParams.slug);
  
  if (!gig) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <main className="flex-1">
        <section className="pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>
           
           <Container className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                 {/* Sidebar / Main Action */}
                 <div className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-32">
                    <AnimateIn>
                       <div className="glass-panel p-8 md:p-10 rounded-[2rem] flex flex-col items-start border-black/5">
                          <span className="inline-block px-3 py-1 rounded-full bg-black/[0.03] text-xs font-bold tracking-widest uppercase text-text-muted mb-6">
                            {gig.category}
                          </span>
                          <h1 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-text-main tracking-tight">{gig.title}</h1>
                          <p className="text-text-muted leading-relaxed font-light mb-8">{gig.description}</p>
                          
                          <div className="w-full border-t border-black/5 pt-8 mb-8">
                             <div className="text-sm text-text-muted font-light mb-1">Starting from</div>
                             <div className="text-4xl font-medium text-text-main">{gig.startingPrice}</div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 w-full mb-8">
                             <div className="bg-black/[0.03] rounded-xl p-4">
                               <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Delivery</div>
                               <div className="font-medium text-text-main">{gig.deliveryDays}</div>
                             </div>
                             <div className="bg-black/[0.03] rounded-xl p-4">
                               <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Revisions</div>
                               <div className="font-medium text-text-main">{gig.revisions}</div>
                             </div>
                          </div>
                          
                          <Button href={`/contact?service=${gig.slug}`} className="w-full">
                            Inquire about this gig
                          </Button>
                       </div>
                    </AnimateIn>
                 </div>

                 {/* Content */}
                 <div className="w-full lg:w-2/3 flex flex-col gap-16">
                    <AnimateIn delay={0.1}>
                       <h2 className="font-outfit text-3xl md:text-4xl font-medium mb-8 text-text-main">What's included</h2>
                       <ul className="flex flex-col gap-4">
                         {gig.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4">
                               <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center shrink-0 mt-0.5 text-text-main">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                               </div>
                               <span className="text-lg text-text-muted font-light">{feature}</span>
                            </li>
                         ))}
                       </ul>
                    </AnimateIn>

                    <AnimateIn delay={0.2}>
                       <h2 className="font-outfit text-3xl md:text-4xl font-medium mb-8 text-text-main">How it works</h2>
                       <div className="flex flex-col gap-8">
                          {[
                            { step: '01', title: 'Project Brief', desc: 'We discuss your requirements and confirm project scope.' },
                            { step: '02', title: 'Design & Development', desc: 'We craft your solution with regular updates and feedback rounds.' },
                            { step: '03', title: 'Delivery & Handoff', desc: 'Final review, testing, and handover of the completed project.' }
                          ].map((item, i) => (
                             <div key={i} className="flex gap-6 md:gap-8 items-start">
                                <div className="font-outfit text-4xl md:text-5xl font-light text-text-main/20">{item.step}</div>
                                <div className="flex flex-col gap-2 pt-1 md:pt-2">
                                   <h4 className="text-xl text-text-main font-medium">{item.title}</h4>
                                   <p className="text-text-muted font-light leading-relaxed">{item.desc}</p>
                                </div>
                             </div>
                          ))}
                       </div>
                    </AnimateIn>
                 </div>
              </div>
           </Container>
        </section>
        
        <CTASection />
      </main>
      
    </div>
  );
}
