import Text from 'components/Text';
import { Container } from './styles';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => (
  <Container>
    <Text color="secondary" fontWeight="bold" variant="h5">
      {title}
    </Text>
  </Container>
);

export default Title;
