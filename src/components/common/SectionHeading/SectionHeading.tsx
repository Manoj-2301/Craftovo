import { AnimateIn } from '../AnimateIn/AnimateIn';

export const SectionHeading = ({ title, description, badge, align = 'start' }: any) => {
  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <AnimateIn className={`mb-14 md:mb-20 flex flex-col ${alignClasses}`}>
      {badge && (
        <div className="flex items-center gap-2.5 mb-5 text-sm font-medium text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
          {badge}
        </div>
      )}
      <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-text-main">{title}</h2>
      {description && <p className={`text-lg md:text-xl text-text-muted max-w-[600px] leading-relaxed font-light ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p>}
    </AnimateIn>
  );
};
