import { Card } from 'src/shared/ui';
import { FoodCard } from 'src/widgets/market/FoodCard';

type FoodSectionProps = {

};
export const FoodSection = (props: FoodSectionProps) => {
  return (
    <div>
      <Card className="mb-8">
        <h2 className="font-[600] text-lg">Получай донат едой, дари еду друзьям <br/> и коллегам, разыгрывай еду!</h2>
      </Card>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
        <FoodCard id={'1'} img="/nft/nft-1.png" count="4.8" title="Frankie Brooklyn Pizza" />
      </div>
    </div>
  );
};
