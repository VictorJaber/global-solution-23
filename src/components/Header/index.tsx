import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Logo, StyledNav } from './styles';

export function Header() {
  return (
    <StyledNav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Logo src="/logotipo.png" alt="Care App" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/mortalidade-infantil">
                Mortalidade Infantil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doencas-transmissiveis">
                Doenças Transmissiveis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doencas-nao-transmissiveis">
                Doenças Não Transmissíveis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/minha-saude">
                Minha saúde
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
}
