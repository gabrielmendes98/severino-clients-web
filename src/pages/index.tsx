import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import servicesService from 'api/services/services';
import useSearchServices from 'pages/useSearchServices';
import ServiceCard from 'templates/ServiceCard';
import Button from 'components/Button';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Grid from 'components/Grid';
import { infoDoodles } from './utils';
import { DoodleImage } from './styles';

const Home: NextPage = () => {
  const router = useRouter();
  const [services, setServices] = useState<Service[]>([]);
  const { loading, searchServices, searchedServices } = useSearchServices();

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
          placeholder="Buscar serviços"
          maxWidth={1000}
          onChange={searchServices}
          options={searchedServices}
          loading={loading}
          onOptionSelect={(option: SelectOption) =>
            router.push(`/services/${option.value}`)
          }
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

      <Grid container justifyContent="space-around">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            serviceAvatar={service.avatarUrl}
            serviceName={service.name}
            serviceId={service.id}
          />
        ))}
      </Grid>

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
