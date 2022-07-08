import { render } from 'test-utils';
import BaseRadio from '../Base';

it('should match snapshot', () => {
  const { container } = render(<BaseRadio name="test" />);
  expect(container).toMatchSnapshot();
});
