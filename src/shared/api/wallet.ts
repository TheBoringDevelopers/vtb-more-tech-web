import axios from 'axios';
import { API_URL, USER_ID } from 'src/shared/consts/api';

export type CoinsInfo = {
  coinsAmount: number;
  maticAmount: number;
}

export const transferRuble = (toUserId: string, amount: string) =>
  axios({
    method: 'POST',
    url: `${API_URL}/transfer/ruble`,
    params: {
      toUserId,
      userId: 1,
      amount
    }
  })


export const transferMatic = (toUserId: string, amount: string) =>
  axios({
    method: 'POST',
    url: `${API_URL}/transfer/matic`,
    params: {
      toUserId,
      userId: 1,
      amount
    }
  })


export const getCoins = () =>
  axios
    .get(`${API_URL}/wallet/coin`, { params: { userId: USER_ID } })
    .then(data => data.data) as Promise<any>;

