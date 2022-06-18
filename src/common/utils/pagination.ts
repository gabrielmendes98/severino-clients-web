import { ParsedUrlQuery } from 'querystring';

export const getPaginationFromQuery = (query: ParsedUrlQuery) => {
  const { page = 1, orderBy = '' } = query as { page: string; orderBy: string };

  return {
    page,
    orderBy,
  };
};
