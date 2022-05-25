import { ReactNode } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => (
  <MuiButton {...props}>{children}</MuiButton>
);

export default Button;
