import Typography, { TypographyProps } from '@mui/material/Typography';

const Text = ({ children, ...props }: TypographyProps) => (
  <Typography {...props}>{children}</Typography>
);

export default Text;
