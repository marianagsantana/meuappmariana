import { Carousel, Container, Image } from "react-bootstrap";

export default function HomeScreen() {
  return (
    <Container>
      <h1>App Mariana</h1>
      <p>Página de Mariana</p>
      <Carousel>
        <Carousel.Item>
          <Image src="https://picsum.photos/1920/400" />
          <Carousel.Caption>
            <h1>Primeiro Slide</h1>
            <p>Feliz e Contente</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://picsum.photos/1920/400" />
          <Carousel.Caption>
            <h1>Segundo Slide</h1>
            <p>Desanimado</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://picsum.photos/1920/400" />
          <Carousel.Caption>
            <h1>Terceiro Slide</h1>
            <p>Triste</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
