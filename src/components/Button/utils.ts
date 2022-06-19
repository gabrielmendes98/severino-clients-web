import { ButtonProps } from '@mui/material/Button';

export const loadingSize = (size: ButtonProps['size']) => {
  switch (size) {
    case undefined:
      return 18;
    case 'small':
      return 18;
    case 'medium':
      return 22;
    case 'large':
      return 24;
  }
};
