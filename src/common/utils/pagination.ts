import { ParsedUrlQuery } from 'querystring';

interface Query extends ParsedUrlQuery {
  page: string;
  orderBy: string;
}

export const getPaginationFromQuery = (query: ParsedUrlQuery) => {
  const { page = 1, orderBy = '' } = query as Query;

  return {
    ...query,
    page,
    orderBy,
  };
};
