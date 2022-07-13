import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';
import { ElementType } from 'react';

interface GridProps extends MuiGridProps {
  component?: ElementType<any> & (ElementType<any> | undefined);
}

const Grid = ({ children, component = 'div', ...props }: GridProps) => (
  <MuiGrid component={component} {...props}>
    {children}
  </MuiGrid>
);

export default Grid;
