import Paper from '@mui/material/Paper';
// import { useRouter } from 'next/router';
import useAppTheme from 'common/hooks/useTheme';
import Image from 'components/Image';
import Text from 'components/Text';
import { Container } from './styles';

interface Props {
  serviceAvatar: string;
  serviceName: string;
  serviceId: string;
}

const ServiceCard = ({ serviceAvatar, serviceName, serviceId }: Props) => {
  const theme = useAppTheme();

  // const router = useRouter();

  const handleClick = () => {
    window.location.href = `/services/${serviceId}?serviceName=${serviceName}`;
    // router.push({
    //   pathname: `/services/${serviceId}`,
    //   query: {
    //     serviceName,
    //   },
    // });
  };

  return (
    <Container onClick={handleClick}>
      <Paper sx={{ margin: 'auto', padding: theme => theme.spacing(1.5) }}>
        <Image
          src={serviceAvatar}
          alt={serviceName}
          width={theme.spacing(12)}
          height={theme.spacing(12)}
        />
      </Paper>
      <Text
        color="text.secondary"
        align="center"
        fontWeight="500"
        marginTop={1}
      >
        {serviceName}
      </Text>
    </Container>
  );
};

export default ServiceCard;
