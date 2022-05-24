import { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';

interface Props {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => (
  <MuiButton variant="outlined" {...props}>
    {children}
  </MuiButton>
);

export default Button;
