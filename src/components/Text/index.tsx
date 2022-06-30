import Typography, { TypographyProps } from '@mui/material/Typography';

export interface TextProps extends TypographyProps {}

const Text = ({ children, ...props }: TextProps) => (
  <Typography {...props}>{children}</Typography>
);

export default Text;
