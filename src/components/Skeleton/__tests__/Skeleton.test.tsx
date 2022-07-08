import { render } from 'test-utils';
import Skeleton from '../index';

it('should match snapshot when ready', () => {
  const { container } = render(
    <Skeleton ready>
      <div>children</div>
    </Skeleton>,
  );
  expect(container).toMatchSnapshot();
});

it('should match snapshot when not ready', () => {
  const { container } = render(
    <Skeleton ready={false}>
      <div>children</div>
    </Skeleton>,
  );
  expect(container).toMatchSnapshot();
});
