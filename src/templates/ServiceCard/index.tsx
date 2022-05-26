import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Text from 'components/Text';
import { Container } from './styles';

interface Props {
  serviceAvatar: string;
  serviceName: string;
}

const ServiceCard = ({ serviceAvatar, serviceName }: Props) => (
  <Container>
    <Paper>
      <Image src={serviceAvatar} alt={serviceName} />
    </Paper>
    <Text color="GrayText">{serviceName}</Text>
  </Container>
);

export default ServiceCard;
