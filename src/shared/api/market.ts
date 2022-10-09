import axios from 'axios';
import { ProductType } from 'src/shared/types';

export const getClothes = () => axios({
  method: 'GET', url: 'https://wegoapp.ru/api/nft/clothes'}).then(data => data.data) as Promise<ProductType[]>

export const getUsual = () => axios({
  method: 'GET', url: 'https://wegoapp.ru/api/nft/usual'}).then(data => data.data) as Promise<ProductType[]>

export const getProduct = (uri: string) => axios({
  method: 'GET', url: `https://wegoapp.ru/api/nft/${uri}`}).then(data => data.data) as Promise<ProductType>


export const fetchBuyNft = (uri: string, currency: string) => axios({
  method: 'POST',
  url: `https://wegoapp.ru/api/nft/buy`,
  data: {
    uri,
    currency,
    userId: 1,
  },
}).then(data => data.data);

