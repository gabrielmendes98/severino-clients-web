import { useCallback, useState } from 'react';

const useFetch = <T, R>(request: (...args: T[]) => Promise<R>) => {
  const [loading, setLoading] = useState(false);

  const enhancedRequest = useCallback(async (...args: T[]) => {
    setLoading(true);
    return request(...args).then(response => {
      setLoading(false);
      return response;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    request: enhancedRequest,
    loading,
  };
};

export default useFetch;
