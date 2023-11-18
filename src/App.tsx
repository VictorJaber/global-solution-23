import { RouterProvider } from 'react-router-dom';

import router from './router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
