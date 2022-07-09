import { render, userEvent, screen, waitFor } from 'test-utils';
import cookiesService from 'api/services/cookies';
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

it('should call api and set cookie consent to true when accept', async () => {
  const consentService = jest.spyOn(cookiesService, 'consent');
  render(<CookieInfo />);

  userEvent.click(screen.getByRole('button', { name: /entendi/i }));

  await waitFor(() => {
    expect(
      screen.queryByRole('button', { name: /entendi/i }),
    ).not.toBeInTheDocument();
  });
  expect(consentService).toHaveBeenCalled();
});
