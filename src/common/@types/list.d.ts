interface ListParams {
  orderBy?: string;
  count?: number;
  page: number | string;
  location?: string;
}

interface ListPagination {
  total: number;
  hasNext: boolean;
}
