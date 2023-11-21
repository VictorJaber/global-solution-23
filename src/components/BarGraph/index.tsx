import Chart from 'react-apexcharts';

import { GraphContainer } from './styles';

const CHART_DATA = {
  options: {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
        'Domingo',
      ],
    },
    yaxis: {
      title: {
        text: 'Horas de sono',
        style: {
          fontFamily: 'Roboto',
          color: '#212121',
        },
      },
    },
    title: {
      text: 'Resumo de sono por semana',
      style: {
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'Roboto',
        color: '#212121',
      },
    },
  },
  series: [
    {
      name: 'Horas de sono',
      data: [5, 8, 12, 6, 4, 8, 8],
    },
  ],
};

export function BarGraph() {
  return (
    <GraphContainer>
      <Chart
        options={CHART_DATA.options}
        series={CHART_DATA.series}
        type="bar"
        height="450"
      />
    </GraphContainer>
  );
}
