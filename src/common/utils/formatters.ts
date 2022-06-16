export const onlyNumbersFormat = (value: string) => value.replace(/\D/g, '');

export const formatPhone = (phoneNumber: string) => {
  var cleaned = ('' + phoneNumber).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + ' ' + match[3] + '-' + match[4];
  }
  return phoneNumber;
};
