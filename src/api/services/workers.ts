import { prepareListParams } from 'api/util';
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
  favorite: (workerId: WorkerId) =>
    baseApi.post(workersEndpoints.favorites, { workerId }),
  listFavorites: () =>
    baseApi.get<WorkerSummary[], WorkerSummary[]>(workersEndpoints.favorites),
  getProfile: (workerId: WorkerId) =>
    baseApi.get<WorkerProfile, WorkerProfile>(
      workersEndpoints.profile(workerId),
    ),
  createReview: (data: WorkerReviewSubmition) =>
    baseApi.post<WorkerReviewSubmition, WorkerReviewSubmition>(
      workersEndpoints.reviews,
      data,
    ),
  listReviews: (workerId: string, params: ListParams) =>
    baseApi.get<WorkerReviewList, WorkerReviewList>(
      workersEndpoints.listReviews(workerId),
      {
        params: prepareListParams(params),
      },
    ),
};

export { workersEndpoints };
export default workersService;
