import { render } from 'test-utils';
import Footer from '../index';

it('should match snapshot', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
