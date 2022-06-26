import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Main = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  paddingLeft: '20px',
  paddingRight: '20px',
  flex: 1,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
}));

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  flex: 1,
});
