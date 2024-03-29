import { addLocationParam, prepareListParams } from 'api/util';
import { baseApi } from '../apis';

export const servicesEndpoints = {
  listMostSearched: '/services/most-searched',
  list: '/services',
  search: (service: string) => `/services?search=${service}`,
  searchWorkers: (serviceId: string) => `/services/${serviceId}`,
};

const servicesService = {
  listMostSearched: () =>
    baseApi.get<Service[], Service[]>(servicesEndpoints.listMostSearched),
  search: (service: string) =>
    baseApi.get<Service[], Service[]>(servicesEndpoints.search(service)),
  list: (params: ListParams) =>
    baseApi.get<ServiceList, ServiceList>(servicesEndpoints.list, {
      params: prepareListParams(params),
    }),
  searchWorkers: (serviceId: string, params: ListParams) =>
    baseApi.get<WorkerSummaryList, WorkerSummaryList>(
      servicesEndpoints.searchWorkers(serviceId),
      {
        params: addLocationParam(prepareListParams(params)),
      },
    ),
};

export default servicesService;
