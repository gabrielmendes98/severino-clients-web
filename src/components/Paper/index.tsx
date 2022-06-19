import MuiPaper, { PaperProps } from '@mui/material/Paper';

const Paper = ({ children, ...props }: PaperProps) => (
  <MuiPaper {...props}>{children}</MuiPaper>
);

export default Paper;
