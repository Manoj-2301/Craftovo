import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Add Image import
if "import Image from 'next/image';" not in content:
    content = content.replace("import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';", "import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';\nimport Image from 'next/image';")

# Hero update
hero_find = '<section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">'
hero_replace = '''<section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
          <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Hero Background" fill className="object-cover opacity-[0.07] pointer-events-none mix-blend-screen" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>'''
content = content.replace(hero_find, hero_replace)

# Card 1
c1_find = '''<Card className="h-full bg-white/[0.02] relative overflow-hidden group min-h-[400px] flex flex-col justify-end border-white/10 hover:border-white/30">
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5">'''
c1_replace = '''<Card className="h-full bg-white/[0.02] relative overflow-hidden group min-h-[400px] flex flex-col justify-end border-white/10 hover:border-white/30">
                   <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Web Applications" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                   <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5 z-10">'''
content = content.replace(c1_find, c1_replace)

# Card 2
c2_find = '''<Card className="h-full bg-gradient-to-br from-white/[0.06] to-transparent min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-outfit text-3xl font-medium mb-4 text-white">UI/UX Design</h3>'''
c2_replace = '''<Card className="h-full bg-gradient-to-br from-white/[0.06] to-transparent relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
                  <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="UI/UX Design" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-white">UI/UX Design</h3>'''
c2_end = '''<p className="text-text-muted font-light">Intuitive interfaces and seamless user journeys designed to engage and convert your audience.</p>
                </Card>'''
c2_end_replace = '''<p className="text-text-muted font-light">Intuitive interfaces and seamless user journeys designed to engage and convert your audience.</p>
                  </div>
                </Card>'''
content = content.replace(c2_find, c2_replace).replace(c2_end, c2_end_replace)

# Card 3
c3_find = '''<Card className="h-full bg-gradient-to-tr from-white/[0.06] to-transparent min-h-[400px] flex flex-col justify-end">
                  <h3 className="font-outfit text-3xl font-medium mb-4 text-white">Mobile Apps</h3>'''
c3_replace = '''<Card className="h-full bg-gradient-to-tr from-white/[0.06] to-transparent relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
                  <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile Apps" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl font-medium mb-4 text-white">Mobile Apps</h3>'''
c3_end = '''<p className="text-text-muted font-light">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                </Card>'''
c3_end_replace = '''<p className="text-text-muted font-light">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                  </div>
                </Card>'''
content = content.replace(c3_find, c3_replace).replace(c3_end, c3_end_replace)

# Card 4
c4_find = '''<Card className="h-full bg-white/[0.02] min-h-[400px] flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5">'''
c4_replace = '''<Card className="h-full bg-white/[0.02] min-h-[400px] flex flex-col justify-end relative overflow-hidden group border-white/10 hover:border-white/30">
                  <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="E-commerce Platforms" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none"></div>
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-white/5 z-10">'''
content = content.replace(c4_find, c4_replace)

# Card 4 content wrapper
c4_content_find = '''</div>
                  <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">E-commerce Platforms</h3>
                  <p className="text-text-muted max-w-md font-light text-lg">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                </Card>'''
c4_content_replace = '''</div>
                  <div className="relative z-10">
                    <h3 className="font-outfit text-3xl md:text-4xl font-medium mb-4 text-white">E-commerce Platforms</h3>
                    <p className="text-text-muted max-w-md font-light text-lg">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                  </div>
                </Card>'''
content = content.replace(c4_content_find, c4_content_replace)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
