import React from "react";

import { Container } from "./styles";

function Showlocations({ item }) {
  return (
    <Container>
      Location: {item.name}
      <br />
      Type: {item.type}
      <br />
      Dimension: {item.dimension}
      <br />
      Url: {item.url}
      <br />
      Residents: {item.residents}
      <br />
    </Container>
  );
}

export default Showlocations;
