import { createEffect, createEvent, sample } from 'effector';
import { toast } from 'react-toastify';
import { ProductType } from 'src/shared/types';
import { fetchBuyNft } from 'src/shared/api/market';

const clickedOnBuy = createEvent<ProductType>();
const buyNft = createEffect((info: ProductType) => {
  return fetchBuyNft(info.uri, 'RUBLE')
});

buyNft.done.watch(() => {
  toast('Покупка прошла успешно')
})

buyNft.fail.watch(() => {
  toast('Что-то пошло не так', {
    type: 'error'
  })
})

sample({
  clock: clickedOnBuy,
  target: buyNft,
})

const loading$ = buyNft.pending;

export const BuyNftModel = {
  clickedOnBuy,
  loading$,
}
