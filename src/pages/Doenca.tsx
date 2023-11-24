import Card from "@/components/Card";
import CardDesc from "@/components/CardDesc";

export function Doenca() {
  return (<>
  <a href="#sarampo">
    <Card titulo="Sarampo" img="/sarampo.png" desc="é uma doença viral altamente contagiosa" desc2="prevenção através da vacinação"/>
  </a>
  <a href="#hiv">
    <Card titulo="HIV" img="/HIV.png" desc="é vírus que ataca o sistema imunológico" desc2="prevenção inclui uso de preservativos"/>
  </a>
  <a href="#tuberculose"> 
    <Card titulo="Tuberculose" img="/tuberculose.png" desc="é infecção bacteriana pulmonar" desc2="prevenção por meio de tratamento medicamentoso"/>
  </a>
  <a href="#difteria">
    <Card titulo="Difteria" img="/diftaria.png" desc="é infecção bacteriana" desc2="evitada por vacinação"/>
  </a>
  <ul> 
    <li id="sarampo">
        <CardDesc titulo="Sarampo" desc="Doença viral contagiosa, afetando milhões globalmente; sintomas incluem febre, erupção cutânea; prevenção por vacina tríplice viral."/>
    </li>
    <li id="hiv">
        <CardDesc titulo="HIV" desc="Vírus que enfraquece sistema imunológico; 38 milhões vivem com HIV; transmissão por fluidos corporais; prevenção inclui preservativos e terapia antirretroviral." />
    </li>
    <li id="tuberculose">
        <CardDesc titulo="Tuberculose" desc="Doença bacteriana pulmonar; 10 milhões novos casos anuais; sintomas: tosse persistente, perda de peso; tratamento com antibióticos; prevenção inclui vacina BCG e detecção precoce."/>
    </li>
    <li id="difteria">
        <CardDesc titulo="Difteria" desc="Infecção bacteriana respiratória; casos raros devido à vacinação; sintomas: dificuldade respiratória; prevenção por vacina tríplice bacteriana. Fontes: OMS e CDC."/>
    </li>
  </ul>
  </>
)}
