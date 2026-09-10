import re

with open('src/app/work/page.tsx', 'r') as f:
    content = f.read()

if "import Image from 'next/image';" not in content:
    content = content.replace("import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';", "import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';\nimport Image from 'next/image';")

hero_find = '''<section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
          <Container className="relative z-10">'''
hero_replace = '''<section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative min-h-[50vh] flex flex-col justify-center">
          <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop" alt="Work Background" fill className="object-cover opacity-10 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
          <Container className="relative z-10">'''
content = content.replace(hero_find, hero_replace)

# Create an array of images in the file, then map over it
array_replace_find = '{[1, 2, 3, 4].map((item, i) => ('
array_replace_content = '''{[
                { title: "Fintech Dashboard", tags: "Web App • UI/UX • React", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
                { title: "E-Commerce Storefront", tags: "E-commerce • Next.js • Stripe", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
                { title: "SaaS Marketing Site", tags: "Web Design • Framer Motion", img: "https://images.unsplash.com/photo-1481481833547-5d74f26b52a4?q=80&w=2081&auto=format&fit=crop" },
                { title: "Mobile Banking App", tags: "React Native • FinTech", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" }
              ].map((item, i) => ('''
content = content.replace(array_replace_find, array_replace_content)

item_find = '''<AnimateIn key={item} delay={i * 0.1}>
                  <div className="cursor-pointer group">
                    <div className="glass-panel rounded-[2rem] h-[350px] sm:h-[450px] mb-8 overflow-hidden relative flex items-center justify-center bg-white/[0.02]">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                       <span className="text-white/20 font-outfit text-4xl group-hover:scale-110 transition-transform duration-700">Project {item} Visual</span>
                    </div>
                    <h3 className="font-outfit text-3xl font-medium mb-3 text-white group-hover:text-text-muted transition-colors">Digital Platform {item}</h3>
                    <p className="text-text-muted font-light">Web Development • UI/UX Design • React</p>
                  </div>
                </AnimateIn>'''
item_replace = '''<AnimateIn key={i} delay={i * 0.1}>
                  <div className="cursor-pointer group">
                    <div className="glass-panel rounded-[2rem] h-[350px] sm:h-[450px] mb-8 overflow-hidden relative flex items-center justify-center bg-white/[0.02] border-white/10 group-hover:border-white/30 transition-colors">
                       <Image src={item.img} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                    </div>
                    <h3 className="font-outfit text-3xl font-medium mb-3 text-white transition-colors">{item.title}</h3>
                    <p className="text-text-muted font-light">{item.tags}</p>
                  </div>
                </AnimateIn>'''
content = content.replace(item_find, item_replace)

with open('src/app/work/page.tsx', 'w') as f:
    f.write(content)
