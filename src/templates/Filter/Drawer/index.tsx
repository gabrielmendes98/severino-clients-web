import { DrawerProps } from '@mui/material/Drawer';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Text from 'components/Text';
import IconButton from 'components/IconButton';
import Box from 'components/Box';
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={3}
    >
      <Text color="secondary" fontWeight="bold">
        Filtros
      </Text>
      <IconButton onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
    </Box>
    {content}
  </StyledDrawer>
);

export default Drawer;
