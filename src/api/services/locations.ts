import { baseApi } from '../apis';

export const locationsEndpoints = {
  search: (cityName: string) => `/locations/cities/${cityName}`,
};

const locationsService = {
  search: (cityName: string) =>
    baseApi.get<Location[], Location[]>(locationsEndpoints.search(cityName)),
};

export default locationsService;
