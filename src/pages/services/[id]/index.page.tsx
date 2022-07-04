import { useRouter } from 'next/router';
import { useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import servicesService from 'api/services/services';
import useFetch from 'common/hooks/useFetch';
import { useSelector } from 'common/store/hooks';
import { selectLocation } from 'common/slices/location';
import usePagination from 'common/hooks/usePagination';
import { wrapper } from 'common/store/store';
import useEffectAfterFirstRender from 'common/hooks/useEffectAfterFirstRender';
import { getPaginationFromQuery } from 'common/utils/pagination';
import withLocation from 'common/hocs/withLocation';
import Filter from 'templates/Filter';
import WorkerCard, { WorkerCardProps } from 'templates/WorkerCard';
import { parseWorkerSummaryToCard } from 'templates/WorkerCard/utils';
import Grid from 'components/Grid';
import Title from 'components/Title';
import Pagination from 'components/Pagination';
import Skeleton from 'components/Skeleton';
import FilterContent, { FilterValues } from './Filter';

const ServiceById = ({
  workers,
  total,
  hasNext,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { page, handlePageChange } = usePagination(true);
  const location = useSelector(selectLocation);
  const [filter, setFilter] = useState<FilterValues>({
    orderBy: '',
  });
  const [workersList, setWorkersList] = useState<
    {
      workers: WorkerCardProps[];
    } & ListPagination
  >({
    workers,
    total,
    hasNext,
  });
  const router = useRouter();
  const { request: searchWorkers, loading } = useFetch(
    servicesService.searchWorkers,
  );

  useEffectAfterFirstRender(() => {
    let params = {
      page,
      ...filter,
    };
    searchWorkers(String(router.query.id), params).then(response => {
      setWorkersList({
        ...response,
        workers: parseWorkerSummaryToCard(response.workers),
      });
    });
  }, [router.query.id, searchWorkers, location.id, filter, page]);

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={9} md={10}>
          <Title title={`Serviço escolhido: ${router.query.serviceName}`} />
        </Grid>

        <Grid
          container
          item
          xs={3}
          md={2}
          justifyContent="flex-end"
          alignItems="center"
        >
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
          {workersList.workers.map(worker => (
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

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ params, query }) => {
      const { id } = params as { id: string };
      const { page, orderBy, ...restQuery } = getPaginationFromQuery(query);

      if (!store.getState().location.id) {
        return {
          props: {
            workers: [],
            total: 0,
            hasNext: false,
          },
        };
      }

      return servicesService
        .searchWorkers(id, {
          ...restQuery,
          page,
          orderBy,
        })
        .then(data => ({
          props: {
            ...data,
            workers: parseWorkerSummaryToCard(data.workers),
          },
        }))
        .catch(() => ({
          props: {
            workers: [],
            total: 0,
            hasNext: false,
          },
        }));
    },
);

export default withLocation(ServiceById);
