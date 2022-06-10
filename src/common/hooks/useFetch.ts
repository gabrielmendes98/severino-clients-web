import { useState } from 'react';

const useFetch = <T, R>(request: (...args: T[]) => Promise<R>) => {
  const [loading, setLoading] = useState(false);

  const enhancedRequest = async (...args: T[]) => {
    setLoading(true);
    return request(...args).then(response => {
      setLoading(false);
      return response;
    });
  };

  return {
    request: enhancedRequest,
    loading,
  };
};

export default useFetch;
