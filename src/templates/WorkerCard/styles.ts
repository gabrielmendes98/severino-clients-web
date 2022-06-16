import MuiPaper from '@mui/material/Paper';
import MuiAvatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import Text from 'components/Text';

const imageSize = 120;

export const Container = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: ${({ theme }) => theme.spacing(2)};
  position: relative;
  padding-top: ${imageSize / 1.3}px;
  margin-top: ${imageSize / 3}px;
  cursor: pointer;
`;

export const Avatar = styled(MuiAvatar)`
  width: ${imageSize}px;
  height: ${imageSize}px;
  position: absolute;
  top: -${imageSize / 3}px;
  left: 50%;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-size: 50px;
`;

export const TextLimited = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
