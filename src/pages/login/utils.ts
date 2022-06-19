import yup from 'common/utils/yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validations = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().password().trim().required(),
});
