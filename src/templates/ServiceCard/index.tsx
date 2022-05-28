import Paper from '@mui/material/Paper';
import Link from 'next/link';
import theme from 'common/styles/theme';
import Image from 'components/Image';
import Text from 'components/Text';
import { Container } from './styles';

interface Props {
  serviceAvatar: string;
  serviceName: string;
  serviceId: string;
}

const ServiceCard = ({ serviceAvatar, serviceName, serviceId }: Props) => (
  <Link href={`/services/${serviceId}`}>
    <Container>
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
  </Link>
);

export default ServiceCard;
