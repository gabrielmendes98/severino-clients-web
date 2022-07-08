import { render, screen, userEvent, waitFor } from 'test-utils';
import RadioGroup from '../RadioGroup';

const options = [
  { label: 'option 1', value: '1' },
  { label: 'option 2', value: '2' },
];

it('should match snapshot with name', () => {
  const { container } = render(
    <RadioGroup label="radio group" name="radio-test" options={options} />,
  );
  expect(container).toMatchSnapshot();
});

it('should match snapshot with id', () => {
  const { container } = render(
    <RadioGroup
      label="radio group"
      name="radio-test"
      id="custom-id"
      options={options}
    />,
  );
  expect(container).toMatchSnapshot();
});

it('should call onChange when change option', async () => {
  const onChange = jest.fn();
  render(
    <RadioGroup
      label="radio group"
      name="radio-test"
      options={options}
      onChange={onChange}
    />,
  );

  userEvent.click(screen.getByLabelText('option 2'));

  await waitFor(() => {
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), '2');
  });
});
