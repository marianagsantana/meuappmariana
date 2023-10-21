import React from "react";
import { Card, Container } from "react-bootstrap";

export default function LojaScreen() {
  const produtos = [
    {
      id: 1,
      nome: "Kit teclado e mouse",
      categoria: "Eletrônicos",
      descricao: "Kit teclado e mouse sem fio",
      preco: 99.99,
      image: "./../assets/image/blusa.jpg",
    },
    {
      id: 2,
      nome: "Blusa",
      categoria: "Roupas",
      descricao: "Blusa disponivel no tamanho M e G",
      preco: 49.99,
      image: "./../assets/image/blusa.jpg",
    },
  ];

  return (
    <Container>
      <h1>Loja</h1>
      {produtos.map((produto) => (
        <Card key={produto.id}>
          <Card.Img variant="top" src={produto.image} />
          <Card.Body>
            <Card.Title>{produto.nome}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Categoria: {produto.categoria}
            </Card.Subtitle>
            <Card.Text>Descrição: {produto.descricao}</Card.Text>
            <Card.Text>Preço: R${produto.preco}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
