import { AnimateIn } from '../AnimateIn/AnimateIn';

export const SectionHeading = ({ title, description, badge }: any) => (
  <AnimateIn className="mb-16 md:mb-24 flex flex-col items-start">
    {badge && (
      <div className="inline-block px-4 py-2 rounded-full glass-panel text-xs font-bold tracking-widest uppercase text-text-muted mb-6">
        {badge}
      </div>
    )}
    <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-white">{title}</h2>
    {description && <p className="text-lg md:text-xl text-text-muted max-w-[600px] leading-relaxed font-light">{description}</p>}
  </AnimateIn>
);
