import { Form, Formik } from 'formik';
import { render, screen, userEvent, waitFor } from 'test-utils';
import Password from '../Password';

it('should match snapshot when hidden', () => {
  render(
    <Formik initialValues={{ password: '123123' }} onSubmit={jest.fn()}>
      <Form>
        <Password name="password" label="password" />
      </Form>
    </Formik>,
  );
  expect(screen.getByLabelText(/password/i)).toMatchSnapshot();
});

it('should match snapshot when showing', async () => {
  render(
    <Formik initialValues={{ password: '123123' }} onSubmit={jest.fn()}>
      <Form>
        <Password name="password" label="password" />
      </Form>
    </Formik>,
  );

  userEvent.click(screen.getByLabelText(/mostrar ou esconder senha/i));

  await waitFor(() => {
    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'text');
  });

  expect(screen.getByLabelText(/password/i)).toMatchSnapshot();
});
