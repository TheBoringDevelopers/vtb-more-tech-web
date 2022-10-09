import { H3, H4, H5 } from 'src/shared/ui';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';

interface NftCardProps {
  title: string;
  price: any;
  img: string
  id: string;
}

export const ProductCard = (props: NftCardProps) => {
  return (
    <div className="drop-shadow-lg bg-white rounded-xl p-2.5">
      <div className="bg-[#F8F8F8] rounded-xl flex items-center justify-center py-6">
        <img className="rounded-xl object-scale-down w-[132px] h-[192px]"  src={props.img} />
      </div>

      <div>
        <H3 className="my-1.5">{props.title}</H3>
        <Link to={`/market/${props.id}`} className="group flex items-center justify-between pt-3 pb-3">
          <span className="text-blue-600 group-hover:text-blue-700 font-semibold">{props.price} ₽</span>
          <ChevronRight className="stroke-blue-600 group-hover:stroke-blue-700" />
        </Link>
      </div>
    </div>
  );
}
