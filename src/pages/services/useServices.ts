import { useCallback, useRef, useState } from 'react';
import servicesService from 'api/services/services';

const useServices = () => {
  const [servicesList, setServicesList] = useState<ServiceList>();
  const [loading, setLoading] = useState(false);
  const cache = useRef<ServiceList>();

  const searchServices = useCallback((serviceName?: string) => {
    setLoading(true);
    if (serviceName) {
      servicesService.search(serviceName).then(response => {
        setServicesList({ services: response, hasNext: false, total: 0 });
        setLoading(false);
      });
    } else {
      setServicesList(cache.current);
      setLoading(false);
    }
  }, []);

  const listServices = useCallback((params: ListParams) => {
    setLoading(true);
    servicesService.list(params).then(response => {
      setServicesList(response);
      cache.current = response;
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    searchServices,
    listServices,
    servicesList,
    loading,
  };
};

export default useServices;
