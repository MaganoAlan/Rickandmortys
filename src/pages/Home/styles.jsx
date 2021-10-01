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
  color: #f0f0f0;
  font-size: 38pt;
`;

const Footer = styled.footer`
  color: #ffffff;
  font-weight: 600;
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
`;

export { Container, Pagetitle, Footer, Button, Pagination, IMG };
