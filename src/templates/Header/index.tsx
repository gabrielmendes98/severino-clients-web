import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { LocationSate, selectLocation } from 'common/slices/location';
import { wrapper } from 'common/store/store';
import { useSelector } from 'common/store/hooks';
import Location from 'templates/Location';
import Logo from 'components/Logo';
import Button from 'components/Button';
import withModal, { InjectedModalProps } from 'components/Modal/withModal';

interface Props extends InjectedModalProps {}

const Header = ({ showModal }: Props) => {
  const location = useSelector(selectLocation);
  const [displayLocation, setDisplayLocation] = useState('');

  useEffect(() => {
    setDisplayLocation(location.name);
  }, [location]);

  const handleLocationClick = () =>
    showModal({
      body: Location,
      ModalProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
    });

  return (
    <AppBar position="static" color="inherit" variant="outlined" elevation={0}>
      <Toolbar>
        <Link href="/">
          <Box sx={{ cursor: 'pointer' }}>
            <Logo />
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button startIcon={<LocationOnIcon />} onClick={handleLocationClick}>
          {displayLocation ? displayLocation : 'Informe sua cidade'}
        </Button>
        <Link href="/services">
          <Button color="inherit">Contrate um serviço</Button>
        </Link>
        <Link href="/sign-up">
          <Button color="inherit">Criar conta</Button>
        </Link>
        <Link href="/login">
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
