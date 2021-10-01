import React from "react";

import { Container, Location } from "./styles";

function Showlocations({ item }) {
  return (
    <Container>
      <Location> {item.name} </Location>

      <Location>Type: {item.type}</Location>

      <Location>Dimension: {item.dimension}</Location>
    </Container>
  );
}

export default Showlocations;
