import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
      {noticias.map(function (noticia, indice) {
        return (
          <Container key={indice}>
            <h1>{noticia.title}</h1>
            <p>{noticia.body.substring(0.5)}...</p>
            <Link to={"/noticias/" + noticia.id}>Leia mais</Link>
          </Container>
        );
      })}
    </Container>
  );
}
