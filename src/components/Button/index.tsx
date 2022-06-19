import { ReactNode, forwardRef, Ref } from 'react';
import { ButtonProps } from '@mui/material/Button';
import Loader from 'components/Loader';
import { BaseButton } from './styles';
import { loadingSize } from './utils';

interface Props extends ButtonProps {
  children: ReactNode;
  loading?: boolean;
}

const Button = (
  { children, loading, startIcon, endIcon, size = 'medium', ...props }: Props,
  ref: Ref<any>,
) => (
  <BaseButton
    {...props}
    ref={ref}
    startIcon={!loading && startIcon}
    endIcon={!loading && endIcon}
    size={size}
  >
    {loading ? <Loader size={loadingSize(size)} color="inherit" /> : children}
  </BaseButton>
);

export default forwardRef(Button);
