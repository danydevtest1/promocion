import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { map } from "lodash";
import { Link } from "react-router-dom";

import { Carreras } from "../../../bd";
import { CarrerasItem } from "./CarrerasItem";

import "./HomeCarreras.scss";

export function HomeCarreras() {
  return (
    <Container className="home-carreras">
      <Row>
        <Col>
          <h2>
            <em>Conoce nuestra oferta educativa que tenemos para ti</em>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className="p-2">
          {Carreras.map((carrera) => (
            <div className="nom">
 <CarrerasItem carrera={carrera.nombre} imagen={carrera.imagen} informacion={carrera.informacion}/>
            </div>
           
          ))}
        </Col>
      </Row>
    </Container>
  );
}
