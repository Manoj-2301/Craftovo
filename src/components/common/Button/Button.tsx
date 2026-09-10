import Link from 'next/link';

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
