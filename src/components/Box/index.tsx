import MuiBox, { BoxProps } from '@mui/material/Box';

const Box = ({ children, ...props }: BoxProps) => (
  <MuiBox {...props}>{children}</MuiBox>
);

export default Box;
