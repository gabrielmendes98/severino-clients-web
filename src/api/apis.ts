import createApi from './config/createApi';

export const baseApi = createApi(process.env.NEXT_PUBLIC_BASE_API_URL || '');
