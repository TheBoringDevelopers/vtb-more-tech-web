import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode
};
export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="font-bold text-[#394DFF] bg-[#E1E0FF] px-3 py-1.5 rounded-[24px] text-[13px] leading-[110%]">
      {children}
    </button>
  );
};
