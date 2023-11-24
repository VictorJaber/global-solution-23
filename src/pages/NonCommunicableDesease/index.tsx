import Banner from "@/components/Banner";
import InfoCard from "@/components/InfoCard";
import Survey from "@/components/Survey";
import SectionFaq from "../../components/SectionFaq/SectionFaq";

import { cards } from "./cards";
import { quiz } from "./questions";

export default function NonCommunicableDesease() {
  return (
    <>
      <Banner
        imageSrc="https://img.freepik.com/fotos-gratis/vista-superior-do-coracao-dia-mundial-com-espaco-de-copia_23-2148610468.jpg?w=1800&t=st=1700775924~exp=1700776524~hmac=d5d587f4cffdd986fbcfffb730345f2984722ceb000bdfe0e2463335ba7aa1f1"
        imageSrcMobile="https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Banner"
      />
      <InfoCard
        title="Principais doenças não transmissíveis"
        text="As Doenças Não Transmissíveis (DNTs) referem-se a condições crônicas de saúde que não são causadas por agentes infecciosos e não são transmitidas de uma pessoa para outra. Essas doenças têm uma progressão muitas vezes lenta e persistem ao longo do tempo."
        cards={cards}
      />

      <Survey
        title="Pesquisa"
        text="Descubra como seus hábitos diários influenciam no desenvolvimento de doenças não transmissíveis"
        quiz={quiz}
      />

      <SectionFaq />
    </>
  );
}
