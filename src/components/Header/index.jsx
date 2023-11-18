import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav style={{ display: 'flex', gap: 16 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page-1">Page 1</NavLink>
        <NavLink to="/page-2">Page 2</NavLink>
        <NavLink to="/page-3">Page 3</NavLink>
        <NavLink to="/page-4">Page 4</NavLink>
      </nav>
    </header>
  );
}
