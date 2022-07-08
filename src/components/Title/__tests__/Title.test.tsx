import { render } from 'test-utils';
import Title from '../index';

it('should match snapshot', () => {
  const { container } = render(<Title title="test title" />);
  expect(container).toMatchSnapshot();
});
