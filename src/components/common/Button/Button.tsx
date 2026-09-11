import Link from 'next/link';

export const Button = ({ children, href, variant = 'primary', className = '' }: any) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide";
  const primaryClasses = "bg-black text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]";
  const secondaryClasses = "glass-panel text-black hover:bg-black/5 hover:border-black/20";
  
  const finalClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return <Link href={href} className={finalClasses}>{children}</Link>;
  }
  return <button className={finalClasses}>{children}</button>;
};
