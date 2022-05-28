import { baseApi } from './apis';

export const parseParams = ({ sort, ...other }: { sort: string }) => {
  let params = {};

  if (sort) {
    params = { ...params, sort };
  }

  return { ...params, ...other };
};
