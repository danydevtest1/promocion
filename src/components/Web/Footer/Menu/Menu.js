import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Menu.scss";

export function Menu() {
  return (
    <div className="footer-menu">
        <h4>Navegacion</h4>
        <Container>
        <Row>
        <Col>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Lecturas
          </Link>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Desarrollo
          </Link>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Informacion
          </Link>
        </Col>
        <Col>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Lecturas
          </Link>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Desarrollo
          </Link>
          <Link to="#">
            <i class="bi bi-book-fill"></i> Informacion
          </Link>
        </Col>
      </Row>
        </Container>
      
    </div>
  );
}
