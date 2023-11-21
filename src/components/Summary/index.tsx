import { faAward, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';

import { TaskCard } from '../TaskCard';
import {
  SummaryCard,
  SummaryHeader,
  SummaryTitleWrapper,
  SummaryTitle,
  IconContainer,
  SummarySubtitle,
  TasksCardsWrapper,
  SummaryTitleContainer,
} from './styles';
import { useTasks } from '@/hooks/useTasks';

export function Summary() {
  const { colors } = useTheme();

  const {
    allTasksDone,
    handleUpdateTask,
    uncompletedTasks,
    tasks,
    setEditGoalsOpen,
  } = useTasks();

  return (
    <SummaryCard>
      <SummaryHeader>
        <SummaryTitleContainer>
          <SummaryTitleWrapper>
            <SummaryTitle>Minhas metas</SummaryTitle>
            <FontAwesomeIcon
              onClick={() => setEditGoalsOpen(true)}
              cursor="pointer"
              icon={faPencil}
              color={colors.common.white}
              size="xl"
            />
          </SummaryTitleWrapper>
          {allTasksDone && (
            <IconContainer>
              <FontAwesomeIcon
                icon={faAward}
                color={colors.success.dark}
                size="3x"
              />
            </IconContainer>
          )}
        </SummaryTitleContainer>
        {allTasksDone ? (
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
        {tasks.map((task) => (
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
  );
}
