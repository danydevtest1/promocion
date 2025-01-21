import React from "react";
import {  Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { imagenes } from "../../../assets";
import { socialData } from "../../../utils";

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

            <div className="menu">
              <Button variant="parimary">
                <i class="bi bi-house"></i>Home
              </Button>
            </div>
          </div>
          <div className="text-log">
            <h1>TECNOLÓGICO NACIONAL DE MÉXICO CAMPUS DE LOS RÍOS</h1>
          </div>
          <div className="d-flex gap-2 mb-2 p-3">
            <Button variant="primary" as="a" href={socialData.type}>
              <i class="bi bi-facebook"></i>
            </Button>
            <Button variant="info" href={socialData.type}>
              <i class="bi bi-twitter"></i>
            </Button>
            <Button variant="danger" href={socialData.type}>
              <i class="bi bi-youtube"></i>
            </Button>
          </div>
      
          </Container>
    </div>
  );
}
