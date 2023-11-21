import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 32px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Logo = styled.img`
  max-width: 100px;
  display: block;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
  margin-inline: auto;

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
