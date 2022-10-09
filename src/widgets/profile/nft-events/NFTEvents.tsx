import { H2, Empty } from 'src/shared/ui';
import { NftCard } from 'src/widgets/profile/nft-events/NFTCard';
import { BattlePass } from 'src/widgets/profile/nft-events/BattlePass';
import { useGate, useStore } from 'effector-react';
import { NftModel } from 'src/entities/nft';

type BlockHeaderProps = {
  title: string;
};
export const BlockHeader = (props: BlockHeaderProps) => {
  return (
    <div className="w-full mb-6 flex justify-between">
      <H2>Мои NFT</H2>
    </div>
  );
};

type NftEventsProps = {};
export const NftEvents = (props: NftEventsProps) => {
  useGate(NftModel.gate);
  const nftList = useStore(NftModel.state$);

  return (
    <div className="w-full">
      <div className="mb-8">
        <BattlePass />
      </div>

      <div className="mb-8">
        <BlockHeader title="Мои NFT" />

        {!nftList.length && <Empty text="У вас еще нет NFT :(" />}

        {!!nftList.length && <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            nftList.map((nft, idx) =>
              <NftCard key={idx} title={nft.name} img={nft.imageUrl} icon="/nft/matic.svg" price={`${nft.maticPrice} MATIC`}/>)
          }
        </div>}
      </div>
    </div>
  );
};
