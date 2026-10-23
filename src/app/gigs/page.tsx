import { Container } from '@/components/common/Container/Container';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import { gigs } from '@/data/gigs/gigs.data';

export default function GigsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
          <Container className="relative z-10">
            <AnimateIn>
              <h1 className="font-outfit text-5xl md:text-7xl font-medium mb-6 text-text-main tracking-tight">Productised Gigs</h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-[700px] leading-relaxed font-light">High-impact, pre-packaged services with clear deliverables and transparent pricing.</p>
            </AnimateIn>
          </Container>
        </section>
        
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gigs.map((gig, i) => (
                <AnimateIn key={gig.id} delay={i * 0.1}>
                  <Card className="h-full flex flex-col">
                    <span className="text-sm font-medium text-text-muted mb-3">{gig.category}</span>
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-text-main">{gig.title}</h3>
                    <div className="text-2xl text-text-main font-medium mb-6 pb-6 border-b border-black/5 tracking-tight">{gig.startingPrice} <span className="text-sm text-text-muted font-light tracking-normal">starting price</span></div>
                    <p className="text-text-muted mb-10 flex-1 leading-relaxed font-light">{gig.description}</p>
                    <Button href={`/gigs/${gig.slug}`} variant="secondary" className="w-full">View gig details</Button>
                  </Card>
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
