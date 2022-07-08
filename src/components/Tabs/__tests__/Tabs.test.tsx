import { render } from 'test-utils';
import Tabs from '../index';
import Tab from '../Tab';

it('should match snapshot', () => {
  const { container } = render(
    <Tabs value="1" onChange={jest.fn()} centered>
      <Tab label="one" value="1" />
      <Tab label="two" value="2" />
      <Tab label="three" value="3" />
    </Tabs>,
  );
  expect(container).toMatchSnapshot();
});
