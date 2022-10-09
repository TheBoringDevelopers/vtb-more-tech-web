import style from './BuyNftButton.module.css';
import React from 'react';
import { useStore } from 'effector-react';
import { ProductType } from 'src/shared/types';
import { BuyNftModel } from 'src/features/market';

type ButNftButtonProps = {
  info: ProductType;
};
export const BuyNftButton = (props: ButNftButtonProps) => {
  const loading = useStore(BuyNftModel.loading$);

  return (
    <button className={style.btnP} disabled={!props.info || loading} onClick={() => BuyNftModel.clickedOnBuy(props.info)}>
      Купить
    </button>
  );
};
