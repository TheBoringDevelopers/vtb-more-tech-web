import { HeartIcon } from 'src/shared/icons';
import { SmallChip } from 'src/shared/ui';

type LikeTypes = 'blue' | 'white'

type LikeProps = {
  count: number;
  type?: LikeTypes;
  isLiked?: boolean;
}

const LIKE_STYLES: Record<LikeTypes, any> = {
  blue: {
    bg: 'bg-[#0047FF] border-[#0047FF]',
    icon: 'stroke-white',
    text: 'text-white',
  },
  white: {
    bg: '',
    icon: '',
    text: '',
  },
}

export const Like = ({ count, isLiked, type = 'white' }: LikeProps) => (
  <SmallChip isPointer className={LIKE_STYLES[type].bg}>
    <HeartIcon className={LIKE_STYLES[type].icon}/> <span className={'text-white'}>{count}</span>
  </SmallChip>
)
