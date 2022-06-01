import {
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from 'components/Button';
import Drawer from './Drawer';

interface Props<FilterType> {
  content: FunctionComponent<{ onChange: OnFieldChange; filter: FilterType }>;
  setFilter: Dispatch<SetStateAction<FilterType>>;
  filter: FilterType;
}

const Filter = <FilterType extends {}>({
  content: Content,
  setFilter,
  filter,
}: Props<FilterType>) => {
  const [open, setOpen] = useState(false);

  const onFilterChange = useCallback<OnFieldChange>(
    (e, value) => {
      setFilter(init => ({
        ...init,
        [e.target.name]: value,
      }));
    },
    [setFilter],
  );

  return (
    <>
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={() => setOpen(true)}
      >
        Filtrar
      </Button>
      <Drawer
        open={open}
        setOpen={setOpen}
        content={<Content onChange={onFilterChange} filter={filter} />}
      />
    </>
  );
};

export default Filter;
