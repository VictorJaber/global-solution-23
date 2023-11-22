import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components/Layout';
import {Home} from '@pages/Home';
import { Page1 } from '@pages/Page1';
import { Page2 } from '@pages/Page2';
import { Page3 } from '@pages/Page3';
import { MyHealth } from '@/pages/MyHealth';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/page-1',
        element: <Page1 />,
      },
      {
        path: '/page-2',
        element: <Page2 />,
      },
      {
        path: '/page-3',
        element: <Page3 />,
      },
      {
        path: '/minha-saude',
        element: <MyHealth />,
      },
    ],
  },
]);

export default router;
