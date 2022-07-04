/* eslint-disable import/no-named-as-default */
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Router from 'next/router';

export const getAuthProviderToken = (
  provider: OAuthProvider,
  response: any,
) => {
  switch (provider) {
    case 'GOOGLE':
      return response.tokenId as string;
    default:
      return '';
  }
};

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
