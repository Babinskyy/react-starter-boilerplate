import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

import { GetProducts } from './products.types';

export const productQueries = {
  getProducts:
    (client: AxiosInstance) =>
    async ({
      limit = undefined,
      page = undefined,
      promo = undefined,
      active = undefined,
      search = undefined,
    }: GetProducts) => {
      const queryParams = stringify({ limit, page, promo, active, search }, { addQueryPrefix: true });
      return (await client.get(`/products/${queryParams}`)).data;
    },
};
