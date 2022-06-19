import yup from 'common/utils/yup';

export const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const validations = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  password: yup.string().password().trim().required(),
});
