import styled, { keyframes } from 'styled-components';

export const CarrouselTitle = styled.h2`
  color: ${({ theme }) => theme.colors.info.dark};
  margin-bottom: 16px;
`;

export const NewsInfo = styled.div`
  color: ${({ theme }) => theme.colors.common.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px 16px 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease-in-out;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    opacity: 0.8;
  }

  p {
    opacity: 0.6;
  }
`;

const tiltFromRight = keyframes`
  0% {
    transform: rotateX(-30deg) translateX(300px) skewX(30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
`;

export const CarrouselContainer = styled.div`
  animation: ${tiltFromRight} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  & .carousel-item.active:hover {
    ${NewsInfo} {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
