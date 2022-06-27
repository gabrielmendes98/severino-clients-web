import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';

const Avatar = ({ children, ...props }: AvatarProps) => (
  <MuiAvatar {...props}>{children}</MuiAvatar>
);

export default Avatar;
