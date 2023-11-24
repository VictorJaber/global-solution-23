import { faqQuestions } from "./faqQuestions";
import Faq from "@/components/Faq";
import { StyledSection, StyledFaq } from "./styles";

export default function SectionFaq() {
  return (
    <StyledSection>
      <h2> Perguntas frequentes</h2>
      <p>
        Veja as perguntas frequentes sobre doenças não transmissíveis e tire
        suas dúvidas
      </p>

      <StyledFaq>
        <img
          src="https://img.freepik.com/vetores-gratis/conjunto-de-icones-medicos-3d-desenhos_53876-61792.jpg?w=826&t=st=1700774976~exp=1700775576~hmac=d9fbd1c6ad2477ec66d3ec1a7986b0a7f0d8085bdf32824bb7580f2fbc6711e9"
          alt="Perguntas frequentes"
        ></img>

        <Faq questions={faqQuestions} />
      </StyledFaq>
    </StyledSection>
  );
}
