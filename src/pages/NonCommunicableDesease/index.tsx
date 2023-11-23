import Banner from "@/components/Banner";
import InfoCard from "@/components/InfoCard";
import { cards } from "./cards";
import Survey from "@/components/Survey";

import { quiz } from "./questions";

export default function NonCommunicableDesease() {
  //   const questions = [
  //     {
  //       question: " Como você descreveria seus hábitos alimentares?",
  //       alternativas: [
  //         { text: "Consumo regular de frutas, vegetais e alimentos nutritivos" },
  //         {
  //           text: "Algumas escolhas saudáveis misturadas com alimentos processados",
  //         },
  //         {
  //           text: "Predominância de alimentos processados e com alto teor de gordura e açúcares",
  //         },
  //       ],
  //     },
  //     {
  //       question:
  //         " Com que frequência você pratica atividade física durante a semana?",
  //       alternativas: [
  //         { text: "Pelo menos 150 minutos de exercício moderado" },
  //         { text: "Alguma atividade, mas abaixo das recomendações" },
  //         { text: "Atividade física rara ou inexistente" },
  //       ],
  //     },
  //   ];
  return (
    <>
      <Banner
        imageSrc="https://www.state.gov/wp-content/uploads/2019/04/shutterstock_683522173-2560x852.jpg"
        alt="Banner"
      />
      <InfoCard
        title="As doenças"
        text="tome muito cuidado com elas"
        cards={cards}
      />

      <Survey
        title="Pesquisa"
        text="responda a pesquisa e ganhe pontos"
        quiz={quiz}
      />
    </>
  );
}
