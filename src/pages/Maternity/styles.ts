import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-inline: 0 auto;
  padding-inline: 10%;
`;

export const ImageWithOverlay = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
`;

export const ImageTitle = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0, 0, 0, 0.5 ); /* Cor de fundo acizentada com transparência */
`;

export const TitleH2 = styled.h2`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  line-height: 150%;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  text-align: justify;
  line-height: 150%;
  margin-bottom: 15px;
`;

export const SectionText = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 15px;
`;

export const ImageText = styled.img`
    max-height: 300px;
    max-width: 40%;
`