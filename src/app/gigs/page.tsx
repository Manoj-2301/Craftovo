import { Container } from '@/components/common/Container/Container';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';

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
              {[
                { title: 'Landing Page Build', price: '$2,500', desc: 'A stunning, high-converting landing page designed and developed in Next.js with advanced animations.' },
                { title: 'E-commerce Setup', price: '$5,000', desc: 'Complete high-end Shopify or custom headless e-commerce setup with premium payment integration.' },
                { title: 'MVP Web App', price: '$12,000', desc: 'A fully functional Minimum Viable Product built with a modern stack to validate your idea in the market.' }
              ].map((gig, i) => (
                <AnimateIn key={i} delay={i * 0.1}>
                  <Card className="h-full flex flex-col border-black/[0.05] hover:border-black/10">
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-text-main">{gig.title}</h3>
                    <div className="text-2xl text-text-main font-medium mb-6 pb-6 border-b border-black/5 tracking-tight">{gig.price} <span className="text-sm text-text-muted font-light tracking-normal">/ one-time</span></div>
                    <p className="text-text-muted mb-10 flex-1 leading-relaxed font-light">{gig.desc}</p>
                    <Button href="/contact" variant="secondary" className="w-full">Book this gig</Button>
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
