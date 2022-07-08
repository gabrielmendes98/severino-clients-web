import { render } from 'test-utils';
import Box from '../index';

it('should match snapshot', () => {
  const { container } = render(<Box>test</Box>);
  expect(container).toMatchSnapshot();
});
