import { render } from 'test-utils';
import CookieInfo from '../index';

it('should display nothing if cookie is consented', () => {
  const { container } = render(<CookieInfo />, {
    preloadedState: {
      cookie: {
        accepted: true,
      },
    },
  });

  expect(container).toMatchSnapshot();
});

it('should call api and set cookie consent to true when accept', () => {});
