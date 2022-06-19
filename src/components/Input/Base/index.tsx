import TextField, { TextFieldProps } from '@mui/material/TextField';

export type InputBaseProps = TextFieldProps & {};

const InputBase = ({ children, size = 'small', ...props }: InputBaseProps) => (
  <TextField size={size} {...props}>
    {children}
  </TextField>
);

export default InputBase;
