// import { parseParams } from '../utils';
import { prepareListParams } from 'api/util';
import { baseApi } from '../apis';

export const servicesEndpoints = {
  listMostSearched: '/services/most-searched',
  list: '/services',
  search: (service: string) => `/services?search=${service}`,
  searchWorkers: (id: string) => `/services/${id}`,
};

const servicesService = {
  listMostSearched: () =>
    baseApi.get<Service[], Service[]>(servicesEndpoints.listMostSearched),
  search: (value: string) =>
    baseApi.get<Service[], Service[]>(servicesEndpoints.search(value)),
  list: (params: ListParams) =>
    baseApi.get<ServiceList, ServiceList>(servicesEndpoints.list, {
      params: prepareListParams(params),
    }),
  // searchWorkers: (id, params) =>
  //   baseApi.get(servicesEndpoints.searchWorkers(id), {
  //     needLocation: true,
  //     params: parseParams(params),
  //   }),
};

export default servicesService;
