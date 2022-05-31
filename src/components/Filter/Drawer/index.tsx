import { DrawerProps } from '@mui/material/Drawer';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Text from 'components/Text';
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
    <Text color="secondary" fontWeight="bold" marginBottom={3}>
      Filtros
    </Text>
    <Content />
  </StyledDrawer>
);

export default Drawer;
