import { ButtonProps } from '@mui/material/Button';

export const loadingSize = (size: ButtonProps['size']) => {
  switch (size) {
    case undefined:
      return 16;
    case 'small':
      return 16;
    case 'medium':
      return 18;
    case 'large':
      return 20;
  }
};
