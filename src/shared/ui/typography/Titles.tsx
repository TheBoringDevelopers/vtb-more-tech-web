import cn from 'classnames';

export const H2 = ({ children, className }: any) => <h2 className={cn(className, 'font-semibold text-2xl leading-[130%]]')}>{children}</h2>

export const H3 = ({ children, className }: any) => <h3
  className={cn(className, 'font-semibold text-[18px] font-[700] leading-[130%]]')}>{children}</h3>

export const H4 = ({ children, className }: any) => <h4
  className={cn(className, 'font-semibold font-[700] leading-[130%]]')}>{children}</h4>

export const H5 = ({ children, className }: any) => <h5
  className={cn(className, 'font-sm font-semibold font-[700] leading-[130%]]')}>{children}</h5>
