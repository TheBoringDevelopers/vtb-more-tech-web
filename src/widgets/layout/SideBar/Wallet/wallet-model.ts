import { createEffect, createStore, sample } from 'effector';
import { CoinsInfo, getCoins } from 'src/shared/api/wallet';
import { createGate } from 'effector-react';

const fetchCoins = createEffect(() => getCoins());
const store$ = createStore<CoinsInfo>({ coinsAmount: 0, maticAmount: 0 });
const gate = createGate();

store$
  .on(fetchCoins.done, (_, { result }) => result)
  .reset(gate.close);

sample({
  clock: gate.open,
  target: fetchCoins,
})

export const WalletModel = {
  state$: store$,
  gate,
}
