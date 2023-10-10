import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicial</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-link">Sobre</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contato" className="nav-link">Contato</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

function HeaderBootstrap() {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand>AppMariana</Navbar.Brand>
                <Navbar.Toggle aria-controls="navegacao" />
                <Navbar.Collapse id="navegacao">
                    <Nav>
                        <Link to="/" className="nav-link">Inicial</Link>
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                        <Link to="/contato" className="nav-link">Contato</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { Header, HeaderBootstrap}
