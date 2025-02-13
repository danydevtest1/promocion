import React from "react";
import { Container,  Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { imagenes } from "../../../assets";


import "./TopBar.scss";

export function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <div className="top-bar__left">
          <Link to="/" className="logo">
            <Image
              src={imagenes.icontec}
              alt="logotec"
              style={{ width: "80px", height: "40px", paddingTop: "0px" }}
            />
          </Link>
        </div>
        <div className="text-log">
          <h1>TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS DE LOS RÍOS</h1>
        </div>
      </Container>
    </div>
  );
}
