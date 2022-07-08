import { render } from 'test-utils';
import Avatar from '../index';

it('should match snapshot', () => {
  const { container } = render(
    <Avatar src="mock" alt="test">
      test
    </Avatar>,
  );
  expect(container).toMatchSnapshot();
});
