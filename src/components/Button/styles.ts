import styled, { css } from 'styled-components';

type Props = {
  $size?: 'sm' | 'md' | 'lg';
  $variant?: 'contained' | 'outlined' | 'text';
  $customColor?: string;
};

export const StyledButton = styled.button<Props>`
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  color: #fff;
  background-color: ${({ theme, $customColor }) =>
    $customColor || theme.colors.primary.main};
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-weight: 700;

  &:disabled {
    color: ${({ theme }) => theme.colors.action.disabled};
    background-color: ${({ theme }) => theme.colors.action.disabledBackground};
    box-shadow: none;
  }

  ${({ $size }) =>
    $size === 'sm' &&
    css`
      padding: 0.25rem 0.625rem;
      font-size: 0.8125rem;
    `}

  ${({ $size }) =>
    $size === 'lg' &&
    css`
      padding: 0.5rem 1.375rem;
      font-size: 0.9375rem;
    `}

    ${({ $variant, theme, $customColor }) =>
    $variant === 'outlined' &&
    css`
      border: 1px solid ${$customColor || theme.colors.primary.main};
      background-color: white;
      color: ${$customColor || theme.colors.primary.main};
      box-shadow: none;
    `}

    ${({ $variant, theme, $customColor }) =>
    $variant === 'text' &&
    css`
      background-color: transparent;
      color: ${$customColor || theme.colors.primary.main};
      box-shadow: none;
    `}

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);

    ${({ $variant, theme, $customColor }) =>
      $variant === 'outlined' &&
      css`
        background-color: ${$customColor || theme.colors.primary.main};
        opacity: 0.4;
      `}

    ${({ $variant, theme, $customColor }) =>
      $variant === 'text' &&
      css`
        background-color: ${$customColor || theme.colors.primary.main};
        opacity: 0.4;
      `}
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
