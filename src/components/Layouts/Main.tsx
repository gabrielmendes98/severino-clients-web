import { ReactNode } from 'react';
import Header from 'templates/Header';
import Footer from 'components/Footer';
import { Main, Container } from './styles';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => (
  <Container>
    <Header />
    <Main component="main">{children}</Main>
    <Footer />
  </Container>
);

export default MainLayout;
