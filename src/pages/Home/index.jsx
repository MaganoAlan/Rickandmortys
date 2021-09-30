import React, { useEffect, useState } from "react";
import {
  RiRegisteredLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
} from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";

import { Button, Container, Footer, Pagetitle, Pagination } from "./styles";

import Infocard from "../../components/Infocard";
//Links para as paginas o arquivo Routes.js está sendo chamado no App.js
import { Link } from "react-router-dom";

const api = "https://rickandmortyapi.com/api/character/";

function Home() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(null);
  const [search, setSearch] = useState("");

  //useEffect para filtar a busca em toda api
  useEffect(() => {
    fetch(`${api}?name=${search}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response.results);
      });
  }, [search]);
  //useEffect para setar as paginas
  useEffect(() => {
    fetch(`${api}?page=${page}`) //manipulando a paginação com variável
      .then((response) => response.json())
      .then((response) => {
        setInfo(response.results);
      });
  }, [page]);

  //console.log(info);
  // condicional ternário para passar a pagina 2
  // null + 2 = página 2
  function nextpage() {
    page === null ? setPage(page + 2) : setPage(page + 1);
    window.scrollTo(0, 0);
  }

  function prevpage() {
    setPage(page === 1 ? null : page - 1);
    window.scrollTo(0, 0);
  }

  function gohome() {
    setPage(null);
  }
  //retorno filtrado da api é chamado no map() do infocard
  //search está sendo alterado pelo input e sendo chamado no value do input
  //infos.name (deixando minúscula o retorno da api) e search toLowerCase ,
  //(deixando minúscula a digitação do input) para evitar diferenças no filtro
  const filteredInfo =
    info == null
      ? "sem resultados"
      : info.filter((infos) =>
          infos.name.toLowerCase().includes(search.toLowerCase())
        );
  //console.log(search);

  return (
    <>
      <header>
        <Pagetitle>Rick and Morty Characters Locations and Episodes</Pagetitle>
      </header>
      <Button onClick={gohome}>
        <FaHome size={50} />
      </Button>
      <Link to="Locations">
        <IoPlanet color={"#FFF"} size={50} />
      </Link>
      <Link to="/Episodes">
        <BiCameraMovie color={"#FFF"} size={50} />
      </Link>
      <br />
      <br />

      <Container>
        <input
          placeholder={"🔍 Search characters "}
          type="text"
          value={search}
          onChange={(text) => setSearch(text.target.value)}
        />

        {filteredInfo.map((info) => (
          <Infocard key={info.id} item={info} />
        ))}
      </Container>
      <Pagination>
        <Button hidden={page <= 1 ? true : false} onClick={prevpage}>
          <RiArrowLeftCircleLine size={100} />
        </Button>
        <Button onClick={nextpage}>
          <RiArrowRightCircleLine size={100} />
        </Button>
      </Pagination>
      <Footer>
        Todos os direitos reservados Alan Magano {<RiRegisteredLine />}
      </Footer>
    </>
  );
}

export default Home;
