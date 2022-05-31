import { useEffect, useState } from 'react';
import usePagination from 'common/hooks/usePagination';
import useServices from 'pages/services/useServices';
import ServiceCard from 'templates/ServiceCard';
import Grid from 'components/Grid';
import SearchInput from 'components/SearchInput';
import Title from 'components/Title';
import Pagination from 'components/Pagination';
import Skeleton from 'components/Skeleton';

const Services = () => {
  const { page, handlePageChange } = usePagination();
  const { loading, searchServices, servicesList, listServices } = useServices();

  useEffect(() => {
    const params = {
      page,
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
        <Skeleton
          ready={Boolean(servicesList)}
          count={18}
          spacing={4}
          SkeletonItem={{ width: 14, height: 14, variant: 'rectangular' }}
        >
          {servicesList?.services.map(service => (
            <Grid item key={service.id}>
              <ServiceCard
                serviceAvatar={service.avatarUrl}
                serviceName={service.name}
                serviceId={service.id}
              />
            </Grid>
          ))}
        </Skeleton>
      </Grid>

      <Grid container justifyContent="center" marginTop={3}>
        <Pagination
          total={servicesList?.total}
          page={page}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};

export default Services;
