import styled, { keyframes } from 'styled-components';

const focusIn = keyframes`
 0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

const slideFromLeft = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
 0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  gap: 32px;

  & ~ & {
    margin-top: 32px;
  }

  & iframe {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${focusIn} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  & h1 {
    margin-bottom: 8px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  & h2 {
    margin-bottom: 8px;
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  & button {
    align-self: start;
    color: white;
    text-transform: uppercase;
  }
`;

export const TitleForm = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  font-weight: normal;
`;

export const Form = styled.div`
  padding: 20px;
  background-color: #1976d2;
  text-align: left;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  color: white;
  flex: 1;
  animation: ${slideFromLeft} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 900px) {
    order: 1;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 14px;
    transition: border-color 0.3s ease-in-out;
  }

  textarea {
    resize: none;
  }

  select:focus,
  select:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    border-color: #0e79b2;
    transition: border-color 0.3s ease-in-out;
  }
`;

export const RowInputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  ${InputGroup} {
    width: 48%;
  }
`;

export const Boxes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  animation: ${slideFromRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
  }
`;
