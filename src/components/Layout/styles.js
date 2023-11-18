import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  header {
    background-color: #ddd;
    padding: 32px;
    position: sticky;
    top: 0;

    nav a.active {
      color: blue;
    }
  }

  main {
    padding: 32px;
  }

  footer {
    background-color: #ddd;
    padding: 32px;
  }
`;
