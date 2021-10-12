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

const Button = styled.button`
  padding: 2%;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px #bbbbbb;
  width: auto;
  align-self: center;
  cursor: pointer;

  &: hover {
    background-color: #b5fab8;
    box-shadow: 2px 2px 2px #0000007f;
  }
`;

const Styledlink = styled.a`
  text-decoration: none;
  color: #007ef3;
  &: hover {
    color: #25c0b3;
  }
`;

export { Container, Card, IMG, Form, Button, Styledlink };
