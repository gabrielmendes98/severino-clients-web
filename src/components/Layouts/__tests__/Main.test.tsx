import { render } from 'test-utils';
import Main from '../Main';

it('should match snapshot', () => {
  const { container } = render(
    <Main>
      <div>children</div>
    </Main>,
  );
  expect(container).toMatchSnapshot();
});
