import { useCallback, useRef, useState } from 'react';
import servicesService from 'api/services/services';
import useFetch from 'common/hooks/useFetch';

const useServices = () => {
  const { request: search, loading: loadingSearch } = useFetch(
    servicesService.search,
  );
  const { request: list, loading: loadingList } = useFetch(
    servicesService.list,
  );
  const [servicesList, setServicesList] = useState<ServiceList>();
  const cache = useRef<ServiceList>();

  const searchServices = useCallback(
    (serviceName?: string) => {
      if (serviceName) {
        search(serviceName).then(response => {
          setServicesList({ services: response, hasNext: false, total: 0 });
        });
      } else {
        setServicesList(cache.current);
      }
    },
    [search],
  );

  const listServices = useCallback(
    (params: ListParams) => {
      list(params).then(response => {
        setServicesList(response);
        cache.current = response;
      });
    },
    [list],
  );

  return {
    searchServices,
    listServices,
    servicesList,
    loadingSearch,
    loadingList,
  };
};

export default useServices;
