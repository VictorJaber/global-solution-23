import MainQuiz from '@/components/MainQuiz';
import {
  Container,
  ImageWithOverlay,
  Overlay,
  TitleH2,
  Text,
  SectionText,
  ImageText,
} from './styles';

export function Maternity() {
  return (
    <Container>
      <ImageWithOverlay>
        <Overlay />
        <TitleH2>
          Jornada pela Vida: Reduzindo a Mortalidade Materna e Infantil
        </TitleH2>
      </ImageWithOverlay>
      <Text>
        A redução da mortalidade materna e infantil é um dos objetivos
        fundamentais dos Objetivos de Desenvolvimento Sustentável (ODS)
        estabelecidos pela ONU. A Meta 3.1 visa diminuir a taxa de mortalidade
        materna global para menos de 70 mortes por 100.000 nascidos vivos até
        2030, enquanto a Meta 3.2 busca eliminar as mortes evitáveis de
        recém-nascidos e crianças menores de 5 anos.
      </Text>
      <Text>
        Uma das principais estratégias para alcançar essa redução envolve o
        investimento em sistemas de saúde e cuidados pré-natais. Isso é crucial,
        já que o acesso limitado a cuidados médicos qualificados durante a
        gravidez e o parto é um fator significativo associado à alta taxa de
        mortalidade materna, especialmente em regiões em desenvolvimento, como a
        África Subsaariana, onde a taxa é uma das mais altas do mundo.
      </Text>
      <SectionText>
        <ImageText src="/preNatal.jpg" />
        <Text>
          Cuidados pré-natais adequados desempenham um papel fundamental na
          prevenção de complicações durante o parto, identificando e tratando
          problemas de saúde materna e fetal. Além disso, o planejamento
          familiar é crucial, pois permite gestações saudáveis e espaçadas,
          reduzindo assim as complicações durante o parto.
        </Text>
      </SectionText>
      <Text>
        A mortalidade neonatal, definida como as mortes de bebês nos primeiros
        28 dias de vida, muitas vezes está associada a complicações durante o
        parto, destacando a importância de intervenções durante a gravidez para
        identificar e tratar problemas de saúde que afetam tanto a mãe quanto o
        bebê.
      </Text>
      <Text>
        O acesso à educação das mulheres está correlacionado a menores taxas de
        mortalidade materna, pois proporciona uma compreensão mais ampla dos
        cuidados de saúde e do planejamento familiar. Investir em educação
        pré-natal, sistemas de saúde eficazes e acesso universal a água potável
        são estratégias cruciais para alcançar as metas de redução da
        mortalidade materna e infantil até 2030.
      </Text>
      <Text>
        Essas ações são essenciais para eliminar as mortes evitáveis de
        recém-nascidos e crianças menores de 5 anos, promovendo uma sociedade
        mais saudável e equitativa para mães e filhos em todo o mundo.
      </Text>
      <MainQuiz />
    </Container>
  );
}
