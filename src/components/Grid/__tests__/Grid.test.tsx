import { render } from 'test-utils';
import Grid from '../index';

it('should match snapshot', () => {
  const { container } = render(
    <Grid container>
      <Grid item xs={6}>
        item 1
      </Grid>
      <Grid item xs={6}>
        item 2
      </Grid>
      <Grid item xs={4}>
        item 3
      </Grid>
      <Grid item xs={4}>
        item 4
      </Grid>
      <Grid item xs={4}>
        item 5
      </Grid>
    </Grid>,
  );
  expect(container).toMatchSnapshot();
});
