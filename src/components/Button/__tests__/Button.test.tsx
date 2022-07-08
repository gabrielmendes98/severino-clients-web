import { render, screen } from 'test-utils';
import Button from '../index';

it('should show loader when pass loading prop to button', () => {
  render(<Button loading>test</Button>);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
  expect(screen.queryByText('test')).not.toBeInTheDocument();
});

it('should not show loader when do not pass loading prop to button', () => {
  render(<Button>test</Button>);
  expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  expect(screen.getByText('test')).toBeInTheDocument();
});

it('should match snapshot', () => {
  const { container } = render(<Button>default button</Button>);
  expect(container).toMatchSnapshot();
});
