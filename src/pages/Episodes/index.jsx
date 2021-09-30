import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function Episodes() {
  return (
    <Container>
      <h1>Episodes</h1>

      <Link to="/">Voltar a Home</Link>
    </Container>
  );
}

export default Episodes;
