import { StyledContainer, StyledBanner } from "./styles";

export default function Banner({ imageSrc, alt }) {
  return (
    <StyledContainer>
      <StyledBanner>
        <img src={imageSrc} alt={alt} />
      </StyledBanner>
    </StyledContainer>
  );
}
