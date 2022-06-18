import { DEFAULT_LIST_COUNT } from 'common/constants';
import { store } from 'common/store/store';

export const prepareListParams = (params: ListParams) => ({
  ...params,
  count: params.count || DEFAULT_LIST_COUNT,
  page: Number(params.page) - 1,
});

export const addLocationParam = <T>(params: T) => ({
  ...params,
  location: store?.getState().location.id,
});
