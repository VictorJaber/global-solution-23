import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faDroplet,
  faShoePrints,
  faSun,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Backdrop,
  CloseButton,
  FormContainer,
  StyledDialog,
  TitleWrapper,
} from './styles';
import { Button } from '../Button';
import { createRipple } from '@/utils/createRipple';
import { InferType } from 'yup';
import { useTasks } from '@/hooks/useTasks';

yup.setLocale({
  mixed: {
    notType: 'Deve ser um número',
  },
  number: {
    min: 'Deve ser maior que 0',
    integer: 'Deve ser um número inteiro',
    positive: 'Deve ser um número positivo',
  },
});

const SCHEMA = yup
  .object()
  .shape({
    water: yup.number().required().positive().integer(),
    food: yup.number().required().positive().integer(),
    outdoor: yup.number().required().positive().integer(),
    steps: yup.number().required().positive().integer(),
  })
  .required();

export type TaskFormData = InferType<typeof SCHEMA>;

export function TasksModal() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      water: 1,
      outdoor: 1,
      food: 1,
      steps: 1,
    },
    resolver: yupResolver(SCHEMA),
  });

  const { editGoalsOpen, setEditGoalsOpen, handleUpdateGoals } = useTasks();

  function handleChangeTasks(data: TaskFormData) {
    handleUpdateGoals(data);
    setEditGoalsOpen(false);
  }

  return (
    <>
      {editGoalsOpen ? (
        <Backdrop>
          <StyledDialog open>
            <TitleWrapper>
              <h2>Edite suas metas diárias</h2>
              <CloseButton>
                <FontAwesomeIcon
                  icon={faClose}
                  size="2xl"
                  onClick={() => setEditGoalsOpen(false)}
                />
              </CloseButton>
            </TitleWrapper>
            <FormContainer onSubmit={handleSubmit(handleChangeTasks)}>
              <div>
                <FontAwesomeIcon icon={faDroplet} />
                <label htmlFor="water" className="form-label">
                  Nº de copos d'água
                </label>

                <input
                  {...register('water')}
                  type="number"
                  className="form-control"
                  id="water"
                  min={1}
                />
                <small>{errors.water?.message}</small>
              </div>
              <div>
                <FontAwesomeIcon icon={faUtensils} />
                <label htmlFor="food" className="form-label">
                  Nº de refeições
                </label>

                <input
                  {...register('food')}
                  type="number"
                  className="form-control"
                  id="food"
                  min={1}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faSun} />
                <label htmlFor="outdoor" className="form-label">
                  Nº de atividades ao ar livre
                </label>

                <input
                  {...register('outdoor')}
                  type="number"
                  className="form-control"
                  id="outdoor"
                  min={1}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faShoePrints} />
                <label htmlFor="steps" className="form-label">
                  Nº de passos
                </label>

                <input
                  {...register('steps')}
                  type="number"
                  className="form-control"
                  id="steps"
                  min={1}
                />
              </div>
              <Button disabled={!isValid} onClick={createRipple}>
                Confirmar
              </Button>
            </FormContainer>
          </StyledDialog>
        </Backdrop>
      ) : null}
    </>
  );
}
