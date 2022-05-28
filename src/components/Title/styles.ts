import styled from '@emotion/styled';

export const Container = styled.div`
  border-left: 4px solid ${({ theme }) => theme.palette.secondary.main};
  padding-left: ${({ theme }) => theme.spacing(4)};
`;
