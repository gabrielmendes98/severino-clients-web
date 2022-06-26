import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import IconButton from 'components/IconButton';
import Input, { InputProps } from '../index';
import InputAdornment from '../InputAdornment';

const PasswordInput = ({ children, InputProps, ...props }: InputProps) => {
  const [visible, setVisible] = useState(false);

  const preventMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const toggleVisibility = () => setVisible(init => !init);

  return (
    <Input
      {...props}
      type={visible ? 'text' : 'password'}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="mostrar ou esconder senha"
              onClick={toggleVisibility}
              onMouseDown={preventMouseEvent}
              onMouseUp={preventMouseEvent}
              edge="end"
            >
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {children}
    </Input>
  );
};

export default PasswordInput;
