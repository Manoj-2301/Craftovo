import { Container } from '@/components/common/Container/Container';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { projects } from '@/data/projects/projects.data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';
import { ScrollProgress } from '@/components/common/ScrollProgress/ScrollProgress';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Craftovo Work`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
          <Container className="relative z-10">
            <AnimateIn className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full glass-panel text-xs font-bold tracking-widest uppercase text-text-muted mb-6">
                {project.category}
              </span>
              <h1 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-medium text-text-main tracking-tight">{project.title}</h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="w-full aspect-video glass-panel rounded-[2rem] overflow-hidden relative flex items-center justify-center bg-white/40">
                 {/* Placeholder for project image */}
                 <span className="text-text-main/20 font-outfit text-3xl">Project Image: {project.title}</span>
              </div>
            </AnimateIn>
          </Container>
        </section>
        
        <section className="py-16 md:py-24">
          <Container>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
               <div className="w-full lg:w-2/3">
                  <AnimateIn>
                    <h2 className="font-outfit text-3xl md:text-4xl font-medium mb-8 text-text-main">Overview</h2>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light">{project.longDescription}</p>
                  </AnimateIn>
               </div>
               
               <div className="w-full lg:w-1/3">
                  <AnimateIn delay={0.1}>
                    <div className="glass-panel p-8 rounded-3xl">
                       <h3 className="font-outfit text-2xl font-medium mb-6 text-text-main border-b border-black/5 pb-4">Technologies</h3>
                       <div className="flex flex-wrap gap-3">
                         {project.technologies.map(tech => (
                           <span key={tech} className="px-4 py-2 rounded-full bg-black/[0.03] text-text-muted text-sm border border-black/5">
                             {tech}
                           </span>
                         ))}
                       </div>
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
