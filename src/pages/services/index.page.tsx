import { useEffect } from 'react';
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
  const {
    loadingSearch,
    searchServices,
    servicesList,
    listServices,
    loadingList,
  } = useServices();

  useEffect(() => {
    const params = {
      page,
    };
    listServices(params);
  }, [listServices, page]);

  return (
    <Grid container>
      <Grid container spacing={{ xs: 3, md: 0 }}>
        <Grid item xs={12} md={6}>
          <Title title="Serviços disponíveis" />
        </Grid>

        <Grid item xs={12} md={6}>
          <SearchInput
            placeholder="Busque serviços"
            onChange={searchServices}
            loading={loadingSearch}
            TextFieldProps={{
              sx: {
                backgroundColor: theme => theme.palette.bw.main,
              },
              color: 'bw',
              focused: true,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4} marginTop={5}>
        <Skeleton
          ready={!loadingList}
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
