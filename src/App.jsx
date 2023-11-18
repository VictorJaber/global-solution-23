import { RouterProvider } from 'react-router-dom';

import router from './router/index.jsx';
import GlobalStyle from './styles/global.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
