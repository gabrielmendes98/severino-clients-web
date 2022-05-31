import MuiPagination, { PaginationProps } from '@mui/material/Pagination';
import { DEFAULT_LIST_COUNT } from 'common/constants';

interface Props extends PaginationProps {
  total?: number;
  perPage?: number;
}

const Pagination = ({
  color = 'primary',
  total = 0,
  perPage = DEFAULT_LIST_COUNT,
  ...props
}: Props) => (
  <MuiPagination color={color} count={Math.ceil(total / perPage)} {...props} />
);

export default Pagination;
