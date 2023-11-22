import styled from 'styled-components';
import { MagicMotion } from "react-magic-motion";
import {Button} from "@components/Button";



const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Form = styled.div`
  padding: 20px;
  background-color: #1976d2;
  text-align: left;
  width: 520px;
  margin-right: 20%;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  color: white;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 14px;
    transition: border-color 0.3s ease-in-out;
  }

  textarea {
    resize: none;
  }

  select:focus,
  select:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    border-color: #0e79b2;
    transition: border-color 0.3s ease-in-out;
  }
`;

const RowInputGroup = styled.div`
  display: flex;
  justify-content: space-between;

  ${InputGroup} {
    width: 48%;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
`;

const Box1 = styled.div`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background-image: url("../../public/1.png");
  transition: transform 0.3s ease-in-out; /* Adicionando uma transição suave */

  &:hover {
    transform: scale(1.05); /* Zoom de 10% */
  }
`;

const Box2 = styled.div`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background-image: url("../../public/2.png");
  transition: transform 0.3s ease-in-out; /* Adicionando uma transição suave */

  &:hover {
    transform: scale(1.05); /* Zoom de 10% */
  }
`;

const Box3 = styled.div`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background-image: url("../../public/3.png");
  transition: transform 0.3s ease-in-out; /* Adicionando uma transição suave */

  &:hover {
    transform: scale(1.05); /* Zoom de 10% */
  }
`;

const Box4 = styled.div`
  height: 129px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 10px 80px;
  background-image: url("../../public/4.png");
  transition: transform 0.3s ease-in-out; /* Adicionando uma transição suave */

  &:hover {
    transform: scale(1.05); /* Zoom de 10% */
  }
`;



