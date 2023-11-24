import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-inline: 0 auto;
  padding-inline: 10%;

  @media (max-width: 900px) {
    padding-inline: initial;
  }
`;

export const ImageWithOverlay = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
  height: 300px;
  width: 100%;
  background: url('/maeFilho.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleH2 = styled.h2`
  color: white;
  font-weight: bold;
  line-height: 150%;
  z-index: 1;
  text-align: center;
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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageText = styled.img`
  max-height: 300px;
  max-width: 40%;
  object-fit: cover;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;
