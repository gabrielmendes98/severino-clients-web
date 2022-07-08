import { render } from 'test-utils';
import Stack from '../index';

it('should match snapshot', () => {
  const { container } = render(
    <Stack spacing={2}>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
      <div>item 5</div>
    </Stack>,
  );
  expect(container).toMatchSnapshot();
});
