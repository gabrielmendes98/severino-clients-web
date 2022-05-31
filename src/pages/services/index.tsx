import { useEffect, useState } from 'react';
import useServices from 'common/hooks/useServices';
import ServiceCard from 'templates/ServiceCard';
import Grid from 'components/Grid';
import SearchInput from 'components/SearchInput';
import Title from 'components/Title';

const Services = () => {
  const [page, setPage] = useState(0);
  const { loading, searchServices, servicesList, listServices } = useServices();

  useEffect(() => {
    const params = {
      page,
      count: 3,
    };
    listServices(params);
  }, [listServices, page]);

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Title title="Serviços disponíveis" />
        </Grid>

        <Grid item xs={6}>
          <SearchInput
            placeholder="Busque serviços"
            onChange={searchServices}
            loading={loading}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} marginTop={5}>
        {servicesList?.services.map(service => (
          <Grid item key={service.id}>
            <ServiceCard
              serviceAvatar={service.avatarUrl}
              serviceName={service.name}
              serviceId={service.id}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;
