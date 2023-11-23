import styled from "styled-components";

export const StyledInfoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: calc(100% - 80px);
  margin: 0 auto;
`;

export const StyledInfoCardsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    text-transform: uppercase;
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

  & span {
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
`;

export const StyledInfoCardsImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledInfoCardsMainCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 56px;
`;

export const StyledInfoCardsMainImage = styled.img`
  width: 250px;
  height: 250px;
`;

export const StyledInfoCardsMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
