import styled from '@emotion/styled';
import MuiDrawer from '@mui/material/Drawer';

export const StyledDrawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    padding: ${({ theme }) => theme.spacing(3)};
    width: 400px;
  }
`;
