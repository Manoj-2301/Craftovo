import Link from 'next/link';

export const Button = ({ children, href, variant = 'primary', className = '', ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium transition-all duration-300 text-sm gap-2";
  const primaryClasses = "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 shadow-[0_12px_28px_-14px_rgba(47,76,255,0.9)]";
  const secondaryClasses = "bg-white/70 border border-black/10 text-text-main hover:bg-white hover:border-black/25";

  const finalClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`;

  if (href) {
    return <Link href={href} className={finalClasses}>{children}</Link>;
  }
  return <button className={finalClasses} {...props}>{children}</button>;
};
