import { render } from 'test-utils';
import InputAdornment from '../InputAdornment';

it('should match snapshot', () => {
  const { container } = render(<InputAdornment position="start" />);
  expect(container).toMatchSnapshot();
});
