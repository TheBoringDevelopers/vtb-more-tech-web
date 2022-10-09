import cn from 'classnames';

type Props = {
  badge: string;
  src: string;
  isAvailable: boolean;
};
export const Achievement = (props: Props) => {
  return (
    <div className={cn('relative w-16', { 'opacity-40 mix-blend-luminosity	': !props.isAvailable })}>
      <img src={props.src}/>
      <div className="absolute right-0 bottom-0 bg-black text-white font-sm font-bold py-1 px-1.5 rounded-lg leading-130">
        {props.badge}
      </div>
    </div>
  );
};
