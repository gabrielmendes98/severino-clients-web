import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import ThemeProvider from './common/providers/Theme';
import { makeStore } from './common/store/store';

// const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
//   <ThemeProvider>{children}</ThemeProvider>
// );

// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, 'wrapper'>,
// ) => render(ui, { wrapper: wrapper.withRedux(Wrapper), ...options });

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
    <Provider store={makeStore({})}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );

  return { ...render(ui, { wrapper: Wrapper, ...options }) };
};

/* eslint-disable */
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
/* eslint-enable */
