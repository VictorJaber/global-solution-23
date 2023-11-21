import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
`;

export const StyledDialog = styled.dialog`
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  border: none;
  animation: ${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-inline: 16px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.primary};

  h2 {
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.action.active};
  border: none;
  background-color: transparent;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 24px;
  row-gap: 16px;
  margin-top: 24px;

  label {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-left: 8px;
  }

  button {
    grid-column: 1 / -1;
  }

  small {
    color: ${({ theme }) => theme.colors.error.light};
    font-size: 0.75rem;
    margin-bottom: 8px;
  }
`;
