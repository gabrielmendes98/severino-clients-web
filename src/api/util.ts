import { DEFAULT_LIST_COUNT } from 'common/constants';

export const prepareListParams = (params: ListParams) => ({
  ...params,
  count: params.count || DEFAULT_LIST_COUNT,
  page: params.page - 1,
});
