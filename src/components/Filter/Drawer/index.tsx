import { DrawerProps } from '@mui/material/Drawer';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { StyledDrawer } from './styles';

interface Props extends DrawerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  content: FunctionComponent;
}

const Drawer = ({ open, setOpen, content: Content, ...props }: Props) => (
  <StyledDrawer
    anchor="right"
    open={open}
    onClose={() => setOpen(false)}
    {...props}
  >
    <Content />
  </StyledDrawer>
);

export default Drawer;
