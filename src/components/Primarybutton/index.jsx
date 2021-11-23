import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "./styles";

function Primarybutton(text) {
  return (
    <Btn>
      <Link
        style={{ textDecoration: "none", color: "currentcolor" }}
        to={text.to}
      >
        {text.text}
      </Link>
    </Btn>
  );
}

export default Primarybutton;
