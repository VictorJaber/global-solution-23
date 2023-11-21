import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.grey[900]};

  p {
    color: ${({ theme }) => theme.colors.grey[500]};
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.grey[500]};

  & li:hover {
    transition: filter 0.2s ease-in;
    filter: brightness(1.5);
  }
`;
