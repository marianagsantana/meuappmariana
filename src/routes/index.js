import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import SobreScreen from "../screens/SobreSreen";
import ContatoScreen from "../screens/ContatoScreen";
import NoticiasScreen from "../screens/NoticiasScreen";
import { Container } from "react-bootstrap";
import NoticiasSingleScreen from "../screens/NoticiasSingleScreen";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route element={<HomeScreen />} path="/"></Route>
          <Route element={<SobreScreen />} path="/sobre"></Route>
          <Route element={<ContatoScreen />} path="/contato"></Route>
          <Route element={<NoticiasSingleScreen />} path="/noticias/:idNoticia"></Route>
          <Route element={<NoticiasScreen />} path="/noticias"></Route>
          <Route path="*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Pagina404() {
  return (
    <Container>
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
    </Container>
  )
}
