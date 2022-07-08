import { render } from 'test-utils';
import Paper from '../index';

it('should match snapshot', () => {
  const { container } = render(
    <Paper>
      <div>children</div>
    </Paper>,
  );
  expect(container).toMatchSnapshot();
});
