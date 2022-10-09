import { H5 } from 'src/shared/ui';
import { Indicator, Root } from '@radix-ui/react-progress';
import { Check } from 'react-feather';


type NftCardProps = {
  img: string;
  title: string;
  price: string;
  icon: string;
};

export const NftCard = (props: NftCardProps) => {
  return (
    <div className="bg-[#F8F8F8] rounded-xl p-2.5">
      <img className="rounded-xl" height={237} src={props.img} />
      <div>
        <H5 className="my-5">{props.title}</H5>
        <div className="flex items-center gap-1.5 border-t border-t-gray-300/20 pt-3 pb-3">
          <img src={props.icon} />
          <span className="text-slate-400 text-xs font-semibold">{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export const WhiteNftCard = (props: NftCardProps) => {
  return (
    <div className="bg-white drop-shadow rounded-md w-[184px] p-2.5">
      <img className="rounded-xl" height={237} src={props.img} />
      <div>
        <H5 className="my-5">{props.title}</H5>
        <div className="flex items-center gap-1.5 border-t border-t-gray-300/20 pt-3 pb-3">
          <img src={props.icon} />
          <span className="text-slate-400 text-xs font-semibold">{props.price}</span>
        </div>
      </div>
    </div>
  );
};

type ProgressType = {
  value: number;
}

export const Progress = (props: ProgressType) => {
  return (
    <Root className="relative overflow-hidden rounded-md bg-[#F8F8F8] h-6 flex items-center" value={props.value}>
      <Indicator className="absolute bg-green-300 w-full h-full" style={{ transform: `translateX(-${100 - props.value}%)` }} />
      <div className="z-1 relative mx-auto">
        {props.value === 100 && <Check className="stroke-white" />}
        {props.value !== 100 && <div className="text-sm font-bold">{props.value}</div>}
      </div>
    </Root>
  );
};
