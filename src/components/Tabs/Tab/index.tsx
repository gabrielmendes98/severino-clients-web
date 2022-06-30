import MuiTab, { TabProps } from '@mui/material/Tab';

const Tab = ({ children, ...props }: TabProps) => (
  <MuiTab {...props}>{children}</MuiTab>
);

export default Tab;
