import { BarGraph } from '@/components/BarGraph';
import { MoodCard } from '@/components/MoodCard';
import { CarrouselNews } from '@/components/CarrouselNews';
import { Summary } from '@/components/Summary';
import { TasksModal } from '@/components/TasksModal';
import { TasksProvider } from '@/contexts/TasksProvider';
import { Container } from './styles';

export function MyHealth() {
  return (
    <Container>
      <TasksProvider>
        <Summary />
        <BarGraph />
        <MoodCard />
        <CarrouselNews />
        <TasksModal />
      </TasksProvider>
    </Container>
  );
}
