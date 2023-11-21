import { TaskFormData } from '@/components/TasksModal';
import { ReactNode, createContext, useState } from 'react';

export type TaskVariant = 'water' | 'food' | 'outdoor' | 'steps';

type Task = {
  goal: number;
  current: number;
  type: TaskVariant;
};

type TaskContextData = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  allTasksDone: boolean;
  handleUpdateTask: (taskType: TaskVariant) => void;
  uncompletedTasks: Task[];
  editGoalsOpen: boolean;
  setEditGoalsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateGoals: (data: TaskFormData) => void;
};

export const TasksContext = createContext({} as TaskContextData);

const initialValues: Task[] = [
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
];

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasksState, setTasksState] = useState<Task[]>(initialValues);
  const [editGoalsOpen, setEditGoalsOpen] = useState(false);

  const uncompletedTasks = tasksState.filter(
    (task) => task.current !== task.goal
  );
  const allTasksDone = uncompletedTasks.length === 0;

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

  function handleUpdateGoals(data: TaskFormData) {
    setTasksState([
      {
        goal: data.water,
        current: 0,
        type: 'water',
      },
      {
        goal: data.food,
        current: 0,
        type: 'food',
      },
      {
        goal: data.outdoor,
        current: 0,
        type: 'outdoor',
      },
      {
        goal: data.steps,
        current: 0,
        type: 'steps',
      },
    ]);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState,
        setTasks: setTasksState,
        allTasksDone,
        handleUpdateTask,
        uncompletedTasks,
        editGoalsOpen,
        setEditGoalsOpen,
        handleUpdateGoals,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
