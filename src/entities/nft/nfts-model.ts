import { createEffect, createStore, sample } from 'effector';
import { getNfts } from 'src/shared/api/nft';
import { createGate } from 'effector-react';
import { ProductType } from 'src/shared/types';

const fetchNft = createEffect(() => getNfts());
const gate = createGate();
const state$ = createStore([] as ProductType[])

state$
  .on(fetchNft.done, (_, { result }) => result)
  .reset(gate.close)

sample({
  clock: gate.open,
  target: fetchNft,
})

export const NftModel = {
  gate,
  state$,
}
