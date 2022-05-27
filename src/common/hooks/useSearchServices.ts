import { useState } from 'react';
import servicesService from 'api/services/services';
import { parseToSelect } from 'common/utils/parsers';

const useSearchServices = () => {
  const [searchedServices, setSearchedServices] = useState<SelectOptions>([]);
  const [loading, setLoading] = useState(false);

  const searchServices = (serviceName: string) => {
    setLoading(true);
    if (serviceName) {
      servicesService
        .search(serviceName)
        .then(response => parseToSelect(response, 'serviceName', 'serviceId'))
        .then(setSearchedServices)
        .then(() => setLoading(false));
    } else {
      setSearchedServices([]);
      setLoading(false);
    }
  };

  return {
    searchedServices,
    loading,
    searchServices,
  };
};

export default useSearchServices;
