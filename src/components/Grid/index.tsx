import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

export interface GridProps extends MuiGridProps {}

const Grid = ({ children, ...props }: GridProps) => (
  <MuiGrid {...props}>{children}</MuiGrid>
);

export default Grid;
