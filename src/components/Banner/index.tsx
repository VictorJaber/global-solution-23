import { isMobile } from "react-device-detect";
import { StyledBanner } from "./styles";

export default function Banner({ imageSrc, imageSrcMobile, alt }) {
  return (
    <StyledBanner>
      <img src={isMobile ? imageSrcMobile : imageSrc} alt={alt} />
      <h1>Doenças não transmissíveis</h1>
    </StyledBanner>
  );
}
