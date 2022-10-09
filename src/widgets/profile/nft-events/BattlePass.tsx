import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './BattlePass.css';
import { ArrowLeft, ArrowRight, Calendar, Star } from 'react-feather';
import { NftCard, Progress, WhiteNftCard } from 'src/widgets/profile/nft-events/NFTCard';
import cn from 'classnames';

const NextArrow = (props: any) =>
  <button
    onClick={props.onClick}
    className={cn('w-6 h-6 rounded-full bg-slate-300/40 hover:bg-slate-300 flex items-center justify-center', props.className)}
  ><
    ArrowRight size={14}/>
  </button>
const PreArrow = (props: any) =>
  <button
    onClick={props.onClick}
    className={cn('w-6 h-6 rounded-full bg-slate-300/40 hover:bg-slate-300 flex items-center justify-center', props.className)
    }>
    <ArrowLeft size={14}/>
  </button>

type BattlePassProps = {};
export const BattlePass = (props: BattlePassProps) => {
  const settings = {
    dots: true,
    infinite: false,
    customPaging: (i: number) => (
      <div className="py-2 px-3">
        {i + 1}
      </div>
    ),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>,
    variableWidth: true,
  };

  return (
    <div className="drop-shadow-lg bg-white">
      <div className="flex justify-between py-8 px-6">
        <div className="flex font-bold items-center gap-2 text-sm">
          <Star size={14}/> NFT Событие месяца
        </div>

        <div className="flex font-bold items-center gap-2 text-sm">
          <Calendar size={14}/> 21 день осталось
        </div>
      </div>

      <div>
        <Slider arrows {...settings}>
          <div className="p-2 space-y-2">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={100}/>
          </div>

          <div className="p-2 space-y-2 ">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={55}/>
          </div>

          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>

          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>

          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>


          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>


          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>


          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>

          <div className="p-2 space-y-2 opacity-40 mix-blend-luminosity">
            <WhiteNftCard title="Cybergirl #4534" img="/nft/nft-1.png" icon="/nft/matic.svg" price="0.435 MATIC"/>
            <Progress value={0}/>
          </div>


        </Slider>
      </div>
    </div>
  );
};
