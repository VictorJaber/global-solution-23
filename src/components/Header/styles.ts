import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 100px;
  display: block;
`;

export const StyledNav = styled.nav`
  padding: 0;

  & .container-fluid {
    background-color: ${({ theme }) => theme.colors.primary.main};
    padding: 32px;
  }

  .navbar-nav {
    margin: auto;
    gap: 16px;
  }

  .navbar-collapse {
    @media (max-width: 991px) {
      margin-top: 32px;
    }
  }

  .navbar-toggler {
    color: white;
    border: none;
    &:focus {
      box-shadow: 0 0 0 2px white;
    }
  }

  & a {
    border-radius: 0.25rem;
    padding: 0.5em 1em;
    text-transform: uppercase;
    font-weight: 700;
  }

  & a:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  & a.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.common.white};
  }
`;
