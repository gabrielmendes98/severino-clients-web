import MuiTabs, { TabsProps } from '@mui/material/Tabs';

const Tabs = ({ children, ...props }: TabsProps) => (
  <MuiTabs {...props}>{children}</MuiTabs>
);

export default Tabs;
