import { render } from 'test-utils';
import Text from '../index';

it('should match snapshot', () => {
  const { container } = render(<Text>text test</Text>);
  expect(container).toMatchSnapshot();
});
