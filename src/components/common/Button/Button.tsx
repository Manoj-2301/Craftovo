import Link from 'next/link';

export const Button = ({ children, href, variant = 'primary', className = '' }: any) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm tracking-wide gap-2";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-600/20";
  const secondaryClasses = "bg-white border border-black/10 text-black hover:bg-[#F4F4F6] hover:border-black/20";
  
  const finalClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return <Link href={href} className={finalClasses}>{children}</Link>;
  }
  return <button className={finalClasses}>{children}</button>;
};
