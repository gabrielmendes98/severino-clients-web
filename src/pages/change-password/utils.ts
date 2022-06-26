/* eslint-disable prefer-arrow-callback */
import yup from 'common/utils/yup';

export const initialValues = {
  currentPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
};

export const validations = yup.object({
  currentPassword: yup.string().password().trim().required(),
  newPassword: yup.string().password().trim().required(),
  newPasswordConfirm: yup
    .string()
    .password()
    .trim()
    .required()
    .test(
      'mustMatchPasswords',
      'As senhas devem ser as mesmas.',
      function (this, item) {
        return this.parent.newPassword === item;
      },
    ),
});
