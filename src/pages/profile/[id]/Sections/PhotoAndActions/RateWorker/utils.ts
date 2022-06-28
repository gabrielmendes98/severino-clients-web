import yup from 'common/utils/yup';

export const initialValues = {
  title: '',
  comment: '',
};

export const validations = yup.object({
  title: yup.string().trim().required(),
  comment: yup.string().trim().required(),
});
