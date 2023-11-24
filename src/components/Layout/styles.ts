import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  main {
    padding: 32px;

    @media (max-width: 425px) {
      padding: 16px;
    }
  }
`;
