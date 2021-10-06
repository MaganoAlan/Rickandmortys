import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  margin: auto;
  width: auto;
  height: auto;
  background-color: #e3fadf;
  padding: 2%;
  border-radius: 3%;
  margin-bottom: 5%;
  min-width: 40%;
  min-height: 40%;
`;

const IMG = styled.img`
  width: auto;
  height: auto;
  max-height: 50%;
  max-width: 50%;
  margin: 1%;
`;

const Form = styled.form`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 2%;
  text-align: left;
`;

export { Container, Card, IMG, Form };
