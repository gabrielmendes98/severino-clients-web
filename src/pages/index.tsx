import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import servicesService from 'api/services/services';
import useFetch from 'common/hooks/useFetch';
import { parseToSelect } from 'common/utils/parsers';
import { useSelector } from 'common/store/hooks';
import { selectUser } from 'common/slices/user';
import ServiceCard from 'templates/ServiceCard';
import Button from 'components/Button';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Grid from 'components/Grid';
import Skeleton from 'components/Skeleton';
import { infoDoodles } from './utils';
import { DoodleImage } from './styles';

const Home: NextPage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const router = useRouter();
  const [services, setServices] = useState<Service[]>();
  const [searchedServices, setSearchedServices] = useState<SelectOptions>([]);
  const { request: search, loading } = useFetch(servicesService.search);

  const searchServices = (serviceName: string) => {
    if (serviceName) {
      search(serviceName)
        .then(response => parseToSelect(response, 'name', 'id'))
        .then(setSearchedServices);
    } else {
      setSearchedServices([]);
    }
  };

  const onSearchOptionSelect = (option: SelectOption) =>
    router.push({
      pathname: `/services/${option.value}`,
      query: {
        serviceName: option.label,
      },
    });

  useEffect(() => {
    servicesService.listMostSearched().then(setServices);
  }, []);

  return (
    <Grid container direction="column">
      <Text
        variant="h4"
        align="center"
        fontWeight="bold"
        color="secondary"
        marginTop={6}
        marginBottom={6}
      >
        Resolva seus problemas de maneira rápida e fácil
      </Text>

      <Grid container item justifyContent="center">
        <SearchInput
          id="search-input"
          placeholder="Buscar serviços"
          maxWidth={1000}
          onChange={searchServices}
          options={searchedServices}
          loading={loading}
          onOptionSelect={onSearchOptionSelect}
          TextFieldProps={{
            sx: {
              backgroundColor: theme => theme.palette.bw.main,
            },
            color: 'bw',
            focused: true,
          }}
        />
      </Grid>

      <Text
        variant="h6"
        color="text.secondary"
        fontWeight="bold"
        marginTop={10}
        marginBottom={3}
      >
        Escolha o serviço que você precisa
      </Text>

      <Skeleton
        ready={Boolean(services)}
        count={9}
        spacing={4}
        SkeletonItem={{ width: 14, height: 14, variant: 'rectangular' }}
      >
        <Grid container justifyContent="space-around">
          {services?.map(service => (
            <Grid item key={service.id}>
              <ServiceCard
                serviceAvatar={service.avatarUrl}
                serviceName={service.name}
                serviceId={service.id}
              />
            </Grid>
          ))}
        </Grid>
      </Skeleton>

      <Grid container item justifyContent="center" marginTop={3}>
        <Link href="/services">
          <Button variant="outlined">Ver todos os serviços</Button>
        </Link>
      </Grid>

      <Text
        variant="h6"
        color="text.secondary"
        align="center"
        fontWeight="bold"
        marginTop={10}
        marginBottom={6}
      >
        Severino é uma plataforma para pessoas encontrarem profissionais que
        consigam resolver seus problemas. Nosso objetivo é tornar mais fácil a
        busca e o contato com diferentes prestadores de serviço. Além disso,
        você pode consultar o currículo e as avaliações dos profissionais e
        escolher o que mais te agrada
      </Text>

      <Grid container justifyContent="space-around" alignItems="center">
        {infoDoodles.map(doodle => (
          <Grid
            item
            key={doodle.title}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <DoodleImage>
              <Image src={doodle.avatar} alt={doodle.title} />
            </DoodleImage>
            <Text
              color="secondary"
              fontWeight="bold"
              align="center"
              sx={{
                maxWidth: theme => theme.spacing(17),
              }}
            >
              {doodle.title}
            </Text>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
