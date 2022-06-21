import styled from '@emotion/styled';
import MuiDrawer from '@mui/material/Drawer';

export const StyledDrawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    padding: ${({ theme }) => theme.spacing(3)};

    ${({ theme }) => theme.breakpoints.up('xs')} {
      width: 100%;
    }

    ${({ theme }) => theme.breakpoints.up('sm')} {
      width: 400px;
    }
  }
`;
