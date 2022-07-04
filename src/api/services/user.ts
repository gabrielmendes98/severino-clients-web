import { baseApi } from 'api/apis';

const usersEndpoints = {
  customers: '/customers',
  login: '/customers/session',
  oAuthLogin: '/customers/session/oauth',
};

const usersService = {
  create: (data: SignUpData) =>
    baseApi.post<AuthResponse, AuthResponse>(usersEndpoints.customers, data),
  login: (data: LoginData) =>
    baseApi.post<AuthResponse, AuthResponse>(usersEndpoints.login, data),
  changePassword: (data: ChangePasswordData) =>
    baseApi.put<User, User>(usersEndpoints.customers, data),
  oAuthLogin: (data: OAuthData) =>
    baseApi.post<AuthResponse, AuthResponse>(usersEndpoints.oAuthLogin, data),
};

export { usersEndpoints };
export default usersService;
