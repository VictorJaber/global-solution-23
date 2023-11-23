import { CardContainer, StyledCard, Txt } from '@components/HomeCard/styles.ts';

interface HomeCardProps {
  path: string;
  imgUrl: string;
  title: string;
}
export function HomeCard({ path, imgUrl, title }: HomeCardProps) {
  return (
    <CardContainer>
      <StyledCard to={path} $imgUrl={imgUrl}>
        <Txt>{title}</Txt>
      </StyledCard>
    </CardContainer>
  );
}
