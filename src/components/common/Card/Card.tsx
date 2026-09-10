export const Card = ({ children, className = '' }: any) => (
  <div className={`glass-panel rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);
