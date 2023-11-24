import styled from 'styled-components';

export const StyledInfoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: calc(100% - 80px);
  margin: 40px auto;
`;

export const StyledInfoCardsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 50%;

  h2 {
    text-transform: uppercase;
    font-style: normal;
    line-height: 150%;
    letter-spacing: 0.04em;
  }

  p {
    text-align: center;
  }
`;

export const StyledInfoCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  & span {
    color: #fff;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    opacity: 0;
  }

  &:hover {
    span {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.05);

    &:before {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
      color: white;
      border-radius: 10px;
    }
  }
`;

export const StyledInfoCardsImage = styled.img`
  width: 145px;
  height: 145px;
  border-radius: 10px;
`;

export const StyledInfoCardsMainCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;
  transition: all 0.3s ease-in-out;
`;

export const StyledInfoCardsMainImage = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 10px;
`;

export const StyledInfoCardsMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 40%;
`;
