import Box from 'components/Box';
import Text from 'components/Text';

interface Props {
  label: string;
  value?: string | number;
}

const InfoItem = ({ label, value }: Props) => (
  <Box>
    <Text display="inline" fontWeight="bold">
      {label}
    </Text>
    <Text display="inline">{` ${value || 'Não informado'}`}</Text>
  </Box>
);

export default InfoItem;
