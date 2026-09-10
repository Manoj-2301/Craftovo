import Link from 'next/link';

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
        {['Work', 'Services', 'Gigs', 'About', 'FAQ'].map(item => (
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
