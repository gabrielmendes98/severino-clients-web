import { render } from 'test-utils';
import IconButton from '../index';

it('should match snapshot', () => {
  const { container } = render(<IconButton>iconmock</IconButton>);
  expect(container).toMatchSnapshot();
});
