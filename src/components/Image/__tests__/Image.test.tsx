import { render } from 'test-utils';
import Image from '../index';

it('should match snapshot', () => {
  const { container } = render(<Image src={'mock mock'} alt="mock alt" />);
  expect(container).toMatchSnapshot();
});
