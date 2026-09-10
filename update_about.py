import re

with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

if "import Image from 'next/image';" not in content:
    content = content.replace("import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';", "import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';\nimport Image from 'next/image';")

# Hero update
hero_find = '''<section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
          <Container className="relative z-10">'''
hero_replace = '''<section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative min-h-[60vh] flex flex-col justify-center">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Our Team" fill className="object-cover opacity-20 pointer-events-none mix-blend-luminosity" referrerPolicy="no-referrer" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent pointer-events-none"></div>
          <Container className="relative z-10">'''
content = content.replace(hero_find, hero_replace)

# Philosophy update
phil_find = '''<div className="glass-panel rounded-[2rem] p-12 md:p-24 border-white/10">'''
phil_replace = '''<div className="glass-panel rounded-[2rem] p-12 md:p-24 border-white/10 relative overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Our Office" fill className="object-cover opacity-10 pointer-events-none mix-blend-overlay" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent pointer-events-none"></div>
                    <div className="relative z-10">'''
phil_end = ''' treating every product as if it were our own.
                    </p>
                 </div>'''
phil_end_replace = ''' treating every product as if it were our own.
                    </p>
                    </div>
                 </div>'''
content = content.replace(phil_find, phil_replace).replace(phil_end, phil_end_replace)

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)
