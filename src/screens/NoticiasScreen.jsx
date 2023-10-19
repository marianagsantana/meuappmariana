import { useEffect, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState([]);

  //Ele é responsável por verificar se o componente foi montado
  //e se foi montado, ele executa o código que está dentro dele
  //Ou seja, ele executa o código que está dentro dele apenas uma vez

  useEffect(() => {
    pegarNoticias();
  }, []);

  function pegarNoticias() {
    fetch("https://dummyjson.com/posts/")
      .then((resposta) => resposta.json())
      .then(function (respostaEmJson) {
        setNoticias(respostaEmJson.posts);
      });
  }
  return (
    <Container>
      <h1>Notícias</h1>
      <p>Esta é a página de notícias</p>
      <Row>
      {noticias.map(function (noticia, indice) {
        return (
          <Col lg={3} xs={12} md={6} key={indice} style={
            {
              marginBottom: "20px"
            }
          }>
            <Card className="h-100">
              <CardBody>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>{noticia.body.substring(0, 50)}...</Card.Text>
                <Link to={"/noticias/" + noticia.id}>Leia mais</Link>
              </CardBody>
            </Card>
          </Col>
        );
      })}
      </Row>
    </Container>
  );
}
