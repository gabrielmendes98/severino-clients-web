import { render } from 'test-utils';
import Pagination from '../index';

it('should match snapshot', () => {
  const { container } = render(<Pagination total={10} perPage={3} />);
  expect(container).toMatchSnapshot();
});
