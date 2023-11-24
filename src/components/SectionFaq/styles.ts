import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: calc(100% - 80px);
  margin: 40px auto;

  h2 {
    font-style: normal;
    line-height: 150%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  > p {
    text-align: center;
  }

  img {
    width: 30%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const StyledFaq = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 36px;

  .Faq {
    width: 40%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
