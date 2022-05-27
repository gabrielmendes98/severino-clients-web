import Toast from 'common/utils/toast';
import { API_ERRORS } from 'common/constants';

export const handleError = (error: any, { toast = true }) => {
  const message = error.response?.data?.message;
  const status = error.response?.status;

  if (status === 401 || status === 403) {
    window.location.href = `${window.location.origin}/login`;
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
