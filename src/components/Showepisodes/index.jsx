import React from "react";

import { Container, Episode } from "./styles";

function Showepisodes({ item }) {
  return (
    <Container>
      <Episode>Name: {item.name}</Episode>
      <Episode>Air date: {item.air_date}</Episode>
      <Episode>Episode: {item.episode}</Episode>
    </Container>
  );
}

export default Showepisodes;
