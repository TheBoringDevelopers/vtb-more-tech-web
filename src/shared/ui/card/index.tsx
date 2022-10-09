import { PropsWithChildren } from 'react';
import cn from 'classnames';

export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('py-6 px-10 pr-[20px] bg-[#F9F9F9] rounded-[10px]', className)}>
    {children}
  </div>
)

export * from './WhiteCard';
