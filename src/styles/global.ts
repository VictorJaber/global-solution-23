import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  ul: {
    listStyle: 'none',
  },
  img: {
    maxWidth: '100%',
    display: 'block',
  },
});

export default GlobalStyle;
