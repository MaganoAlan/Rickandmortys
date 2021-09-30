import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  margin-bottom: 3%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  background-color: #70e241;
  border-radius: 5%;
`;

const Card = styled.div`
  margin: 5%;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: large;
  color: #fff;
  font-weight: 700;
  font-size: 16pt;
  margin-bottom: 5%;
`;

const Img = styled.img`
  margin: 2%;
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  border-radius: 5%;
`;

export { Container, Card, Img };
