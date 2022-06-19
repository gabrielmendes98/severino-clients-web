import { baseApi } from 'api/apis';

const usersEndpoints = {
  customers: '/customers',
  login: '/customers/session',
};

const usersService = {
  create: (data: SignUpData) =>
    baseApi.post<AuthResponse, AuthResponse>(usersEndpoints.customers, data),
  login: (data: LoginData) =>
    baseApi.post<AuthResponse, AuthResponse>(usersEndpoints.login, data),
  // update: data => baseApi.put(usersEndpoints.customers, { data }),
};

export { usersEndpoints };
export default usersService;
