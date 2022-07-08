import { Form, Formik } from 'formik';
import { render, waitFor, screen, userEvent } from 'test-utils';
import Input from '../index';

it('should match snapshot', () => {
  const { container } = render(
    <Formik initialValues={{ test: '' }} onSubmit={jest.fn()}>
      <Form>
        <Input name="test" label="test input" />
        <button type="submit">submit</button>
      </Form>
    </Formik>,
  );
  expect(container).toMatchSnapshot();
});

it('should update form values', async () => {
  const onSubmit = jest.fn();
  render(
    <Formik initialValues={{ test: '' }} onSubmit={onSubmit}>
      <Form>
        <Input name="test" label="test input" />
        <button type="submit">submit</button>
      </Form>
    </Formik>,
  );

  await userEvent.type(screen.getByLabelText('test input'), 'lalala');
  userEvent.click(screen.getByRole('button', { name: 'submit' }));

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith(
      {
        test: 'lalala',
      },
      expect.any(Object),
    );
  });
});
