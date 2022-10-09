import { PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

export const Chip = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('px-2.5 py-3 rounded-[45px] border border-[#D4DDE3]', className)}>
    {children}
  </div>
)


type SmallProps = {
  className?: string;
  isPointer?: boolean;
  children: ReactNode;
};

export const SmallChip = ({ children, className, isPointer }: SmallProps) => {
  const style = cn(className,
    'flex items-center gap-[5px] py-[4px] pl-[6px] pr-[10px] border border-white rounded-[24px]',
    { 'cursor-pointer': isPointer }
  )


  return (
    <div className={style}>
      {children}
    </div>
  );
};
