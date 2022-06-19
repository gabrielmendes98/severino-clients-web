import axios, { AxiosRequestConfig } from 'axios';
import defaultsDeep from 'lodash.defaultsdeep';
import { store } from 'common/store/store';
import { handleError } from './interceptors';

const getConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: store?.getState().user.token
      ? `Bearer ${store.getState().user.token}`
      : '',
  },
  loader: true,
});

const createApi = (
  baseURL: string,
  config: AxiosRequestConfig<any> | undefined = {},
) => {
  const axiosApi = axios.create({
    baseURL,
    ...config,
  });

  const customRequest = (path: string, options: AxiosRequestConfig<any>) => {
    const mergedOptions = defaultsDeep(options, getConfig());

    return axiosApi(path, mergedOptions)
      .then(resp => (mergedOptions.respHeaders ? resp : resp.data))
      .catch(error => handleError(error, mergedOptions));
  };

  axiosApi.get = customRequest;
  axiosApi.post = (path, data, postConfig) =>
    customRequest(path, { data, method: 'post', ...postConfig });
  axiosApi.put = (path, data, postConfig) =>
    customRequest(path, { data, method: 'put', ...postConfig });
  axiosApi.delete = (path, options) =>
    customRequest(path, { method: 'delete', ...options });

  return axiosApi;
};

export default createApi;
