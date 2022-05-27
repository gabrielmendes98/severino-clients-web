import { baseApi } from './apis';

const parseParams = ({ sort, ...other }: { sort: string }) => {
  let params = {};

  if (sort) {
    params = { ...params, sort };
  }

  return { ...params, ...other };
};

export { parseParams };
