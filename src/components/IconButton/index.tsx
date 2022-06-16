import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

const IconButton = ({ children, ...props }: IconButtonProps) => (
  <MuiIconButton {...props}>{children}</MuiIconButton>
);
export default IconButton;
