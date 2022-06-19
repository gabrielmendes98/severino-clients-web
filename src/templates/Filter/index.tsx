import {
  useState,
  FunctionComponent,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onFilterChange = useCallback<OnFieldChange>(
    (e, value) => {
      setFilter(init => ({
        ...init,
        [e.target.name]: value,
      }));
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [e.target.name]: value,
          },
        },
        {},
        { shallow: true },
      );
    },
    [setFilter, router],
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
