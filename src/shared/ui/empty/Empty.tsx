import { Package } from 'react-feather';

type EmptyProps = {
  text: string
};
export const Empty = (props: EmptyProps) => {
  return (
    <div className="rounded-[10px] border-2 border-solid border-gray-400/40 p-4 w-full flex flex-col items-center justify-center gap-4">
      <Package className="stroke-slate-400" size={40} />
      <span className="text-slate-400">{props.text}</span>
    </div>
  );
};
