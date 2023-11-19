import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
  },
  'h1,h2,h3,h4,h5,h6,span,p': {
    margin: 0,
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
