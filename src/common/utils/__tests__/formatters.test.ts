import { formatBoolean, formatPhone, onlyNumbersFormat } from '../formatters';

describe('formatPhone', () => {
  test('should return formatted phone when match phone regex', () => {
    const phone = formatPhone('34999999999');
    expect(phone).toEqual('(34) 9 9999-9999');
  });

  test('should return unformatted phone when phone not match phone regex', () => {
    const phone = formatPhone('123123');
    expect(phone).toEqual('123123');
  });
});

describe('formatBoolean', () => {
  test('should return Sim when is true', () => {
    const label = formatBoolean(true);
    expect(label).toEqual('Sim');
  });

  test('should return Não when is false', () => {
    const label = formatBoolean(false);
    expect(label).toEqual('Não');
  });
});

describe('onlyNumbersFormat', () => {
  test('should remove characters from string and leave only numbers', () => {
    const numbers = onlyNumbersFormat('123abc123');
    expect(numbers).toEqual('123123');
  });
});
