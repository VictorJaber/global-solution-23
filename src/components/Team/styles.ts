import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
 0% {
      transform: rotate(0)
  }

  100% {
      transform: rotate(360deg);
  }
`;
const maintain = keyframes`
  0% {
      transform: rotate(0);
  }

  100% {
      transform: rotate(-360deg);
  }
`;
const scale = keyframes`
  0% {
      transform: scale(1.2);
  }

  100% {
      transform: scale(1);
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  --circleDiameter: 300px;
  --planets: calc(var(--circleDiameter) / 3);
`;

export const Circle = styled.div`
  position: relative;
  width: var(--circleDiameter);
  height: var(--circleDiameter);
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary.main};
`;

export const InnerImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 50px;
  width: 100px;
  height: 100px;
`;
export const CircleRotate = styled.div`
  position: relative;
  top: -7px;
  left: -7px;
  width: 100%;
  height: 100%;
  border: 7px solid white;
  border-radius: 100%;
  animation: ${rotate} 30s linear infinite;
`;

export const Avatar = styled.a`
  position: absolute;
  display: block;
  width: var(--planets);
  aspect-ratio: 1;
  border-radius: 100%;
  animation: ${maintain} 30s linear infinite;

  &:nth-child(1) {
    top: calc(-1 * var(--planets) / 2);
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 3 - 50px);
  }

  &:nth-child(2) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 2 - 50px);
    right: calc(-1 * var(--planets) / 2);
  }

  &:nth-child(3) {
    top: calc(var(--circleDiameter) / 2 - var(--planets) / 3 - 50px);
    left: calc(-1 * var(--planets) / 2);
  }

  &:nth-child(4) {
    left: calc(var(--circleDiameter) / 2 - var(--planets) / 2 + 60px);
    bottom: calc(-1 * var(--planets) / 2);
  }

  &:nth-child(5) {
    right: calc(var(--circleDiameter) / 2 - var(--planets) / 3 + 50px);
    bottom: calc(-1 * var(--planets) / 2);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    animation: ${scale} 1s linear infinite alternate;
  }
`;
