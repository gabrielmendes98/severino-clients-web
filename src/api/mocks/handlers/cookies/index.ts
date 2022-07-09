import { rest } from 'msw';
import { cookiesEndpoints } from 'api/services/cookies';
import { mountApiUrl } from '../../helpers';

const cookiesHandler = [
  // rest.get(mountApiUrl(photosRoutes.photos(':id')), (req, res, ctx) =>
  //   res(ctx.status(200), ctx.json(getPhotos)),
  // ),
  rest.post(mountApiUrl(cookiesEndpoints.consent), (req, res, ctx) =>
    res(ctx.status(200), ctx.json({})),
  ),
  // rest.delete(
  //   mountApiUrl(photosRoutes.photosId(':userId', ':photoId')),
  //   (req, res, ctx) => res(ctx.status(200), ctx.json({})),
  // ),
];

export default cookiesHandler;
