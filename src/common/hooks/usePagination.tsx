import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const usePagination = (reflectOnUrl: boolean = false) => {
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page ? Number(router.query.page) : 1,
  );

  const nextPage = useCallback(() => setPage(init => init + 1), []);
  const prevPage = useCallback(() => setPage(init => init - 1), []);

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      if (reflectOnUrl) {
        router.push(
          {
            pathname: router.pathname,
            query: {
              ...router.query,
              page: value,
            },
          },
          {},
          { shallow: true },
        );
      }
    },
    [reflectOnUrl, router],
  );

  return {
    page,
    nextPage,
    prevPage,
    handlePageChange,
  };
};

export default usePagination;
