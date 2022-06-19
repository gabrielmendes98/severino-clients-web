import Toast from 'common/utils/toast';
import { API_ERRORS } from 'common/constants';

export const handleError = (error: any, { toast = true }) => {
  const message = error.response?.data?.message;
  const status = error.response?.status;

  if (toast) {
    if (message) {
      Toast.error(message);
    } else {
      Toast.error(API_ERRORS.DEFAULT);
    }
  }

  return Promise.reject({ ...error, status, message });
};
