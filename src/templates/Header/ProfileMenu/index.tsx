import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { useDispatch } from 'common/store/hooks';
import { signOut } from 'common/slices/user';
import Button from 'components/Button';

const ProfileMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePassword = () => {
    handleClose();
    router.push('/change-password');
  };

  const handleSignOut = () => {
    dispatch(signOut());
    handleClose();
    router.push('/');
  };

  return (
    <div>
      <Button
        color="inherit"
        id="profile-menu-button"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleProfileClick}
      >
        Perfil
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'profile-menu-button',
        }}
      >
        <MenuItem onClick={handleChangePassword}>Mudar senha</MenuItem>
        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
