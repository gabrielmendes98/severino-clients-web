import { baseApi } from '../apis';

export const cookiesEndpoints = {
  getActivePolicy: '/cookies',
  consent: '/cookies/consents',
};

const cookiesService = {
  consent: () => baseApi.post(cookiesEndpoints.consent, {}),
  getActivePolicy: () =>
    baseApi.get<CookiePolicy, CookiePolicy>(cookiesEndpoints.getActivePolicy),
};

export default cookiesService;
