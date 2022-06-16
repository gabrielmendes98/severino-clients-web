import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import servicesService from 'api/services/services';
import useFetch from 'common/hooks/useFetch';
import { useSelector } from 'common/store/hooks';
import { selectLocation } from 'common/slices/location';
import Filter from 'templates/Filter';
import WorkerCard, { WorkerCardProps } from 'templates/WorkerCard';
import { parseWorkerSummaryToCard } from 'templates/WorkerCard/utils';
import Grid from 'components/Grid';
import Title from 'components/Title';
import FilterContent, { FilterValues } from './Filter';

const ServiceById = () => {
  const location = useSelector(selectLocation);
  const [filter, setFilter] = useState<FilterValues>({
    orderBy: '',
  });
  const [workers, setWorkers] = useState<WorkerCardProps[]>();
  const router = useRouter();
  const { request: searchWorkers, loading } = useFetch(
    servicesService.searchWorkers,
  );

  useEffect(() => {
    let params = {
      page: 0,
      ...filter,
    };
    searchWorkers(String(router.query.id), params)
      .then(parseWorkerSummaryToCard)
      .then(setWorkers);
  }, [router.query.id, searchWorkers, location.id, filter]);

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
        {/* <Skeleton
          ready={!loadingList}
          count={18}
          spacing={4}
          SkeletonItem={{ width: 14, height: 14, variant: 'rectangular' }}
        > */}
        {workers?.map(worker => (
          <Grid container item key={worker.id} xs="auto">
            <WorkerCard {...worker} />
          </Grid>
        ))}
        {/* </Skeleton> */}
      </Grid>
    </Grid>
  );
};

export default ServiceById;
