import MuiInputAdornment, {
  InputAdornmentProps,
} from '@mui/material/InputAdornment';

const InputAdornment = ({ children, ...props }: InputAdornmentProps) => (
  <MuiInputAdornment {...props}>{children}</MuiInputAdornment>
);

export default InputAdornment;
