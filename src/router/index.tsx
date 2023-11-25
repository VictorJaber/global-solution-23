import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components/Layout';
import { Home } from '@pages/Home';
import { Doenca } from '@/pages/Doenca';
import { Maternity } from '@pages/Maternity';
import { MyHealth } from '@/pages/MyHealth';
import NonCommunicableDesease from '@/pages/NonCommunicableDesease';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/mortalidade-infantil',
        element: <Maternity />,
      },
      {
        path: '/doencas-transmissiveis',
        element: <Doenca />,
      },
      {
        path: '/doencas-nao-transmissiveis',
        element: <NonCommunicableDesease />,
      },
      {
        path: '/minha-saude',
        element: <MyHealth />,
      },
    ],
  },
]);

export default router;
