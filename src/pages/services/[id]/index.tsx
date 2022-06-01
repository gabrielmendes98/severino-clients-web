import { useRouter } from 'next/router';
import { useState } from 'react';
import Filter from 'templates/Filter';
import Grid from 'components/Grid';
import Title from 'components/Title';
import FilterContent, { FilterValues } from './Filter';

const ServiceById = () => {
  const [filter, setFilter] = useState<FilterValues>({
    orderBy: '',
  });
  const router = useRouter();

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
    </Grid>
  );
};

export default ServiceById;
