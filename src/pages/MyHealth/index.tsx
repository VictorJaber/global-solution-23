import { useState } from 'react';
import { useTheme } from 'styled-components';

import { TaskCard } from '@/components/TaskCard';
import {
  Container,
  IconContainer,
  SummaryCard,
  SummaryHeader,
  SummarySubtitle,
  SummaryTitle,
  SummaryTitleWrapper,
  TasksCardsWrapper,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { BarGraph } from '@/components/BarGraph';
import { MoodCard } from '@/components/MoodCard';

export type TaskVariant = 'water' | 'food' | 'outdoor' | 'steps';

type Task = {
  goal: number;
  current: number;
  type: TaskVariant;
};

export function MyHealth() {
  const { colors } = useTheme();
  const [tasksState, setTasksState] = useState<Task[]>([
    {
      goal: 7,
      current: 1,
      type: 'water',
    },
    {
      goal: 4,
      current: 2,
      type: 'food',
    },
    {
      goal: 2,
      current: 1,
      type: 'outdoor',
    },
    {
      goal: 2500,
      current: 2500,
      type: 'steps',
    },
  ]);

  const uncompletedTasks = tasksState.filter(
    (task) => task.current !== task.goal
  );
  const alltasksDone = uncompletedTasks.length === 0;

  function handleUpdateTask(taskType: TaskVariant) {
    setTasksState((prevValue) => {
      return prevValue.map((task) => {
        if (task.type === taskType && task.current < task.goal) {
          return { ...task, current: task.current + 1 };
        } else {
          return task;
        }
      });
    });
  }

  return (
    <Container>
      <SummaryCard>
        <SummaryHeader>
          <SummaryTitleWrapper>
            <SummaryTitle>Minhas metas</SummaryTitle>
            {alltasksDone && (
              <IconContainer>
                <FontAwesomeIcon
                  icon={faAward}
                  color={colors.success.dark}
                  size="3x"
                />
              </IconContainer>
            )}
          </SummaryTitleWrapper>
          {alltasksDone ? (
            <SummarySubtitle>
              Parabéns! Você concluiu todas as suas metas!
            </SummarySubtitle>
          ) : (
            <SummarySubtitle>
              Você tem <span>{uncompletedTasks.length} tarefas</span> para
              completar
            </SummarySubtitle>
          )}
        </SummaryHeader>
        <TasksCardsWrapper>
          {tasksState.map((task) => (
            <TaskCard
              isCompleted={task.current === task.goal}
              key={task.type}
              type={task.type}
              title={`${task.current}/${task.goal}`}
              onClick={() => handleUpdateTask(task.type)}
            />
          ))}
        </TasksCardsWrapper>
      </SummaryCard>
      <BarGraph />
      <MoodCard />
    </Container>
  );
}
