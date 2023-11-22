import {StyledCard} from "@components/HomeCard/styles.ts";

interface HomeCardProps {
    path: string,
    imgUrl: string,
}
export function HomeCard ({path, imgUrl}:HomeCardProps){
    return (
        <StyledCard to = {path} imgUrl = {imgUrl}/>
    )
}