// import { parseParams } from '../utils';
import { baseApi } from '../apis';

const servicesEndpoints = {
  listMostSearched: '/services/most-searched',
  search: (service: string) => `/services?search=${service}`,
  searchWorkers: (id: string) => `/services/${id}`,
};

const servicesService = {
  listMostSearched: () =>
    baseApi.get<Service[], Service[]>(servicesEndpoints.listMostSearched),
  // search: (value: string) =>
  //   baseApi.get(servicesEndpoints.search(value), { needLocation: true }),
  // searchWorkers: (id, params) =>
  //   baseApi.get(servicesEndpoints.searchWorkers(id), {
  //     needLocation: true,
  //     params: parseParams(params),
  //   }),
};

export { servicesEndpoints };
export default servicesService;
