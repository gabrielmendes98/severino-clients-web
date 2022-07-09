export const mountApiUrl = (path: string) =>
  `${process.env.REACT_APP_API_URL}${path}`;
export const mountIbgeApiUrl = (path: string) =>
  `${process.env.REACT_APP_IBGE_API_URL}${path}`;
