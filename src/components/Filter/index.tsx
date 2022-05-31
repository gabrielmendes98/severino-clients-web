import { useState, FunctionComponent } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from 'components/Button';
import Drawer from './Drawer';

interface Props {
  content: FunctionComponent;
}

const Filter = ({ content }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={() => setOpen(true)}
      >
        Filtrar
      </Button>
      <Drawer open={open} setOpen={setOpen} content={content} />
    </>
  );
};

export default Filter;
