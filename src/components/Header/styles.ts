import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 32px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const Logo = styled.img`
  max-width: 150px;
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

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.common.white};
  color: #00a1ff;
  border: none;
  padding: 1em 2em;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  transition: transform 0.2s ease-in;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;
