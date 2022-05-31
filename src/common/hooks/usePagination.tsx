import { useCallback, useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);

  const nextPage = useCallback(() => setPage(init => init + 1), []);
  const prevPage = useCallback(() => setPage(init => init - 1), []);

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [],
  );

  return {
    page,
    nextPage,
    prevPage,
    handlePageChange,
  };
};

export default usePagination;
