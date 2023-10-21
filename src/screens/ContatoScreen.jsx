import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";

export default function ContatoScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!validaFormulario()) {
      return;
    }

    fetch("http://localhost/rest/index.php", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        email: email,
        mensagem: mensagem,
      }),
    });
    console.log(event);
  }

  function validaFormulario() {
    if (!nome) {
      setError("Preencha o campo nome");
      return false;
    }
    if (!email) {
      setError("Preencha o campo email");
      return false;
    }
    if (!mensagem) {
      setError("Preencha o campo mensagem");
      return false;
    }
    return true;
  }

  return (
    <Container>
      <Row>
        <Col lg={6} xs={12}>
          <h1>Entre em contato conosoco</h1>
        </Col>
        <Col lg={6} xs={12}>
          <Form className="row">
            <Form.Group as={Col} lg={6}>
              <Form.Label>Digite seu nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} lg={6}>
              <Form.Label>Digite seu e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} lg={12}>
              <Form.Label>Digite sua mensagem</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group as={Col} lg={12}>
              <Form.Control
                type="submit"
                parceholder="Enviar"
                value="Enviar"
                onClick={handleSubmit}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
