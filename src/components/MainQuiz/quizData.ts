// quizData.ts
export type QuizDataItem = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const quizData: QuizDataItem[] = [
  {
    id: 0,
    question: `Qual é o principal objetivo da Meta 3.2 dos Objetivos de Desenvolvimento Sustentável (ODS)?`,
    options: [
      `A) Reduzir a taxa de mortalidade infantil em países desenvolvidos.`,
      `B) Eliminar as mortes evitáveis de recém-nascidos e crianças menores de 5 anos.`,
      `C) Aumentar o acesso à educação pré-natal em áreas urbanas.`,
      `D) Melhorar a infraestrutura de hospitais em países subdesenvolvidos.`,
    ],
    answer: `B) Eliminar as mortes evitáveis de recém-nascidos e crianças menores de 5 anos.`,
  },
  {
    id: 1,
    question: `Qual é um fator chave que contribui para a mortalidade materna em países em desenvolvimento?`,
    options: [
      `A) Acesso limitado a cuidados médicos qualificados durante a gravidez e o parto.`,
      `B) Baixa taxa de natalidade.`,
      `C) Alta disponibilidade de recursos médicos.`,
      `D) Amplas políticas de saúde materna.`,
    ],
    answer: `A) Acesso limitado a cuidados médicos qualificados durante a gravidez e o parto.`,
  },
  {
    id: 2,
    question: `Qual é o principal fator associado à mortalidade neonatal?`,
    options: [
      `A) Falta de vacinas para recém-nascidos.`,
      `B) Complicações durante o parto.`,
      `C) Ambiente familiar estável.`,
      `D) Peso médio do recém-nascido.`,
    ],
    answer: `B) Complicações durante o parto.`,
  },
  {
    id: 3,
    question: `Por que a saúde materna é crucial para a redução da mortalidade infantil?`,
    options: [
      `A) Porque mães saudáveis têm bebês maiores.`,
      `B) Porque mães saudáveis têm maior probabilidade de amamentar.`,
      `C) Porque cuidados pré-natais adequados podem prevenir complicações no parto.`,
      `D) Porque mães saudáveis têm menos chances de ter gêmeos.`,
    ],
    answer: `C) Porque cuidados pré-natais adequados podem prevenir complicações no parto.`,
  },
  {
    id: 4,
    question: `Qual região do mundo apresenta a maior taxa de mortalidade materna?`,
    options: [
      `A) América do Norte.`,
      `B) África Subsaariana.`,
      `C) Europa Ocidental.`,
      `D) Ásia Oriental.`,
    ],
    answer: `B) África Subsaariana.`,
  },
  {
    id: 5,
    question: `Como o acesso à educação das mulheres está relacionado à mortalidade materna?`,
    options: [
      `A) Não tem impacto na mortalidade materna.`,
      `B) Está associado a maiores taxas de mortalidade materna.`,
      `C) Está associado a menores taxas de mortalidade materna.`,
      `D) Está relacionado apenas à saúde dos recém-nascidos.`,
    ],
    answer: `C) Está associado a menores taxas de mortalidade materna.`,
  },
  {
    id: 6,
    question: `Qual é uma das principais estratégias para reduzir a mortalidade materna e infantil?`,
    options: [
      `A) Melhoria na distribuição de brinquedos para crianças.`,
      `B) Acesso universal à água potável.`,
      `C) Investimento em sistemas de saúde e cuidados pré-natais.`,
      `D) Aumento do número de creches.`,
    ],
    answer: `C) Investimento em sistemas de saúde e cuidados pré-natais.`,
  },
  {
    id: 7,
    question: `Qual é o principal indicador de mortalidade neonatal?`,
    options: [
      `A) Mortes de bebês nos primeiros 28 dias de vida.`,
      `B) Mortes de bebês nos primeiros 7 dias de vida.`,
      `C) Mortes de bebês nos primeiros 6 meses de vida.`,
      `D) Mortes de bebês durante o parto.`,
    ],
    answer: `A) Mortes de bebês nos primeiros 28 dias de vida.`,
  },
  {
    id: 8,
    question: `Qual é a importância do planejamento familiar na redução da mortalidade materna?`,
    options: [
      `A) Não está relacionado à saúde materna.`,
      `B) Reduz a probabilidade de complicações durante o parto.`,
      `C) Aumenta a probabilidade de ter gêmeos.`,
      `D) Não tem impacto na saúde das mães.`,
    ],
    answer: `B) Reduz a probabilidade de complicações durante o parto.`,
  },
  {
    id: 9,
    question: `Como as intervenções durante a gravidez podem contribuir para a redução da mortalidade materna?`,
    options: [
      `A) Elas não têm impacto na saúde materna.`,
      `B) Podem identificar e tratar problemas de saúde materna e fetal.`,
      `C) Aumentam o risco de complicações durante o parto.`,
      `D) Ajudam a aumentar a taxa de mortalidade infantil.`,
    ],
    answer: `B) Podem identificar e tratar problemas de saúde materna e fetal.`,
  },
];

