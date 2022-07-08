import '@testing-library/jest-dom/extend-expect';

jest.mock('lodash.debounce', () =>
  jest.fn(fn => {
    fn.cancel = jest.fn();
    return fn;
  }),
);
