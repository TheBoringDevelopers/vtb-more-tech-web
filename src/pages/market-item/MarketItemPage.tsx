import ProductInfo from 'src/widgets/market/ProductInfo';
import { useParams } from 'react-router-dom';
import { useGate } from 'effector-react';
import { ProductModel } from 'src/entities/product';

export const MarketItemPage = () => {
  const params = useParams();
  useGate(ProductModel.gate, params.id!)

  return (
    <ProductInfo />
  );
};
