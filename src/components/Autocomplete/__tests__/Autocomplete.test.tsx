import { render, userEvent, screen, waitFor, within } from 'test-utils';
import Autocomplete from '../index';

const mockOptions = [
  { label: 'option one', value: '1' },
  { label: 'option two', value: '2' },
];

it('should match snapshot', () => {
  const { container } = render(
    <Autocomplete onChange={jest.fn()} options={mockOptions} />,
  );
  expect(container).toMatchSnapshot();
});

it('should call onChange with event and value', async () => {
  const onChange = jest.fn();
  render(
    <Autocomplete
      onChange={onChange}
      options={mockOptions}
      name="autocomplete"
      TextFieldProps={{ label: 'autocomplete input' }}
    />,
  );
  userEvent.type(screen.getByLabelText('autocomplete input'), 'foo');
  await waitFor(() => {
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'foo');
  });
});

it('should call onOptionSelect when select option', async () => {
  const onChange = jest.fn();
  const onOptionSelect = jest.fn();
  render(
    <Autocomplete
      onChange={onChange}
      options={mockOptions}
      name="autocomplete"
      TextFieldProps={{ label: 'autocomplete input' }}
      onOptionSelect={onOptionSelect}
    />,
  );
  userEvent.type(screen.getByLabelText('autocomplete input'), 'option');
  const list = await screen.findByRole('listbox');
  const optionOne = within(list).getByText('option one');
  userEvent.click(optionOne);
  await waitFor(() => {
    expect(onOptionSelect).toHaveBeenCalledWith(
      expect.any(Object),
      mockOptions[0],
    );
  });
});
