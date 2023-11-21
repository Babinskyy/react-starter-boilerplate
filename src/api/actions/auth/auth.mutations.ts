import { AxiosInstance } from 'axios';

import {
  LoginMutationArguments,
  LoginMutationResponse,
  // MUTATION_TYPE_IMPORTS
} from './auth.types';

export const authMutations = {
  loginMutation: (client: AxiosInstance) => async (body: LoginMutationArguments) => {
    return (await client.post<LoginMutationResponse>('/users/login', body)).data;
  },
  // MUTATION_FUNCTIONS_SETUP
};
