import styled from 'styled-components';

export const Result = styled.div`
  color: ${({ theme }) => theme.colors.primary.light};
  padding: 20px;
`;

export const ResultTitle = styled.h3``;

export const Questions = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;
