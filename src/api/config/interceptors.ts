/* eslint-disable import/no-named-as-default */
import Router from 'next/router';
import Toast from 'common/utils/toast';
import { API_ERRORS } from 'common/constants';

export const handleError = (error: any, { toast = true }) => {
  const message = error.response?.data?.message;
  const status = error.response?.status;

  if ((status === 401 || status === 403) && Router.pathname !== '/login') {
    Router.push(`/login?redirect=${Router.router?.asPath.substring(1)}`);
    Toast.error('Você precisa estar logado para realizar essa ação');
  } else if (toast) {
    if (message) {
      Toast.error(message);
    } else {
      Toast.error(API_ERRORS.DEFAULT);
    }
  }

  return Promise.reject({ ...error, status, message });
};
