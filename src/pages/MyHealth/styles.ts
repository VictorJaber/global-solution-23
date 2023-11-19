import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: 2fr 3fr;
  }
`;

export const SummaryCard = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey[50]};
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 440px;
  }
`;

export const SummaryHeader = styled.div`
  background-image: linear-gradient(to right, #0ba360 0%, #3cba92 100%);
  padding: 32px 24px 96px;
  color: white;
  border-radius: 12px;
`;

export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryTitle = styled.h1`
  margin-bottom: 8px;
`;

const swirlInBck = keyframes`
  0% {
    transform: rotate(540deg) scale(5);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  animation: ${swirlInBck} 0.65s ease-out both;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const SummarySubtitle = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;

  span {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const TasksCardsWrapper = styled.div`
  display: grid;
  width: -webkit-fill-available;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr 1fr;
    position: absolute;
    top: 25%;
  }
`;
