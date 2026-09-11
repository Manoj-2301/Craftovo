import os

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

start_str = '<div className="grid grid-cols-1 md:grid-cols-3 gap-6">'
end_str = '</section>'
start_idx = content.find(start_str)
next_section = '{/* Performance & Compliance Section */}'
next_section_idx = content.find(next_section)
end_idx = content.rfind('</section>', start_idx, next_section_idx)

if start_idx != -1 and end_idx != -1:
    new_grid = '''<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimateIn delay={0.1}>
                <Card className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/40">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-sm shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">Web Applications</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Scalable, secure, and performant web apps built with modern React frameworks and robust scalable backends.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Web Applications" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F6] via-[#F4F4F6]/90 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <Card className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/40">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-sm shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">UI/UX Design</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Intuitive interfaces and seamless user journeys designed to engage and convert.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="UI/UX Design" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F6] via-[#F4F4F6]/90 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <Card className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/40">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-sm shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">Mobile Apps</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Native feeling cross-platform applications that put your brand right in your customers' pockets.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile Apps" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F6] via-[#F4F4F6]/90 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                 <Card className="h-full relative overflow-hidden group min-h-[450px] flex flex-col justify-between p-8 md:p-12 border-black/5 hover:border-black/15 bg-white/40">
                  <div className="flex justify-end w-full relative z-20">
                     <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-sm shrink-0">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     </div>
                  </div>
                  <div className="relative z-20 mt-auto pt-32 max-w-lg">
                    <h3 className="font-outfit text-4xl md:text-5xl font-medium mb-4 text-text-main leading-tight">E-commerce</h3>
                    <p className="text-text-muted font-light text-lg md:text-xl leading-relaxed">Custom digital storefronts and complex marketplace platforms engineered for global scale.</p>
                  </div>
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="E-commerce" fill className="object-cover grayscale mix-blend-multiply opacity-[0.25] group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F6] via-[#F4F4F6]/90 to-transparent"></div>
                  </div>
                </Card>
              </AnimateIn>
            </div>
          </Container>
        '''
    
    content = content[:start_idx] + new_grid + content[end_idx:]
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
else:
    print("Could not find start or end index.")

