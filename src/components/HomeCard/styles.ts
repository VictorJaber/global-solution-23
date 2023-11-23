import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface HomeCardImg {
  $imgUrl: string;
}

const txtAnimation = keyframes`
    0% {letter-spacing: -0.5em; opacity: 0;} 
    40% {opacity: 0.6 }
    100%{opacity: 1}
`;

export const Txt = styled.p`
  font-size: 1.25rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

export const StyledCard = styled(Link)<HomeCardImg>`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background: center center no-repeat ${({ $imgUrl }) => `url(${$imgUrl})`};
  transition: all 0.3s ease-in-out;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);

    & p {
      animation: ${txtAnimation} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
      display: block;
    }

    &:before {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
      content: '';
      color: white;
    }
  }
`;

export const CardContainer = styled.div`
  position: relative;
`;
