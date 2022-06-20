import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { useDispatch } from 'common/store/hooks';
import { signOut } from 'common/slices/user';
import IconButton from 'components/IconButton';
import Box from 'components/Box';

interface Props {
  isSigned: boolean;
}

const NavMenu = ({ isSigned }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (path: string) => () => {
    router.push(path);
    handleClose();
  };

  const handleSignOut = () => {
    dispatch(signOut());
    handleClose();
    router.push('/');
  };

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem onClick={handleItemClick('/services')}>
          Contrate um serviço
        </MenuItem>
        {!isSigned && [
          <MenuItem key="sign-up" onClick={handleItemClick('/sign-up')}>
            Criar conta
          </MenuItem>,
          <MenuItem key="login" onClick={handleItemClick('/login')}>
            Login
          </MenuItem>,
        ]}
        {isSigned && [
          <MenuItem key="favorites" onClick={handleItemClick('/favorites')}>
            Login
          </MenuItem>,
          <MenuItem
            key="change-password"
            onClick={handleItemClick('/change-password')}
          >
            Mudar senha
          </MenuItem>,
          <MenuItem key="logout" onClick={handleSignOut}>
            Sair
          </MenuItem>,
        ]}
      </Menu>
    </Box>
  );
};

export default NavMenu;
