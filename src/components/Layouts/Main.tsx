import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Header from 'components/Header';
import { Main } from './styles';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <Box>
    <Header />
    <Main component="main">{children}</Main>
  </Box>
);

export default MainLayout;
