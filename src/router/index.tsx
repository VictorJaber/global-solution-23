import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";
import { Maternity } from "@pages/Maternity";
import { Page2 } from "@pages/Page2";
import { MyHealth } from "@/pages/MyHealth";
import NonCommunicableDesease from "@/pages/NonCommunicableDesease";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/maternidade",
        element: <Maternity />,
      },
      {
        path: "/page-2",
        element: <Page2 />,
      },
      {
        path: "/doencas-nao-transmissiveis",
        element: <NonCommunicableDesease />,
      },
      {
        path: "/minha-saude",
        element: <MyHealth />,
      },
    ],
  },
]);

export default router;
