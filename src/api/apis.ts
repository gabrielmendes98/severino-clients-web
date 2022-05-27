import createApi from './config/createApi';

const baseApi = createApi(process.env.NEXT_PUBLIC_BASE_API_URL || '');

export { baseApi };
