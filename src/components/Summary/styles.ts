import styled, { keyframes } from 'styled-components';

export const flipInVerRight = keyframes`
  0% {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }`;

export const SummaryCard = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey[50]};
  position: relative;
  box-shadow: ${({ theme }) => theme.colors.shadow[1]};
  animation: ${flipInVerRight} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

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

export const SummaryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryTitleWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SummaryTitle = styled.h1`
  margin-bottom: 8px;
`;

export const SummarySubtitle = styled.p`
  font-size: 0.875rem;
  opacity: 0.8;

  span {
    font-weight: 700;
    text-decoration: underline;
  }
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
