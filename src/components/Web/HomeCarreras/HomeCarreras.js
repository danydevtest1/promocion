import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { map } from "lodash";
import { Link } from "react-router-dom";

import { Carreras } from "../../../bd";

import "./HomeCarreras.scss";

export function HomeCarreras() {
  return (
    <Container className="home-carreras">
      <h2><em>Conoce nuestra oferta educativa que tenemos para ti</em></h2>
      <div className="home-carreras__all-carreras">
      <h1>Este es un ejemplo</h1>
      </div>
    </Container>
  );
}
