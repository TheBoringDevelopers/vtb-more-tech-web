import axios from 'axios';

export const axiosBase = (method?: any, url?: any, data?: any, header?: any) => axios({
  method,
  url,
  data,
}).then(data => data.data);
