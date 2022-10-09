import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';

const LINK_COLORS = {
  white: 'text-white',
  blue: 'text-[#124CFA]',
  gray: 'text-[#C2C2C2]',
}
export const Link = ({ to, children, color = 'blue' }: any) =>
  // @ts-ignore
  <RouterLink className={cn('font-[500] font-[14px] leading-[110%]', LINK_COLORS[color])} to={to}>{children}</RouterLink>
