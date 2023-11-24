import { useState } from "react";
import {
  StyledInfoCardsContainer,
  StyledInfoCardsText,
  StyledInfoCards,
  StyledInfoCard,
  StyledInfoCardsImage,
  StyledInfoCardsMainImage,
  StyledInfoCardsMainCard,
  StyledInfoCardsMainInfo,
} from "./styles";

export default function InfoCard({ title, text, cards }) {
  const [currentCard, setCurrentCard] = useState(cards[0]);

  return (
    <StyledInfoCardsContainer>
      <StyledInfoCardsText>
        <h2>{title}</h2>
        <p>{text}</p>
      </StyledInfoCardsText>
      <StyledInfoCards>
        {cards.map((card, index) => (
          <StyledInfoCard
            key={card.title + index}
            onClick={() => setCurrentCard(card)}
          >
            <StyledInfoCardsImage src={card.image} alt={card.alt} />
            <span>{card.title}</span>
          </StyledInfoCard>
        ))}
      </StyledInfoCards>
      <StyledInfoCardsMainCard>
        <StyledInfoCardsMainImage
          src={currentCard.image}
          alt={currentCard.alt}
        />
        <StyledInfoCardsMainInfo>
          <h2>{currentCard.title}</h2>
          <p>{currentCard.text}</p>
        </StyledInfoCardsMainInfo>
      </StyledInfoCardsMainCard>
    </StyledInfoCardsContainer>
  );
}
