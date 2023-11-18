import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

// import {
//   GetMeQueryResponse,
//   GetUsersInfiniteArgs,
//   GetUsersListArgs,
//   GetUsersResponse,
//   // QUERY_TYPE_IMPORTS
// } from './auth.types';

export const productQueries = {
  getProducts: (client: AxiosInstance) => async () => {
    return (await client.get(`/products`)).data;
  },
  // QUERY_FUNCTIONS_SETUP
};
