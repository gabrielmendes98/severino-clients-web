import { ReactNode, forwardRef, Ref } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { BaseButton } from './styles';

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props, ref: Ref<any>) => (
  <BaseButton {...props} ref={ref}>
    {children}
  </BaseButton>
);

export default forwardRef(Button);
