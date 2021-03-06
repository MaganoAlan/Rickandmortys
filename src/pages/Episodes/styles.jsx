import styled from "styled-components";

const Container = styled.div`
  background-color: aliceblue;
  background-image: url("https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 0;
  text-align: center;
`;

const Title = styled.h1`
  color: #fff;
  margin: 0 auto;
  font-size: 32pt;
  font-family: Rick and Morty Font;
  @font-face {
    font-family: Rick and Morty Font;
    src: url("../../assets/fonts/get_schwifty.ttf");
  }
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

const IMG = styled.img`
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  display: flex;
`;
const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  width: auto;
  height: auto;
  justify-content: space-around;
`;

export { Container, Title, Button, IMG, Pagination };
