import { render } from 'test-utils';
import Footer from '../index';

// no more tests were added, because the component has no practical functionality for now

it('should match snapshot', () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
