import { H3 } from 'src/shared/ui';
import { Link } from 'react-router-dom';

type FoodCardProps = {
  title: string;
  img: string;
  id: string;
  count: string;
};

export const FoodCard = (props: FoodCardProps) => {
  return (
    <Link to={`/market/${props.id}`} className="bg-[#F8F8F8] rounded-xl p-2.5">
      <img className="rounded-xl object-none w-full h-[223px]"  src={props.img} />
      <div>
        <H3 className="my-1.5">{props.title}</H3>
        <span className="text-xs font-semibold text-slate-400">Оценка: {props.count}</span>
      </div>
    </Link>
  );
};
