import styled from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;

  img {
    width: 100%;
  }

  h1 {
    position: absolute;
    color: white;
    text-transform: uppercase;
    font-size: 56px;
  }
`;
