import Paper from '@mui/material/Paper';
import theme from 'common/styles/theme';
import Image from 'components/Image';
import Text from 'components/Text';
import { Container } from './styles';

interface Props {
  serviceAvatar: string;
  serviceName: string;
}

const ServiceCard = ({ serviceAvatar, serviceName }: Props) => (
  <Container>
    <Paper sx={{ margin: 'auto', padding: theme => theme.spacing(1.5) }}>
      <Image
        src={serviceAvatar}
        alt={serviceName}
        width={theme.spacing(12)}
        height={theme.spacing(12)}
      />
    </Paper>
    <Text color="GrayText" align="center">
      {serviceName}
    </Text>
  </Container>
);

export default ServiceCard;
