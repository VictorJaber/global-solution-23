import { Container, Circle, CircleRotate, Avatar } from './styles';

export function Team() {
  return (
    <Container>
      <Circle>
        <CircleRotate id="circle">
          <Avatar
            href="https://www.linkedin.com/in/bfukumori/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bruno-f.jpg" alt="" />
            <span>Bruno Fukumori</span>
          </Avatar>
          <Avatar
            href="https://www.linkedin.com/in/viniciusm-santos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/vinicius.jpg" alt="" />
            <span>Vinicius Santos</span>
          </Avatar>
          <Avatar
            href="https://www.linkedin.com/in/brunoandradel-a-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bruno-a.png" alt="" />
            <span>Bruno Araujo</span>
          </Avatar>
          <Avatar
            href="https://www.linkedin.com/in/brunoperdigaosantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bruno-p.png" alt="" />
            <span>Bruno Perdigão</span>
          </Avatar>
          <Avatar
            href="https://www.linkedin.com/in/victorjaber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/victor.png" alt="" />
            <span>Victor Jaber</span>
          </Avatar>
        </CircleRotate>
      </Circle>
    </Container>
  );
}
