import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';
import { passwordValidate } from './passwordValidate';

export const validationMessages = {
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    email: 'E-mail inválido',
  },
};

yup.setLocale(validationMessages);

yup.addMethod<yup.StringSchema>(yup.string, 'password', passwordValidate);

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    password(): StringSchema<TType, TContext>;
  }
}

export default yup;
