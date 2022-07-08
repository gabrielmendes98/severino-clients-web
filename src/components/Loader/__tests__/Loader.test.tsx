import { render } from 'test-utils';
import Loader from '../index';

it('should match snapshot', () => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});
