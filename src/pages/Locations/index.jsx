import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import Showlocations from "../../components/Showlocations";

const api = "https://rickandmortyapi.com/api/location";

function Locations() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setLocation(response.results);
      });
  }, []);

  //console.log(location);
  return (
    <Container>
      <h1>Locations</h1>
      {location.map((local) => (
        <Showlocations key={local.id} item={local} />
      ))}
      <Link to="/">Voltar a Home</Link>
    </Container>
  );
}

export default Locations;
