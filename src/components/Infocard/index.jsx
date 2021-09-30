import React from "react";

import { Container, Card, Img } from "./styles";

function Infocard({ item }) {
  return (
    <>
      <Container>
        <Card>
          Name: {item.name} <br />
          Species: {item.species} <br />
          Gender: {item.gender} <br />
          Status: {item.status} <br />
          Origin: {item.origin.name} <br />
          Location: {item.location.name} <br />
        </Card>
        <Img src={item.image} alt="imagem do personagem " />
      </Container>
    </>
  );
}

export default Infocard;
