import os

files = {
    "src/styles/globals.css": """@import "tailwindcss";

@theme {
  --color-bg-dark: #050505;
  --color-bg-card: rgba(255, 255, 255, 0.03);
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.15);
  --color-text-main: #FFFFFF;
  --color-text-muted: #A3A3A3;
  --color-accent: #FFFFFF;

  --font-inter: var(--font-inter), sans-serif;
  --font-outfit: var(--font-outfit), sans-serif;
}

body {
  background-color: var(--color-bg-dark);
  color: var(--color-text-main);
  font-family: var(--font-inter);
  -webkit-font-smoothing: antialiased;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.text-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #A3A3A3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
""",
    "src/app/layout.tsx": """import { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'Craftovo | Digital Studio',
  description: 'A modern digital agency crafting exceptional web experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-inter bg-bg-dark text-text-main selection:bg-white selection:text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
""",
    "src/components/common/AnimateIn/AnimateIn.tsx": """'use client';
import { motion } from 'motion/react';
export const AnimateIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);
""",
    "src/components/common/Navbar/Navbar.tsx": """'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className={`pointer-events-auto w-full max-w-[1280px] rounded-full transition-all duration-500 flex items-center justify-between px-6 py-4 ${scrolled ? 'glass-panel shadow-2xl shadow-black/50 py-3' : 'bg-transparent'}`}>
        <Link href="/" className="font-outfit font-bold text-xl tracking-tight flex items-center gap-3 text-white group">
          <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center text-xs font-black group-hover:scale-110 transition-transform">C</span>
          Craftovo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Services', 'Work', 'Gigs', 'About'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-text-muted hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 inline-block">
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:opacity-70 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute top-24 left-4 right-4 glass-panel rounded-3xl p-6 flex flex-col gap-4 pointer-events-auto md:hidden shadow-2xl"
          >
            {['Services', 'Work', 'Gigs', 'About', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-outfit font-medium text-white border-b border-white/10 pb-4 pt-2 last:border-0 hover:text-text-muted transition-colors">
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
""",
    "src/components/common/Button/Button.tsx": """import Link from 'next/link';

export const Button = ({ children, href, variant = 'primary', className = '' }: any) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide";
  const primaryClasses = "bg-white text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]";
  const secondaryClasses = "glass-panel text-white hover:bg-white/10 hover:border-white/30";
  
  const finalClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return <Link href={href} className={finalClasses}>{children}</Link>;
  }
  return <button className={finalClasses}>{children}</button>;
};
""",
    "src/components/common/Card/Card.tsx": """export const Card = ({ children, className = '' }: any) => (
  <div className={`glass-panel rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);
""",
    "src/components/common/SectionHeading/SectionHeading.tsx": """import { AnimateIn } from '../AnimateIn/AnimateIn';

export const SectionHeading = ({ title, description, badge }: any) => (
  <AnimateIn className="mb-16 md:mb-24 flex flex-col items-start">
    {badge && (
      <div className="inline-block px-4 py-2 rounded-full glass-panel text-xs font-bold tracking-widest uppercase text-text-muted mb-6">
        {badge}
      </div>
    )}
    <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-white">{title}</h2>
    {description && <p className="text-lg md:text-xl text-text-muted max-w-[600px] leading-relaxed font-light">{description}</p>}
  </AnimateIn>
);
""",
    "src/components/common/CTASection/CTASection.tsx": """import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { AnimateIn } from '../AnimateIn/AnimateIn';

export const CTASection = () => (
  <section className="py-24 md:py-40 text-center relative overflow-hidden">
    {/* Subtle Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
    
    <Container className="relative z-10">
      <AnimateIn>
        <div className="glass-panel px-6 py-16 md:p-24 rounded-[3rem] flex flex-col items-center">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-outfit text-4xl md:text-6xl font-medium mb-6 text-white tracking-tight">Have an idea? <br/><span className="text-text-muted">Let's craft it.</span></h2>
            <p className="text-lg text-text-muted leading-relaxed font-light max-w-lg mx-auto">We partner with ambitious brands to design and build digital products that define the future.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button href="/contact" className="w-full sm:w-auto">Start a Project</Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">Explore Work</Button>
          </div>
        </div>
      </AnimateIn>
    </Container>
  </section>
);
""",
    "src/components/common/Footer/Footer.tsx": """import Link from 'next/link';

export const Footer = () => (
  <footer className="pt-24 pb-8 px-6 md:px-8 bg-bg-dark relative overflow-hidden mt-20">
    <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 relative z-10">
      <div className="md:col-span-2">
        <Link href="/" className="font-outfit font-bold text-2xl flex items-center gap-3 mb-6 text-white">
          <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-black">C</span>
          Craftovo
        </Link>
        <p className="text-text-muted text-lg max-w-sm font-light">Designing digital products that shape the future of business.</p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-medium mb-2 tracking-wide text-sm uppercase">Company</h4>
        {['Work', 'Services', 'Gigs', 'About'].map(item => (
          <Link key={item} href={`/${item.toLowerCase()}`} className="text-text-muted hover:text-white transition-colors font-light">{item}</Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-medium mb-2 tracking-wide text-sm uppercase">Connect</h4>
        <Link href="/contact" className="text-text-muted hover:text-white transition-colors font-light">Contact Us</Link>
        <a href="#" className="text-text-muted hover:text-white transition-colors font-light">Twitter</a>
        <a href="#" className="text-text-muted hover:text-white transition-colors font-light">LinkedIn</a>
      </div>
    </div>
    
    <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm gap-4 relative z-10 font-light">
      <p>&copy; {new Date().getFullYear()} Craftovo Studio. All rights reserved.</p>
      <div className="flex gap-6">
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.02] flex justify-center translate-y-1/3 overflow-hidden">
      <h1 className="font-outfit font-black text-[18vw] leading-none whitespace-nowrap tracking-tighter">CRAFTOVO</h1>
    </div>
  </footer>
);
""",
    "src/app/page.tsx": """import { Navbar } from '@/components/common/Navbar/Navbar';
import { Footer } from '@/components/common/Footer/Footer';
import { Container } from '@/components/common/Container/Container';
import { Button } from '@/components/common/Button/Button';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { Card } from '@/components/common/Card/Card';
import { CTASection } from '@/components/common/CTASection/CTASection';
import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
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
        <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="flex whitespace-nowrap opacity-50">
            <div className="flex gap-16 px-8 items-center font-outfit text-2xl md:text-3xl font-medium tracking-wide uppercase text-white">
              <span>Web Development</span> <span>•</span>
              <span>Product Design</span> <span>•</span>
              <span>Mobile Apps</span> <span>•</span>
              <span>E-commerce</span> <span>•</span>
              <span>Branding</span> <span>•</span>
              <span>Custom Software</span> <span>•</span>
              <span>Web Development</span> <span>•</span>
              <span>Product Design</span>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-32 md:py-48">
          <Container>
            <SectionHeading 
              badge="Our Expertise"
              title="Capabilities that drive growth." 
              description="From complex technical architecture to stunning user interfaces, our multi-disciplinary team delivers end-to-end solutions tailored to your unique challenges." 
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateIn delay={0.1} className="md:col-span-2">
                <Card className="h-full bg-white/[0.02] relative overflow-hidden group min-h-[400px] flex flex-col justify-end border-white/10 hover:border-white/30">
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                   </div>
                   <div className="relative z-10 pt-32">
                     <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">Web Applications</h3>
                     <p className="text-text-muted max-w-md font-light text-lg">Scalable, secure, and performant web apps built with modern React frameworks and robust scalable backends.</p>
                   </div>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.2} className="md:col-span-1">
                <Card className="h-full bg-gradient-to-br from-white/[0.06] to-transparent min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-outfit text-3xl font-medium mb-4 text-white">UI/UX Design</h3>
                  <p className="text-text-muted font-light">Intuitive interfaces and seamless user journeys designed to engage and convert your audience.</p>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.3} className="md:col-span-1">
                <Card className="h-full bg-gradient-to-tr from-white/[0.06] to-transparent min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-outfit text-3xl font-medium mb-4 text-white">Mobile Apps</h3>
                  <p className="text-text-muted font-light">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                </Card>
              </AnimateIn>
              <AnimateIn delay={0.4} className="md:col-span-2">
                 <Card className="h-full bg-white/[0.02] min-h-[400px] flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                   </div>
                  <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">E-commerce Platforms</h3>
                  <p className="text-text-muted max-w-md font-light text-lg">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                </Card>
              </AnimateIn>
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
"""
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
