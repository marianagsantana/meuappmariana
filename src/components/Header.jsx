import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderBootstrap() {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="navbar-link" >
                        <Image
                        src={require("../assets/image/logoSenac.png")}
                        width={150}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navegacao" />
                <Navbar.Collapse id="navegacao">
                    <Nav>
                        <Link to="/" className="nav-link">Inicial</Link>
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                        <Link to="/contato" className="nav-link">Contato</Link>
                        <Link to="/noticias" className="nav-link">Notícias</Link>
                        <Link to="/loja" className="nav-link">Loja</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



