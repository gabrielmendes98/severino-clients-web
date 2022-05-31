import MuiStack, { StackProps } from '@mui/material/Stack';

const Stack = ({ children, ...props }: StackProps) => (
  <MuiStack {...props}>{children}</MuiStack>
);

export default Stack;
