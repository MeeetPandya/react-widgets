import { ReactNode } from 'react';

interface WidgetCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const WidgetCard = ({ children, className, title }: WidgetCardProps) => {
  return (
    <div className='glass glass-hover rounded-2xl p-4 shadow-glass orbit-float border'>
      {title && <h3 className="text-lg font-semibold mb-2 text-neon-cyan">{title}</h3>}
      {children}
    </div>
  );
};
