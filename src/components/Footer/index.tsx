import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';

import { FooterContainer, SocialLinks } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <p>
        CareApp
        <span>© 2023 FIAP, Inc</span>
      </p>

      <SocialLinks>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faXTwitter} size="xl" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </li>
      </SocialLinks>
    </FooterContainer>
  );
}
