import React from "react";

import { Container, Card, IMG, Form, Button, Styledlink } from "./styles";

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const image =
  "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQOxGMxzPfr3lvtrDxZ9ahcGCw4wMQsdBljUXHiuon2Oa1SmjgGWYx-QWkyLuFwEaguoI3yaq592H-XkHzLbtgh5Pu9ljDJV6AzS.png?r=1ab";

function Login() {
  return (
    <Container>
      <IMG src={image} />
      <Card>
        <Form>
          <label htmlFor="User">User</label>
          <input type="text" placeholder="Email" />
          <br />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Password" />
          <br />
          <Button type="submit">Sign In</Button>
          <br />
          <Styledlink href="https://www.google.com.br">
            Create Acount
          </Styledlink>
          <br />
          <Styledlink href="https://www.google.com.br">
            Forgot password ?
          </Styledlink>
        </Form>
      </Card>
      <Link to="/">
        <FaHome color={"#FFF"} size={100} />
      </Link>
    </Container>
  );
}

export default Login;
