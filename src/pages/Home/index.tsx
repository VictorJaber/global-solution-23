import { decodeCrypto } from "@/utils/decodeCrypto";
import { Button } from "@components/Button";
import { HomeCard } from "@components/HomeCard";
import {
  Container,
  Form,
  TitleForm,
  RowInputGroup,
  InputGroup,
  Boxes,
  HeroTextContainer,
} from "@pages/Home/styles.ts";
import { useEffect } from "react";
const cidadesBrasil = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Porto Alegre",
  "Salvador",
  "Brasília",
  "Curitiba",
  "Fortaleza",
  "Manaus",
  "Recife",
  "Goiânia",
  "Belém",
  "Campinas",
  "São Luís",
  "São Gonçalo",
  "Maceió",
  "Duque de Caxias",
  "Natal",
  "Teresina",
  "Campo Grande",
  "São Bernardo do Campo",
  "Nova Iguaçu",
  "Santo André",
  "João Pessoa",
  "Osasco",
  "Jaboatão dos Guararapes",
  "São José dos Campos",
  "Ribeirão Preto",
  "Uberlândia",
  "Sorocaba",
  "Contagem",
  "Aracaju",
  "Feira de Santana",
  "Cuiabá",
  "Joinville",
  "Aparecida de Goiânia",
  "Londrina",
  "Ananindeua",
  "Niterói",
  "Porto Velho",
  "Belford Roxo",
  "Serra",
  "Caxias do Sul",
  "Campos dos Goytacazes",
  "Macapá",
  "Florianópolis",
  "Vila Velha",
  "Mauá",
  "São João de Meriti",
  "Mogi das Cruzes",
  "Diadema",
  "Betim",
  "Jundiaí",
  "Carapicuíba",
  "Piracicaba",
  "Cariacica",
  "Bauru",
  "Montes Claros",
  "Canoas",
  "Maringá",
  "Rio Branco",
  "Anápolis",
  "Pelotas",
  "Vitória",
  "Caucaia",
  "Petrópolis",
  "Guarulhos",
  "Uberaba",
  "Paulista",
  "Blumenau",
  "Caruaru",
  "Franca",
  "Ponta Grossa",
  "Praia Grande",
  "Rio Grande",
  "Boa Vista",
  "Itaquaquecetuba",
  "Imperatriz",
  "Apucarana",
  "Pindamonhangaba",
  "Lauro de Freitas",
  "Marabá",
  "Sete Lagoas",
  "Americana",
  "Santa Maria",
  "Gravataí",
  "Volta Redonda",
  "Indaiatuba",
  "Divinópolis",
  "São Carlos",
  "Itabuna",
  "Itajaí",
  "Colombo",
  "Novo Hamburgo",
  "São Vicente",
  "Barueri",
  "Taubaté",
  "Governador Valadares",
  "Viamão",
  "Suzano",
  "Parnamirim",
  "Sumaré",
  "Guarujá",
  "Juazeiro do Norte",
  "Varzea Grande",
  "Timon",
  "Taboão da Serra",
  "Santa Luzia",
  "Mossoró",
  "Camaçari",
  "São José do Rio Preto",
  "Cotia",
  "Ferraz de Vasconcelos",
  "Rio Claro",
  "Araraquara",
  "Marília",
  "Jaú",
  "Presidente Prudente",
  "Itapetininga",
  "Castanhal",
  "Alvorada",
  "Hortolândia",
  "Rio Verde",
  "Cachoeirinha",
  "Luziânia",
  "Dourados",
  "Santa Bárbara d'Oeste",
  "Araras",
  "Garanhuns",
  "Barra Mansa",
  "Palmas",
  "Uruguaiana",
  "Teixeira de Freitas",
  "Valinhos",
  "São João de Meriti",
  "Itaboraí",
  "Paulo Afonso",
  "Alagoinhas",
  "Ourinhos",
  "Poá",
  "Itapevi",
  "Catanduva",
  "Bagé",
  "Sapucaia do Sul",
  "Itapecerica da Serra",
  "Araucária",
  "Francisco Morato",
  "Resende",
  "Tatuí",
  "Campo Largo",
  "Salto",
  "São Caetano do Sul",
  "Itapira",
  "Santa Cruz do Sul",
  "Araruama",
  "Cubatão",
  "Formosa",
  "São Lourenço da Mata",
  "Passo Fundo",
  "Leme",
  "Itaituba",
  "Crateús",
  "Patos de Minas",
  "Pouso Alegre",
  "Crato",
  "Paulínia",
  "Timóteo",
  "Eunápolis",
  "Santana do Livramento",
  "Cascavel",
  "Barretos",
  "Castro",
  "Votorantim",
  "Campo Mourão",
  "Itapipoca",
  "Pindoretama",
  "São Mateus",
  "Pinhais",
  "Conselheiro Lafaiete",
  "Araxá",
  "Birigui",
  "Ji-Paraná",
  "Francisco Beltrão",
  "Osvaldo Cruz",
  "Rio das Ostras",
  "Alagoinhas",
  "Mairiporã",
  "Caratinga",
  "Camaragibe",
  "Palhoça",
  "Santana",
  "Itabaiana",
  "Vespasiano",
  "Sapiranga",
  "Itanhaém",
  "Assis",
  "Parintins",
  "Senador Canedo",
  "Barra do Piraí",
  "José de Freitas",
  "Barra do Garças",
  "Três Lagoas",
  "Barbacena",
  "Passos",
  "São José dos Pinhais",
  "Angra dos Reis",
  "Itapeva",
  "Barra do Corda",
  "São Gabriel da Cachoeira",
  "Itapeva",
  "São José de Ribamar",
  "Iguatu",
  "São Francisco do Sul",
  "São Borja",
  "Ipatinga",
  "Lagarto",
  "Araruama",
  "Trindade",
  "Salgueiro",
  "Ubá",
  "Itapetinga",
  "Itaúna",
  "Bacabal",
  "Cruz Alta",
  "Ibitinga",
  "Garibaldi",
  "Itapira",
  "Itapetininga",
  "Arapiraca",
  "Avaré",
  "Alto Araguaia",
  "Santa Cruz do Capibaribe",
  "Pirapora",
  "Sobral",
  "Bocaiúva",
  "Ponta Porã",
  "Guaratinguetá",
  "Arcoverde",
  "Cianorte",
  "Campo Formoso",
  "Camocim",
  "Catu",
  "Bacabal",
  "São Félix do Xingu",
  "Votorantim",
  "Teófilo Otoni",
  "Patos",
  "Santa Cruz",
  "Linhares",
  "Araxá",
  "Penedo",
  "Itamaraju",
  "Colatina",
  "Crateús",
  "Eunápolis",
  "Santo Antônio de Jesus",
  "Rio Grande da Serra",
  "Sabará",
  "Ituiutaba",
  "Cabo Frio",
  "Jacobina",
  "Pindamonhangaba",
  "Rio Negro",
  "Juína",
  "Crateús",
  "Corumbá",
  "Itaitinga",
  "Rio Verde de Mato Grosso",
  "Icó",
  "Itabaianinha",
  "Monte Aprazível",
  "Apodi",
  "Goiana",
  "Mafra",
  "Rio Branco do Sul",
  "Itaporanga",
  "Alfenas",
  "Poços de Caldas",
];

export function Home() {
  useEffect(() => {
    decodeCrypto();
  }, []);

  return (
    <>
      <Container>
        <HeroTextContainer>
          <h1>Global Solution 2023</h1>
          <h2 id="decode" data-value="Tech Care & Hapvida">
            Tech Care & Hapvida
          </h2>
          <a
            href="https://www.fiap.com.br/graduacao/global-solution/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">Saiba mais</Button>
          </a>
        </HeroTextContainer>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oCIB-vB7wns?si=fIuE7O1G3hqdX52L"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Container>

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
                <label htmlFor="city">Cidade</label>
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
            <Button customColor="white">Enviar</Button>
          </form>
        </Form>
        <Boxes>
          <HomeCard
            title="Mortalidade Infantil"
            path="page-1"
            imgUrl="/1.png"
          />
          <HomeCard
            title="Doenças Transmissíveis"
            path="page-2"
            imgUrl="/2.png"
          />
          <HomeCard
            title="Doenças Não Transmissíveis"
            path="doencas-nao-transmissiveis"
            imgUrl="/3.png"
          />
          <HomeCard title="Saúde Geral" path="minha-saude" imgUrl="/4.png" />
        </Boxes>
      </Container>
    </>
  );
}
