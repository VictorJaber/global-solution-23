import { Outlet } from 'react-router-dom';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
