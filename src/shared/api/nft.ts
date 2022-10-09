import axios from 'axios';
import { API_URL, USER_ID } from 'src/shared/consts/api';
import { ProductType } from 'src/shared/types';

export const getNfts = () => axios({
  method: 'GET',
  url: `${API_URL}/wallet/nft`,
  params: {
    userId: USER_ID,
  }
}).then(data => data.data as ProductType[]);
