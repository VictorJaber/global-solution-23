import {Link} from "react-router-dom";
import styled from "styled-components";

interface HomeCardImg {
    $imgUrl: string,

}
export const StyledCard = styled(Link)<HomeCardImg>`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background: center center no-repeat ${({$imgUrl})=>`url(${$imgUrl})`} ;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  
  &:hover {
    transform: scale(1.05); }
`;