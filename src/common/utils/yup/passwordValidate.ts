/* eslint-disable func-style */
/* eslint-disable func-names */
export const passwordValidationMessage =
  'Sua senha deve ter ao menos 6 caracteres';

export function passwordValidate(this: any) {
  return this.test(
    'passwordValidation',
    passwordValidationMessage,
    function (this: any, value = '') {
      const { path, createError } = this;

      return (
        (value && value.length >= 6) ||
        createError({ path, message: passwordValidationMessage })
      );
    },
  );
}
