import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";
import { Page1 } from "@pages/Page1";
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
        path: "/page-1",
        element: <Page1 />,
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
