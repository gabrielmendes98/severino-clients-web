import { DrawerProps } from '@mui/material/Drawer';
import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';
import Text from 'components/Text';
import { StyledDrawer } from './styles';

interface Props extends DrawerProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  content: ReactNode;
}

const Drawer = ({ open, setOpen, content, ...props }: Props) => (
  <StyledDrawer
    anchor="right"
    open={open}
    onClose={() => setOpen(false)}
    {...props}
  >
    <Text color="secondary" fontWeight="bold" marginBottom={3}>
      Filtros
    </Text>
    {content}
  </StyledDrawer>
);

export default Drawer;
