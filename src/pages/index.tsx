import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import ServiceCard from 'templates/ServiceCard';
import Button from 'components/Button';
import Text from 'components/Text';
import SearchInput from 'components/SearchInput';
import Grid from 'components/Grid';
import { infoDoodles } from './utils';
import { DoodleImage } from './styles';

const Home: NextPage = () => {
  const [services, setServices] = useState<Service[]>([]);

  return (
    <Grid container direction="column">
      <Text variant="h4" align="center" fontWeight="bold" color="secondary">
        Resolva seus problemas de maneira rápida e fácil
      </Text>

      <Grid container item justifyContent="center">
        <SearchInput placeholder="Buscar serviços" maxWidth={1000} />
      </Grid>

      <Text variant="h6" color="GrayText">
        Escolha o serviço que você precisa
      </Text>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          serviceAvatar={service.serviceCategory.avatarUrl}
          serviceName={service.name}
        />
      ))}

      <Grid container item justifyContent="center">
        <Button variant="outlined">Ver todos os serviços</Button>
      </Grid>

      <Text variant="h6" color="GrayText" align="center">
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
