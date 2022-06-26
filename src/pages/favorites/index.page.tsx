import { useEffect, useState } from 'react';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import workersService from 'api/services/workers';
import useFetch from 'common/hooks/useFetch';
import WorkerCard, { WorkerCardProps } from 'templates/WorkerCard';
import { parseWorkerSummaryToCard } from 'templates/WorkerCard/utils';
import ListFallback from 'templates/ListFallback';
import Grid from 'components/Grid';
import Title from 'components/Title';
import Skeleton from 'components/Skeleton';

const Favorites = () => {
  const [workers, setWorkers] = useState<WorkerCardProps[]>();
  const { request: listFavorites, loading } = useFetch(
    workersService.listFavorites,
  );

  useEffect(() => {
    listFavorites().then(parseWorkerSummaryToCard).then(setWorkers);
  }, [listFavorites]);

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Title title="Profissionais favoritos" />
      </Grid>

      <Grid container spacing={4} marginTop={1} flexDirection="row">
        <Skeleton
          ready={!loading}
          count={5}
          spacing={4}
          SkeletonItem={{ width: 30, height: 40, variant: 'rectangular' }}
        >
          {workers?.length ? (
            workers.map(worker => (
              <Grid container item key={worker.id} xs="auto">
                <WorkerCard {...worker} />
              </Grid>
            ))
          ) : (
            <ListFallback
              message="Você não tem profissionais favoritos."
              icon={MoodBadIcon}
            />
          )}
        </Skeleton>
      </Grid>
    </Grid>
  );
};

export default Favorites;
