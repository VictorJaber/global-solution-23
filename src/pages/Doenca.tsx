import Card from "@/components/Card";
import CardDesc from "@/components/CardDesc";



export function Doenca() {
  return (<>
  <Card titulo="Sarampo" img="/sarampo.png" desc="É uma doença infecciosa grave, causada por um vírus, e pode ser fatal" desc2="teste"/>
  <Card titulo="HIV" img="/HIV.png" desc="descrição 2" desc2=""/>
  <Card titulo="Tuberculose" img="/tuberculose.png" desc="descrição 3" desc2=""/>
  <Card titulo="Difteria" img="/diftaria.png" desc="descrição 1" desc2=""/>
  <CardDesc titulo="Difteria" img="/diftaria.png" desc="descrição 1"/>
  </>
)}
