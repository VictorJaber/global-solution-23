import styled from "styled-components";

export const Quiz = styled.div`
  height: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 30px;
`;

export const Result = styled.div`
  color: ${({ theme }) => theme.colors.primary.light};
  padding: 20px;
`;

export const ResultTitle = styled.h3``;

export const Questions = styled.div`
  padding: 20px;

  h2 {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
  }

  span{
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  p {
    cursor: pointer;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 5px;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.primary.light}; /* Cor primária light */
    }

    &.selected {
      background-color: ${({ theme }) =>
        theme.colors.secondary.main}; /* Cor secundária main */
      color: #fff;
    }
    button {
      background-color: ${({ theme }) =>
        theme.colors.primary.main}; /* Cor primária */
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:disabled {
        background-color: ${({ theme }) =>
          theme.colors.secondary.dark}; /* Cor secundária dark */
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${({ theme }) =>
          theme.colors.primary.light}; /* Cor primária light */
      }
    }
  }
`;
