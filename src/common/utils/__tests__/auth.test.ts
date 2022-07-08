import { getAuthProviderToken } from '../auth';

test('getAuthProviderToken should return void string by default', () => {
  // @ts-ignore: Unreachable code error
  const token = getAuthProviderToken('', {});
  expect(token).toBe('');
});

test('getAuthProviderToken should return token when provider is GOOGLE', () => {
  const token = getAuthProviderToken('GOOGLE', { tokenId: 'brele' });
  expect(token).toBe('brele');
});
