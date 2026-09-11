import Link from 'next/link';

export const Card = ({ children, className = '', href }: any) => {
  const commonClasses = `glass-panel rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 hover:border-black/10 hover:shadow-2xl ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <div className={commonClasses}>
      {children}
    </div>
  );
};
