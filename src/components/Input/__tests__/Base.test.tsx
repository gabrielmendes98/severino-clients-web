import { render } from 'test-utils';
import Input from '../Base';

it('should match snapshot', () => {
  const { container } = render(<Input name="name" label="label" />);
  expect(container).toMatchSnapshot();
});
