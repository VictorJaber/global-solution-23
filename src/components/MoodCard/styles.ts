import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

const tiltFromLeft = keyframes`
 0% {
    transform: rotateX(-30deg) translateX(-300px) skewX(-30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

export const MoodCardContainer = styled.div`
  animation: ${tiltFromLeft} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey[50]};
  padding: 24px;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 32px;
`;

const trackingExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const MoodCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grey[700]};
  animation: ${trackingExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

export const MoodWrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 16px;
  justify-content: center;
`;

const pulsate = keyframes`
0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }`;

export const StyledFaIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    animation: ${pulsate} 0.5s ease-in-out infinite both;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  small {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
