import cn from 'classnames';
import { ReactNode } from 'react';

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};
export const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className={cn('border-b border-b-slate-200 w-full pb-5 mb-6', props.className)}>
      {props.children}
    </div>
  );
};
type WhiteCardProps = {
  children: ReactNode;
  className?: string;
}
export const WhiteCard = ({ children, className }: WhiteCardProps) => {
  return (
    <div className={cn('bg-white rounded-lg py-4 px-6', className)}>
      {children}
    </div>
  )
}
