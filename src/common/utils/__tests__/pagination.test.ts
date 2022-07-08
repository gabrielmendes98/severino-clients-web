import { getPaginationFromQuery } from '../pagination';

describe('getPaginationFromQuery', () => {
  test('should return page 1 and order by void by default', () => {
    const params = getPaginationFromQuery({});
    expect(params).toEqual({
      page: 1,
      orderBy: '',
    });
  });

  test('should return page and order by void by when passed on query', () => {
    const params = getPaginationFromQuery({
      page: '10',
      orderBy: 'bestRating',
    });
    expect(params).toEqual({
      page: '10',
      orderBy: 'bestRating',
    });
  });

  test('should return back other passed values', () => {
    const params = getPaginationFromQuery({
      page: '10',
      orderBy: 'bestRating',
      otherParam: 'otherParam',
    });
    expect(params).toEqual(
      expect.objectContaining({
        otherParam: 'otherParam',
      }),
    );
  });
});
