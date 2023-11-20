import { BarGraph } from '@/components/BarGraph';
import { MoodCard } from '@/components/MoodCard';
import { CarrouselNews } from '@/components/CarrouselNews';
import { Summary } from '@/components/Summary';
import { Container } from './styles';

export function MyHealth() {
  return (
    <Container>
      <Summary />
      <BarGraph />
      <MoodCard />
      <CarrouselNews />
    </Container>
  );
}
