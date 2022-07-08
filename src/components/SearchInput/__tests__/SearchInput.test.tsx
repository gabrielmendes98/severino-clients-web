import { render, userEvent, screen, waitFor, within } from 'test-utils';
import SearchInput from '../index';

const mockOptions = [
  { label: 'option one', value: '1' },
  { label: 'option two', value: '2' },
];

it('should match snapshot', () => {
  const { container } = render(<SearchInput onChange={jest.fn()} />);
  expect(container).toMatchSnapshot();
});

it('should call onChange with event and value', async () => {
  const onChange = jest.fn();
  render(
    <SearchInput
      onChange={onChange}
      options={mockOptions}
      placeholder="autocomplete input"
    />,
  );
  userEvent.type(screen.getByPlaceholderText('autocomplete input'), 'foo');
  await waitFor(() => {
    expect(onChange).toHaveBeenCalledWith('foo');
  });
});

it('should call onOptionSelect when select option', async () => {
  const onChange = jest.fn();
  const onOptionSelect = jest.fn();
  render(
    <SearchInput
      onChange={onChange}
      options={mockOptions}
      onOptionSelect={onOptionSelect}
      placeholder="autocomplete input"
    />,
  );
  userEvent.type(screen.getByPlaceholderText('autocomplete input'), 'option');
  const list = await screen.findByRole('listbox');
  const optionOne = within(list).getByText('option one');
  userEvent.click(optionOne);
  await waitFor(() => {
    expect(onOptionSelect).toHaveBeenCalledWith(mockOptions[0]);
  });
});

it('should show loading adornment when pass loading prop', async () => {
  const onChange = jest.fn();
  render(
    <SearchInput
      onChange={onChange}
      options={mockOptions}
      placeholder="autocomplete input"
      loading
    />,
  );

  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
