import React, { useEffect, useState } from "react";
import { Button, Container, Title, IMG, Pagination } from "./styles";
import { Link } from "react-router-dom";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import Showlocations from "../../components/Showlocations";

const image =
  "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQOxGMxzPfr3lvtrDxZ9ahcGCw4wMQsdBljUXHiuon2Oa1SmjgGWYx-QWkyLuFwEaguoI3yaq592H-XkHzLbtgh5Pu9ljDJV6AzS.png?r=1ab";

const api = `https://rickandmortyapi.com/api/location/`;

function Locations() {
  const [location, setLocation] = useState([]);
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`${api}?page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setLocation(response.results);
        //console.log(response.results);
      });
  }, [page]);
  //console.log(page);

  function nextpage() {
    setPage(page == null ? page + 2 : page + 1);
    window.scrollTo(0, 0);
  }
  function prevpage() {
    setPage(page <= 1 ? page == null : page - 1);
    window.scrollTo(0, 0);
  }

  //console.log(location);
  return (
    <>
      <Container>
        <IMG src={image} />
        <Title className="tit">Locations</Title>
        {location.map((local) => (
          <Showlocations key={local.id} item={local} />
        ))}
        <Link to="/">
          <FaHome color={"#FFF"} size={100} />
        </Link>
        <Pagination>
          <Button hidden={page <= 1 ? true : false} onClick={prevpage}>
            <RiArrowLeftCircleLine size={100} />
          </Button>
          <Button onClick={nextpage}>
            <RiArrowRightCircleLine size={100} />
          </Button>
        </Pagination>
      </Container>
    </>
  );
}

export default Locations;
