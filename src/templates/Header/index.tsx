import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import { NoSsr } from '@mui/material';
import { selectLocation } from 'common/slices/location';
import { useDispatch, useSelector } from 'common/store/hooks';
import { selectUserIsSigned } from 'common/slices/user';
import { selectIsDarkTheme, toggleTheme } from 'common/slices/theme';
import Location from 'templates/Location';
import Logo from 'components/Logo';
import Button from 'components/Button';
import withModal, { InjectedModalProps } from 'components/Modal/withModal';
import ProfileMenu from './ProfileMenu';
import NavMenu from './NavMenu';
import ThemeSwitch from './ThemeSwitch';

interface Props extends InjectedModalProps {}

const Header = ({ showModal }: Props) => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const isSigned = useSelector(selectUserIsSigned);
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const [displayLocation, setDisplayLocation] = useState('');
  const [clientIsSigned, setClientIsSigned] = useState(false);

  const handleLocationClick = () =>
    showModal({
      body: Location,
      ModalProps: {
        maxWidth: 'sm',
        fullWidth: true,
      },
    });

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    setDisplayLocation(location.name);
    setClientIsSigned(isSigned);
  }, [location, isSigned]);

  return (
    <AppBar position="static" color="inherit" variant="outlined" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: { xs: 'space-between' },
        }}
      >
        <NavMenu isSigned={clientIsSigned} />

        <Link href="/">
          <Box sx={{ cursor: 'pointer' }}>
            <Logo />
          </Box>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}></Box>

        <NoSsr>
          <ThemeSwitch
            onChange={handleToggleTheme}
            checked={isDarkTheme}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          />
        </NoSsr>

        <Button startIcon={<LocationOnIcon />} onClick={handleLocationClick}>
          {displayLocation ? displayLocation : 'Informe sua cidade'}
        </Button>

        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Link href="/services">
            <Button color="inherit">Contrate um serviço</Button>
          </Link>
          {!clientIsSigned && (
            <>
              <Link href="/sign-up">
                <Button color="inherit">Criar conta</Button>
              </Link>
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
          {clientIsSigned && (
            <>
              <Link href="/favorites">
                <Button color="inherit">Meus favoritos</Button>
              </Link>
              <ProfileMenu />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default withModal(Header);
