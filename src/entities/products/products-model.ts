import { createEffect, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { getClothes, getUsual } from 'src/shared/api/market';


const fetchClothes = createEffect(() => getClothes())
const fetchUsual = createEffect(() => getUsual())
const gate = createGate();

sample({
  clock: gate.open,
  target: [fetchClothes, fetchUsual],
})

const clothes$ = restore(fetchClothes.done.map(({ result }) => result), []);
const usual$ = restore(fetchUsual.done.map(({ result } ) => result), [])

export const ProductsModel = {
  clothes$,
  usual$,
  gate,
}
