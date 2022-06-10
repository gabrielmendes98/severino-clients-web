import { baseApi } from '../apis';

type CityName = string;
type Coords = { latitude: number; longitude: number };

export const locationsEndpoints = {
  search: (cityName: CityName) => `/locations/cities/${cityName}`,
  reverseGeocoding: '/locations/reverse-geocoding',
};

const locationsService = {
  search: (cityName: CityName) =>
    baseApi.get<SeverinoLocation[], SeverinoLocation[]>(
      locationsEndpoints.search(cityName),
    ),
  reverseGeocoding: (coords: Coords) =>
    baseApi.get<SeverinoLocation, SeverinoLocation>(
      locationsEndpoints.reverseGeocoding,
      { params: coords },
    ),
};

export default locationsService;
