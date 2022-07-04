/* eslint-disable import/no-named-as-default */
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Router from 'next/router';
import yup from 'common/utils/yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validations = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().password().trim().required(),
});

export const handleAuthResponse = (
  state: PayloadAction<
    any,
    string,
    {
      arg: any;
      requestId: string;
      requestStatus: 'fulfilled' | 'rejected';
    }
  >,
) => {
  if (state.meta.requestStatus !== 'rejected') {
    toast.success('Bem-vindo(a) ao Severino');
    const redirectRoute = Router.query.redirect;
    if (redirectRoute) {
      Router.push(String(redirectRoute));
    } else {
      Router.push('/');
    }
  }
};
