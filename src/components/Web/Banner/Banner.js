import React from "react";
import { Container, Row} from "react-bootstrap";
import { Formu } from "../Formulario";
import "./Banner.scss";

export function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row>
          <h3><em>¡¡¡Registráte y sé parte de esta comunidad!!!</em></h3>
          <Formu />
        </Row>
      </Container>

      <div className="banner_dark" />
    </div>
  );
}
