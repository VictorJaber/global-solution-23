import { NavLink } from 'react-router-dom';

import { StyledHeader, Logo, StyledNav } from './styles';
import { Button } from '@components/Button';

export function Header() {
  return (
    <StyledHeader>
      <Logo src="/logotipo.png" alt="Care App" />
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page-1">Page 1</NavLink>
        <NavLink to="/page-2">Page 2</NavLink>
        <NavLink to="/page-3">Page 3</NavLink>
        <NavLink to="/minha-saude">Minha saúde</NavLink>
      </StyledNav>
      <Button>Saiba mais</Button>
    </StyledHeader>
  );
}
