import { useTheme } from 'styled-components';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import {
  faDroplet,
  faUtensils,
  faSun,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons';

import { Container, IconButton, Subtitle, Title, TitleWrapper } from './styles';
import { TaskVariant } from '@/contexts/TasksProvider';

type TaskCardProps = {
  iconProps?: FontAwesomeIconProps;
  type: TaskVariant;
  title: string;
  onClick: () => void;
  isCompleted: boolean;
};

const MAP_SUBTITLES = {
  water: "copos d'água consumidos",
  food: 'refeições feitas',
  outdoor: 'atividades ao ar livre',
  steps: 'passos dados',
};

export function TaskCard({
  type,
  title,
  onClick,
  isCompleted,
  iconProps,
}: TaskCardProps) {
  const { colors } = useTheme();

  const MAP_ICONS = {
    water: {
      iconColor: colors.primary.light,
      icon: faDroplet,
    },
    food: {
      iconColor: colors.grey[500],
      icon: faUtensils,
    },
    outdoor: {
      iconColor: colors.warning.light,
      icon: faSun,
    },
    steps: {
      iconColor: colors.secondary.main,
      icon: faShoePrints,
    },
  };

  return (
    <Container>
      <TitleWrapper>
        <FontAwesomeIcon
          {...iconProps}
          icon={MAP_ICONS[type].icon}
          color={MAP_ICONS[type].iconColor}
          size="lg"
        />
        <IconButton onClick={onClick} disabled={isCompleted}>
          <FontAwesomeIcon
            icon={faPlus}
            color={colors.action.active}
            size="lg"
          />
        </IconButton>
      </TitleWrapper>
      <Title>{title}</Title>
      <Subtitle>{MAP_SUBTITLES[type]}</Subtitle>
    </Container>
  );
}
