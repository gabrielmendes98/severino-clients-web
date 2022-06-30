import { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Box from 'components/Box';
import Text, { TextProps } from 'components/Text';

interface Props {
  message: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  TextProps?: TextProps;
}

const ListFallback = ({ message, icon: Icon, TextProps }: Props) => (
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
    <Text color="inherit" variant="h5" {...TextProps}>
      {message}
    </Text>
  </Box>
);

export default ListFallback;
