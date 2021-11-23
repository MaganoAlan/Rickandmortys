import React, { useEffect, useState } from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { Actions, Button, Container, IMG, Pagination, Video } from "./styles";
import Infocard from "../../components/Infocard";
import backgroundvideo from "../../assets/videos/backgroundvideo.webm";
//Links para as paginas o arquivo Routes.js está sendo chamado no App.js
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/styles";
import { Titletext } from "../../components/Titles/styles";
import Primarybutton from "../../components/Primarybutton";
//import { Primarybutton } from "../../components/Primarybutton/styles";

const image =
  "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQOxGMxzPfr3lvtrDxZ9ahcGCw4wMQsdBljUXHiuon2Oa1SmjgGWYx-QWkyLuFwEaguoI3yaq592H-XkHzLbtgh5Pu9ljDJV6AzS.png?r=1ab";

const api = "https://rickandmortyapi.com/api/character/";

function Home() {
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(null);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");

  //useEffect para filtar a busca em toda api
  useEffect(() => {
    fetch(`${api}?name=${search}&species=${species}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response.results);
      });
  }, [search, species]);
  //useEffect para setar as paginas
  useEffect(() => {
    fetch(`${api}?page=${page}`) //manipulando a paginação com variável
      .then((response) => response.json())
      .then((response) => {
        setInfo(response.results);
      });
  }, [page]);

  // condicional ternário para passar a pagina 2

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
  /*  retorno filtrado da api é chamado no map() do infocard
  search está sendo alterado pelo input e sendo chamado no value do input
  infos.name (deixando minúscula o retorno da api) e search toLowerCase ,
  (deixando minúscula a digitação do input) para evitar diferenças no filtro
   VVVV Se info ok && aplica o método flter vvvv isso imede de crashar VVVV */
  const filteredInfo =
    info &&
    info.filter((infos) =>
      infos.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <IMG src={image} alt="imagem" />
      <Header>
        <Video preload="auto" autoPlay="true" loop poster={null}>
          <source src={backgroundvideo} type="video/webm" />
        </Video>
        <Actions>
          <Button onClick={gohome}>
            <FaHome size={50} />
          </Button>
          <Link to="/Locations">
            <IoPlanet
              style={{
                textDecoration: "none",
                color: "#FFF",
              }}
              size={50}
            />
          </Link>
          <Link to="/Episodes">
            <BiCameraMovie
              style={{ textDecoration: "none" }}
              color={"#FFF"}
              size={50}
            />
          </Link>
        </Actions>
        <Actions>
          <select
            onChange={(sp) => setSpecies(sp.target.value)}
            value={species}
          >
            <option defaultValue={true} value="" disabled>
              Species
            </option>
            <option value="">All</option>
            <option value="Alien">Alien</option>
            <option value="Animal">Animal</option>
            <option value="Human">Human</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Mythological">Mythological</option>
            <option value="Poopybutthole">Poopybutthole</option>
            <option value="Unknow">Unknow</option>
          </select>

          <input
            placeholder={" Search characters "}
            type="text"
            value={search}
            onChange={(text) => setSearch(text.target.value)}
          />
        </Actions>
      </Header>
      <Primarybutton to={"/Login"} text="Login" />

      <Container>
        {filteredInfo && filteredInfo != null ? (
          filteredInfo.map((info) => <Infocard key={info.id} item={info} />)
        ) : (
          <Titletext>Nenhum item encontrado</Titletext>
        )}
      </Container>
      <Pagination>
        <Button hidden={page <= 1 ? true : false} onClick={prevpage}>
          <RiArrowLeftCircleLine size={100} />
        </Button>
        <Button onClick={nextpage}>
          <RiArrowRightCircleLine size={100} />
        </Button>
      </Pagination>
    </>
  );
}

export default Home;
