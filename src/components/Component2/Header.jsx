import play from '../../../public/play.svg';
import logo from '../../../public/logotipo.png';
import {HeaderStyle, Logo, Button, Play} from "./headerStyle.js";

export function Header() {
    return (
        <HeaderStyle>
            <Play src={play} alt="Play" />
            <Logo src={logo} alt="Logo" />
            <Button>Saiba Mais</Button>
        </HeaderStyle>
    );
}
