import { StyledBanner } from "./styles";

export default function Banner({ imageSrc, alt }) {
  return (
    <StyledBanner>
      <img src={imageSrc} alt={alt} />
      <h1>Doenças não transmissíveis</h1>
    </StyledBanner>
  );
}
