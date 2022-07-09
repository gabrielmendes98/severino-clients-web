import { useRouter } from 'next/router';
import { render, screen, userEvent, waitFor } from 'test-utils';
import Filter from '../index';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

it('should display drawer on filter button click', async () => {
  render(
    <Filter
      content={() => <div>dale</div>}
      filter={{}}
      setFilter={jest.fn()}
    />,
  );

  userEvent.click(screen.getByRole('button', { name: /filtrar/i }));

  await waitFor(() => {
    expect(screen.getByText('dale')).toBeInTheDocument();
  });
});

it('should call setFilter and push filters to query on filter change', async () => {
  const mockRouter = {
    push: jest.fn(),
    pathname: '/',
    query: [],
  };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const setFilter = jest.fn();
  render(
    <Filter
      content={({
        onChange,
        filter,
      }: {
        onChange: OnFieldChange;
        filter: { test: string };
      }) => (
        <input
          name="test"
          onChange={e => onChange(e, e.target.value)}
          value={filter.test}
          placeholder="input test"
        />
      )}
      filter={{ test: '' }}
      setFilter={setFilter}
    />,
  );

  userEvent.click(screen.getByRole('button', { name: /filtrar/i }));

  userEvent.type(await screen.findByPlaceholderText('input test'), 'K');

  await waitFor(() => {
    expect(setFilter).toHaveBeenCalled();
  });
  expect(mockRouter.push).toHaveBeenCalledWith(
    {
      pathname: '/',
      query: {
        test: 'K',
      },
    },
    {},
    { shallow: true },
  );
});
