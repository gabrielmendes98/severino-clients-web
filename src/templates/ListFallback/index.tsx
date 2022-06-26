import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Box from 'components/Box';
import Text from 'components/Text';

interface Props {
  message: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

const ListFallback = ({ message, icon: Icon }: Props) => (
  <Box
    sx={{
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme => theme.spacing(1),
      color: 'text.disabled',
    }}
  >
    <Icon fontSize="large" color="inherit" />
    <Text color="inherit" variant="h5">
      {message}
    </Text>
  </Box>
);

export default ListFallback;
