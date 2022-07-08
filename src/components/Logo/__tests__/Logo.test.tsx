import { render } from 'test-utils';
import Logo from '../index';

it('should match snapshot', () => {
  const { container } = render(<Logo />);
  expect(container).toMatchSnapshot();
});
