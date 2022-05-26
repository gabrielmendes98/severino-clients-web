import MuiGrid, { GridProps } from '@mui/material/Grid';

const Grid = ({ children, ...props }: GridProps) => (
  <MuiGrid {...props}>{children}</MuiGrid>
);

export default Grid;
