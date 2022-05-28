import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Main = styled(Box)({
  maxWidth: '1400px',
  minWidth: '1400px',
  margin: '0 auto',
  flex: 1,
});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
