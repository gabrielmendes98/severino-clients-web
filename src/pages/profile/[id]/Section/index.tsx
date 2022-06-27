import { ReactNode } from 'react';
import Paper from 'components/Paper';

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => (
  <Paper sx={{ padding: theme => theme.spacing(2), width: '100%' }}>
    {children}
  </Paper>
);

export default Section;
