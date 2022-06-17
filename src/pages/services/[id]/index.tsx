import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import servicesService from 'api/services/services';
import useFetch from 'common/hooks/useFetch';
import { useSelector } from 'common/store/hooks';
import { selectLocation } from 'common/slices/location';
import usePagination from 'common/hooks/usePagination';
import Filter from 'templates/Filter';
import WorkerCard, { WorkerCardProps } from 'templates/WorkerCard';
import { parseWorkerSummaryToCard } from 'templates/WorkerCard/utils';
import Grid from 'components/Grid';
import Title from 'components/Title';
import Pagination from 'components/Pagination';
import Skeleton from 'components/Skeleton';
import FilterContent, { FilterValues } from './Filter';

const ServiceById = () => {
  const { page, handlePageChange } = usePagination();
  const location = useSelector(selectLocation);
  const [filter, setFilter] = useState<FilterValues>({
    orderBy: '',
  });
  const [workersList, setWorkersList] = useState<{
    workers: WorkerCardProps[];
    hasNext: boolean;
    total: number;
  }>();
  const router = useRouter();
  const { request: searchWorkers, loading } = useFetch(
    servicesService.searchWorkers,
  );

  useEffect(() => {
    let params = {
      page,
      ...filter,
    };
    searchWorkers(String(router.query.id), params).then(response => {
      const resultWorkers = parseWorkerSummaryToCard(response.workers);
      setWorkersList({ ...response, workers: resultWorkers });
    });
  }, [router.query.id, searchWorkers, location.id, filter, page]);

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Title title={`Serviço escolhido: ${router.query.serviceName}`} />
        </Grid>

        <Grid container item xs={6} justifyContent="flex-end">
          <Filter
            content={FilterContent}
            filter={filter}
            setFilter={setFilter}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} marginTop={1} flexDirection="row">
        <Skeleton
          ready={!loading}
          count={5}
          spacing={4}
          SkeletonItem={{ width: 30, height: 40, variant: 'rectangular' }}
        >
          {workersList?.workers.map(worker => (
            <Grid container item key={worker.id} xs="auto">
              <WorkerCard {...worker} />
            </Grid>
          ))}
        </Skeleton>
      </Grid>

      <Grid container justifyContent="center" marginTop={3}>
        <Pagination
          total={workersList?.total}
          page={page}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default ServiceById;
