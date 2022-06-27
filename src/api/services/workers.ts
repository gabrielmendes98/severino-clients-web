import { baseApi } from '../apis';

type WorkerId = string;

const workersEndpoints = {
  listRecent: '/workers/recent',
  favorites: '/favorites',
  profile: (workerId: WorkerId) => `/workers/${workerId}/profile`,
  reviews: '/reviews',
  listReviews: (workerId: WorkerId) => `/reviews/${workerId}`,
};

const workersService = {
  // listRecent: () => baseApi.get(workersEndpoints.listRecent),
  favorite: (workerId: WorkerId) =>
    baseApi.post(workersEndpoints.favorites, { workerId }),
  listFavorites: () =>
    baseApi.get<WorkerSummary[], WorkerSummary[]>(workersEndpoints.favorites),
  getProfile: (workerId: WorkerId) =>
    baseApi.get<WorkerProfile, WorkerProfile>(
      workersEndpoints.profile(workerId),
    ),
  // createReview: data => baseApi.post(workersEndpoints.reviews, { data }),
  // listReviews: (workerId, params) =>
  //   baseApi.get(workersEndpoints.listReviews(workerId), {
  //     params: parseParams(params),
  //   }),
};

export { workersEndpoints };
export default workersService;
