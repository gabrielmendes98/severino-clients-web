import { baseApi } from '../apis';

export const cookiesEndpoints = {
  consent: '/cookies/consent',
};

const cookiesService = {
  consent: () => baseApi.post(cookiesEndpoints.consent, {}),
};

export default cookiesService;
