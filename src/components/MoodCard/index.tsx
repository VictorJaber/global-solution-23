import { useTheme } from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCircleQuestion,
  faFaceAngry,
  faFaceLaugh,
  faFaceLaughBeam,
  faFaceMeh,
  faSadTear,
} from '@fortawesome/free-solid-svg-icons';

import {
  MoodCardContainer,
  MoodCardTitle,
  MoodWrapper,
  StyledFaIcon,
  StyledIconWrapper,
} from './styles';

export function MoodCard() {
  const { colors } = useTheme();
  const [moodState, setMoodState] = useState(faCircleQuestion);
  const [colorState, setColorState] = useState(colors.action.disabled);

  function handleMood(mood: IconDefinition, color: string) {
    setMoodState(mood);
    setColorState(color);
  }

  return (
    <MoodCardContainer>
      <MoodCardTitle>Como você está se sentindo hoje?</MoodCardTitle>
      <FontAwesomeIcon icon={moodState} size="6x" color={colorState} />
      <MoodWrapper>
        <StyledIconWrapper>
          <StyledFaIcon
            icon={faSadTear}
            size="3x"
            color={colors.info.light}
            onClick={() => handleMood(faSadTear, colors.info.light)}
          />
          <small>Triste</small>
        </StyledIconWrapper>
        <StyledIconWrapper>
          <StyledFaIcon
            data-animation="bounce"
            icon={faFaceAngry}
            size="3x"
            color={colors.error.light}
            onClick={() => handleMood(faFaceAngry, colors.error.light)}
          />
          <small>Nervoso</small>
        </StyledIconWrapper>

        <StyledIconWrapper>
          <StyledFaIcon
            icon={faFaceMeh}
            size="3x"
            color={colors.warning.light}
            onClick={() => handleMood(faFaceMeh, colors.warning.light)}
          />
          <small>Normal</small>
        </StyledIconWrapper>

        <StyledIconWrapper>
          <StyledFaIcon
            icon={faFaceLaugh}
            size="3x"
            color={colors.success.light}
            onClick={() => handleMood(faFaceLaugh, colors.success.light)}
          />
          <small>Feliz</small>
        </StyledIconWrapper>

        <StyledIconWrapper>
          <StyledFaIcon
            icon={faFaceLaughBeam}
            size="3x"
            color={colors.success.main}
            onClick={() => handleMood(faFaceLaughBeam, colors.success.main)}
          />
          <small>Ótimo</small>
        </StyledIconWrapper>
      </MoodWrapper>
    </MoodCardContainer>
  );
}
