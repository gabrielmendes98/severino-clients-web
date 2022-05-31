import { useRouter } from 'next/router';
import Grid from 'components/Grid';
import Title from 'components/Title';
import Filter from 'components/Filter';
import FilterContent from './Filter';

const ServiceById = () => {
  const router = useRouter();

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Title title={`Serviço escolhido: ${router.query.serviceName}`} />
        </Grid>

        <Grid container item xs={6} justifyContent="flex-end">
          <Filter content={FilterContent} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceById;
