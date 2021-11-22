import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 5%;
  height: auto;
  width: auto;
`;

const Pagetitle = styled.h1`
  margin: 0 auto;
  padding-top: 2%;
  margin-bottom: 5%;
  color: #6fd6f0;
  font-size: 38pt;
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  width: auto;
  height: auto;
  color: #fff;
  &:hover {
    color: #c2f19c;
  }
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  width: auto;
  height: auto;
  justify-content: space-around;
`;

const IMG = styled.img`
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  display: block;
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  background-size: cover;
`;

const Actions = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export { Container, Pagetitle, Button, Pagination, IMG, Video, Actions };
