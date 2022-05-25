import { ReactNode, forwardRef, Ref } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props, ref: Ref<any>) => (
  <MuiButton {...props} ref={ref}>
    {children}
  </MuiButton>
);

export default forwardRef(Button);
