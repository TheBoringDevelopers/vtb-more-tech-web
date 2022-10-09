import cn from 'classnames';
import { Like } from 'src/features/like';

type ArticleCardProps = {
  title: string;
  bg: string;
  likeCount: number;
  isLiked: boolean;
};

/*
background: ;
backdrop-filter: blur(28px);
* */

export const ArticleCard = ({ title, bg, likeCount, isLiked }: ArticleCardProps) => {
  return (
    <div className={cn('w-[316px] flex-shrink-0 bg-cover bg-no-repeat bg-bottom relative', bg)}>
      <div className="mb-[154px] w-fit p-[30px] ml-auto">
        <Like type="blue" count={likeCount} isLiked={isLiked} />
      </div>
      <div className="p-[30px] bg-[rgba(0,77,247,0.4)] backdrop-blur-[28px]">
        <p className="text-white font-bold font-[18px] leading-130">{title}</p>
      </div>
    </div>
  );
};

type ArticleListProps = {
};

export const ArticleList = (props: ArticleListProps) => {
  return (
    <div className="snap-y flex gap-6 overflow-x-auto w-full">
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
      <ArticleCard title="Интересные решения от участинков хакатона" bg="bg-[url('images/phone.png')]" isLiked={false} likeCount={235} />
    </div>
  );
};