const cidadesBrasil = [
  'São Paulo',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Porto Alegre',
  'Salvador',
  'Brasília',
  'Curitiba',
  'Fortaleza',
  'Manaus',
  'Recife',
  'Goiânia',
  'Belém',
  'Campinas',
  'São Luís',
  'São Gonçalo',
  'Maceió',
  'Duque de Caxias',
  'Natal',
  'Teresina',
  'Campo Grande',
  'São Bernardo do Campo',
  'Nova Iguaçu',
  'Santo André',
  'João Pessoa',
  'Osasco',
  'Jaboatão dos Guararapes',
  'São José dos Campos',
  'Ribeirão Preto',
  'Uberlândia',
  'Sorocaba',
  'Contagem',
  'Aracaju',
  'Feira de Santana',
  'Cuiabá',
  'Joinville',
  'Aparecida de Goiânia',
  'Londrina',
  'Ananindeua',
  'Niterói',
  'Porto Velho',
  'Belford Roxo',
  'Serra',
  'Caxias do Sul',
  'Campos dos Goytacazes',
  'Macapá',
  'Florianópolis',
  'Vila Velha',
  'Mauá',
  'São João de Meriti',
  'Mogi das Cruzes',
  'Diadema',
  'Betim',
  'Jundiaí',
  'Carapicuíba',
  'Piracicaba',
  'Cariacica',
  'Bauru',
  'Montes Claros',
  'Canoas',
  'Maringá',
  'Rio Branco',
  'Anápolis',
  'Pelotas',
  'Vitória',
  'Caucaia',
  'Petrópolis',
  'Guarulhos',
  'Uberaba',
  'Paulista',
  'Blumenau',
  'Caruaru',
  'Franca',
  'Ponta Grossa',
  'Praia Grande',
  'Rio Grande',
  'Boa Vista',
  'Itaquaquecetuba',
  'Imperatriz',
  'Apucarana',
  'Pindamonhangaba',
  'Lauro de Freitas',
  'Marabá',
  'Sete Lagoas',
  'Americana',
  'Santa Maria',
  'Gravataí',
  'Volta Redonda',
  'Indaiatuba',
  'Divinópolis',
  'São Carlos',
  'Itabuna',
  'Itajaí',
  'Colombo',
  'Novo Hamburgo',
  'São Vicente',
  'Barueri',
  'Taubaté',
  'Governador Valadares',
  'Viamão',
  'Suzano',
  'Parnamirim',
  'Sumaré',
  'Guarujá',
  'Juazeiro do Norte',
  'Varzea Grande',
  'Timon',
  'Taboão da Serra',
  'Santa Luzia',
  'Mossoró',
  'Camaçari',
  'São José do Rio Preto',
  'Cotia',
  'Ferraz de Vasconcelos',
  'Rio Claro',
  'Araraquara',
  'Marília',
  'Jaú',
  'Presidente Prudente',
  'Itapetininga',
  'Castanhal',
  'Alvorada',
  'Hortolândia',
  'Rio Verde',
  'Cachoeirinha',
  'Luziânia',
  'Dourados',
  "Santa Bárbara d'Oeste",
  'Araras',
  'Garanhuns',
  'Barra Mansa',
  'Palmas',
  'Uruguaiana',
  'Teixeira de Freitas',
  'Valinhos',
  'São João de Meriti',
  'Itaboraí',
  'Paulo Afonso',
  'Alagoinhas',
  'Ourinhos',
  'Poá',
  'Itapevi',
  'Catanduva',
  'Bagé',
  'Sapucaia do Sul',
  'Itapecerica da Serra',
  'Araucária',
  'Francisco Morato',
  'Resende',
  'Tatuí',
  'Campo Largo',
  'Salto',
  'São Caetano do Sul',
  'Itapira',
  'Santa Cruz do Sul',
  'Araruama',
  'Cubatão',
  'Formosa',
  'São Lourenço da Mata',
  'Passo Fundo',
  'Leme',
  'Itaituba',
  'Crateús',
  'Patos de Minas',
  'Pouso Alegre',
  'Crato',
  'Paulínia',
  'Timóteo',
  'Eunápolis',
  'Santana do Livramento',
  'Cascavel',
  'Barretos',
  'Castro',
  'Votorantim',
  'Campo Mourão',
  'Itapipoca',
  'Pindoretama',
  'São Mateus',
  'Pinhais',
  'Conselheiro Lafaiete',
  'Araxá',
  'Birigui',
  'Ji-Paraná',
  'Francisco Beltrão',
  'Osvaldo Cruz',
  'Rio das Ostras',
  'Alagoinhas',
  'Mairiporã',
  'Caratinga',
  'Camaragibe',
  'Palhoça',
  'Santana',
  'Itabaiana',
  'Vespasiano',
  'Sapiranga',
  'Itanhaém',
  'Assis',
  'Parintins',
  'Senador Canedo',
  'Barra do Piraí',
  'José de Freitas',
  'Barra do Garças',
  'Três Lagoas',
  'Barbacena',
  'Passos',
  'São José dos Pinhais',
  'Angra dos Reis',
  'Itapeva',
  'Barra do Corda',
  'São Gabriel da Cachoeira',
  'Itapeva',
  'São José de Ribamar',
  'Iguatu',
  'São Francisco do Sul',
  'São Borja',
  'Ipatinga',
  'Lagarto',
  'Araruama',
  'Trindade',
  'Salgueiro',
  'Ubá',
  'Itapetinga',
  'Itaúna',
  'Bacabal',
  'Cruz Alta',
  'Ibitinga',
  'Garibaldi',
  'Itapira',
  'Itapetininga',
  'Arapiraca',
  'Avaré',
  'Alto Araguaia',
  'Santa Cruz do Capibaribe',
  'Pirapora',
  'Sobral',
  'Bocaiúva',
  'Ponta Porã',
  'Guaratinguetá',
  'Arcoverde',
  'Cianorte',
  'Campo Formoso',
  'Camocim',
  'Catu',
  'Bacabal',
  'São Félix do Xingu',
  'Votorantim',
  'Teófilo Otoni',
  'Patos',
  'Santa Cruz',
  'Linhares',
  'Araxá',
  'Penedo',
  'Itamaraju',
  'Colatina',
  'Crateús',
  'Eunápolis',
  'Santo Antônio de Jesus',
  'Rio Grande da Serra',
  'Sabará',
  'Ituiutaba',
  'Cabo Frio',
  'Jacobina',
  'Pindamonhangaba',
  'Rio Negro',
  'Juína',
  'Crateús',
  'Corumbá',
  'Itaitinga',
  'Rio Verde de Mato Grosso',
  'Icó',
  'Itabaianinha',
  'Monte Aprazível',
  'Apodi',
  'Goiana',
  'Mafra',
  'Rio Branco do Sul',
  'Itaporanga',
  'Alfenas',
  'Poços de Caldas',
];

const TitleForm = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
  font-weight: normal;
`;

export function Home() {
  return (
    <Container>
      <Form>
        <form>
          <TitleForm>Fale Conosco</TitleForm>
          <RowInputGroup>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" id="fullName" name="fullName" />
            </InputGroup>
            <InputGroup>
              <MagicMotion><label htmlFor="city">Cidade</label></MagicMotion>
              <select id="city" name="city">
                {cidadesBrasil.map((cidade, index) => (
                  <option key={index} value={cidade}>
                    {cidade}
                  </option>
                ))}
              </select>
            </InputGroup>
          </RowInputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="description">Descrição do Assunto</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              cols={50}
            ></textarea>
          </InputGroup>
          <Button customColor={"white"} >Enviar</Button>
        </form>
      </Form>
      <Boxes>
        <Box1/>
        <Box2/>
        <Box3/>
        <Box4/>
      </Boxes>
    </Container>
  );
}
