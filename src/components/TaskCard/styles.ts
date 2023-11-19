import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  padding: 16px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 16px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.action.disabledBackground};
  cursor: pointer;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.action.hover};
  }

  &:disabled {
    opacity: 0;
    visibility: hidden;
  }
`;
