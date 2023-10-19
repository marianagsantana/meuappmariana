import { Col, Container, Form, Row } from "react-bootstrap";

export default function ContatoScreen() {
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
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group as={Col} lg={6}>
              <Form.Label>Digite seu e-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group as={Col} lg={12}>
              <Form.Label>Digite sua mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} lg={12}>
              <Form.Control type="submit" value="Enviar" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
